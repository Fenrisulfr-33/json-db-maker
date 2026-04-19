/**
 * Schema Validation Script
 * 
 * This script validates JSON data files against their corresponding schemas
 * to ensure data integrity before inserting into MongoDB.
 * 
 * Usage: node schemas/validate.js <data-file-path> <schema-name>
 * Example: node schemas/validate.js pokemon/pokemon-data/2024-02-13-pokedex.json pokemon
 */

const Ajv = require('ajv');
const fs = require('fs');
const path = require('path');

// Initialize AJV with options
const ajv = new Ajv({
    allErrors: true,
    verbose: true,
    strictSchema: false
});

// Schema name mappings
const SCHEMAS = {
    'pokemon': './pokemon-schema.json',
    'move': './move-schema.json',
    'ability': './ability-schema.json',
    'pal': './pal-schema.json'
};

/**
 * Load and compile a schema
 */
function loadSchema(schemaName) {
    const schemaPath = path.join(__dirname, SCHEMAS[schemaName]);

    if (!fs.existsSync(schemaPath)) {
        throw new Error(`Schema file not found: ${schemaPath}`);
    }

    const schemaData = JSON.parse(fs.readFileSync(schemaPath, 'utf8'));
    return ajv.compile(schemaData);
}

/**
 * Load data file
 */
function loadData(filePath) {
    const fullPath = path.resolve(filePath);

    if (!fs.existsSync(fullPath)) {
        throw new Error(`Data file not found: ${fullPath}`);
    }

    return JSON.parse(fs.readFileSync(fullPath, 'utf8'));
}

/**
 * Validate data against schema
 */
function validateData(data, validator) {
    // Handle both single objects and arrays
    const items = Array.isArray(data) ? data : [data];
    const errors = [];

    items.forEach((item, index) => {
        const valid = validator(item);

        if (!valid) {
            errors.push({
                index: Array.isArray(data) ? index : null,
                itemId: item._id || item.id || 'unknown',
                itemName: item.name?.english || item.name || item.key || 'unnamed',
                errors: validator.errors
            });
        }
    });

    return {
        isValid: errors.length === 0,
        totalItems: items.length,
        validItems: items.length - errors.length,
        invalidItems: errors.length,
        errors
    };
}

/**
 * Format validation errors for display
 */
function formatErrors(result) {
    if (result.isValid) {
        return `✓ All ${result.totalItems} items are valid!`;
    }

    let output = `✗ Validation failed: ${result.invalidItems} of ${result.totalItems} items have errors\n\n`;

    result.errors.forEach((error, i) => {
        output += `Error ${i + 1}:\n`;
        output += `  Item: ${error.itemName} (ID: ${error.itemId})`;
        if (error.index !== null) output += ` at index ${error.index}`;
        output += `\n`;

        error.errors.forEach(err => {
            output += `  - ${err.instancePath || 'root'}: ${err.message}\n`;
            if (err.params) {
                output += `    ${JSON.stringify(err.params)}\n`;
            }
        });
        output += `\n`;
    });

    return output;
}

/**
 * Main validation function
 */
function main() {
    const args = process.argv.slice(2);

    if (args.length < 2) {
        console.error('Usage: node validate.js <data-file-path> <schema-name>');
        console.error('Available schemas:', Object.keys(SCHEMAS).join(', '));
        process.exit(1);
    }

    const [dataFile, schemaName] = args;

    try {
        console.log(`Loading schema: ${schemaName}...`);
        const validator = loadSchema(schemaName);

        console.log(`Loading data: ${dataFile}...`);
        const data = loadData(dataFile);

        console.log('Validating data...\n');
        const result = validateData(data, validator);

        console.log(formatErrors(result));

        // Exit with error code if validation failed
        process.exit(result.isValid ? 0 : 1);

    } catch (error) {
        console.error('Error:', error.message);
        process.exit(1);
    }
}

// Export for use as module
module.exports = {
    loadSchema,
    loadData,
    validateData,
    formatErrors
};

// Run if executed directly
if (require.main === module) {
    main();
}
