/**
 * Batch Validation Script
 * 
 * Validates multiple JSON files in a directory
 * 
 * Usage: node schemas/batchValidate.js <directory> <schema-name>
 * Example: node schemas/batchValidate.js pokemon/pokemon-data/moves move
 */

const { forEachFile, getFileInfo } = require('./fileUtils');
const { loadSchema, loadData, validateData, formatErrors } = require('./validate');
const path = require('path');

/**
 * Validate all JSON files in a directory
 */
function batchValidate(dirPath, schemaName, options = {}) {
  const { recursive = false, verbose = true } = options;
  
  console.log(`\n${'='.repeat(60)}`);
  console.log(`Batch Validation: ${schemaName}`);
  console.log(`Directory: ${dirPath}`);
  console.log(`${'='.repeat(60)}\n`);
  
  // Load schema once
  const validator = loadSchema(schemaName);
  
  // Track results
  const results = {
    totalFiles: 0,
    validFiles: 0,
    invalidFiles: 0,
    totalItems: 0,
    validItems: 0,
    invalidItems: 0,
    errors: []
  };
  
  // Process each file
  const fileCount = forEachFile(
    dirPath,
    (filepath, index) => {
      results.totalFiles++;
      
      try {
        // Load and validate data
        const data = loadData(filepath);
        const result = validateData(data, validator);
        
        results.totalItems += result.totalItems;
        results.validItems += result.validItems;
        results.invalidItems += result.invalidItems;
        
        if (result.isValid) {
          results.validFiles++;
          if (verbose) {
            console.log(`✓ ${path.basename(filepath)} - ${result.totalItems} items valid`);
          }
        } else {
          results.invalidFiles++;
          console.log(`✗ ${path.basename(filepath)} - ${result.invalidItems} of ${result.totalItems} items invalid`);
          
          // Store errors with file context
          results.errors.push({
            file: filepath,
            fileName: path.basename(filepath),
            ...result
          });
        }
        
      } catch (error) {
        results.invalidFiles++;
        console.log(`✗ ${path.basename(filepath)} - ERROR: ${error.message}`);
        results.errors.push({
          file: filepath,
          fileName: path.basename(filepath),
          error: error.message
        });
      }
    },
    { extension: '.json', recursive }
  );
  
  // Print summary
  console.log(`\n${'='.repeat(60)}`);
  console.log('SUMMARY');
  console.log(`${'='.repeat(60)}`);
  console.log(`Files processed: ${results.totalFiles}`);
  console.log(`Files valid: ${results.validFiles}`);
  console.log(`Files invalid: ${results.invalidFiles}`);
  console.log(`Total items: ${results.totalItems}`);
  console.log(`Valid items: ${results.validItems}`);
  console.log(`Invalid items: ${results.invalidItems}`);
  console.log(`${'='.repeat(60)}\n`);
  
  // Print detailed errors if any
  if (results.invalidFiles > 0) {
    console.log('DETAILED ERRORS:\n');
    results.errors.forEach((fileError, i) => {
      console.log(`${i + 1}. ${fileError.fileName}`);
      if (fileError.error) {
        console.log(`   Error: ${fileError.error}\n`);
      } else if (fileError.errors) {
        fileError.errors.forEach((itemError, j) => {
          console.log(`   Item ${j + 1}: ${itemError.itemName} (ID: ${itemError.itemId})`);
          itemError.errors.slice(0, 3).forEach(err => {
            console.log(`     - ${err.instancePath || 'root'}: ${err.message}`);
          });
          if (itemError.errors.length > 3) {
            console.log(`     ... and ${itemError.errors.length - 3} more errors`);
          }
        });
        console.log('');
      }
    });
  }
  
  return results;
}

/**
 * Main function
 */
function main() {
  const args = process.argv.slice(2);
  
  if (args.length < 2) {
    console.error('Usage: node batchValidate.js <directory> <schema-name> [--recursive]');
    console.error('\nExamples:');
    console.error('  node schemas/batchValidate.js pokemon/pokemon-data/moves move');
    console.error('  node schemas/batchValidate.js palworld/abilities ability --recursive');
    process.exit(1);
  }
  
  const [dirPath, schemaName, ...flags] = args;
  const recursive = flags.includes('--recursive');
  
  try {
    const results = batchValidate(dirPath, schemaName, { recursive });
    
    // Exit with error code if any validation failed
    process.exit(results.invalidFiles > 0 ? 1 : 0);
    
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

// Export for use as module
module.exports = { batchValidate };

// Run if executed directly
if (require.main === module) {
  main();
}
