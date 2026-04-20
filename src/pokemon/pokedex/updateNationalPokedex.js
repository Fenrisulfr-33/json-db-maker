/**
 * Update National Pokedex Files
 * 
 * Loops through all JSON files in the national folder and updates them
 * by applying a transformation function
 * 
 * Usage:
 *   node updateNationalPokedex.js
 */

const fs = require('fs');
const path = require('path');
const { forEachFile } = require('../../../schemas/fileUtils');
const assignPokemonPokedexNumbers = require('./AssignPokedexNumbers');

const NATIONAL_DIR = path.join(__dirname, 'national');

/**
 * Update all files in the national folder
 * @param {function} transformFn - Function that receives pokemon data and returns modified data
 * @param {object} options - Options
 * @param {boolean} options.dryRun - If true, logs changes but doesn't save files
 * @param {number} options.limit - Limit number of files to process (for testing)
 */
function updateNationalFiles(transformFn, options = {}) {
  const { dryRun = false, limit = null } = options;
  
  let processedCount = 0;
  let modifiedCount = 0;
  let errorCount = 0;

  console.log('Starting update of national pokedex files...');
  console.log(`Directory: ${NATIONAL_DIR}`);
  if (dryRun) {
    console.log('DRY RUN MODE - No files will be modified\n');
  }

  forEachFile(NATIONAL_DIR, (filepath, index) => {
    // Stop if limit is reached
    if (limit && index >= limit) {
      return;
    }

    try {
      // Read the JSON file
      const fileContent = fs.readFileSync(filepath, 'utf8');
      const pokemonData = JSON.parse(fileContent);
      
      // Apply transformation function
      const modifiedData = transformFn(pokemonData, filepath);
      
      // Check if data was modified
      const wasModified = JSON.stringify(pokemonData) !== JSON.stringify(modifiedData);
      
      if (wasModified) {
        modifiedCount++;
        
        if (!dryRun) {
          // Write back to file with pretty formatting
          fs.writeFileSync(filepath, JSON.stringify(modifiedData, null, 2), 'utf8');
        }
        
        console.log(`✓ Modified: ${path.basename(filepath)}`);
      } else {
        console.log(`- No change: ${path.basename(filepath)}`);
      }
      
      processedCount++;
    } catch (error) {
      errorCount++;
      console.error(`✗ Error processing ${path.basename(filepath)}:`, error.message);
    }
  }, { extension: '.json' });

  console.log('\n' + '='.repeat(60));
  console.log('Update complete!');
  console.log(`Processed: ${processedCount} files`);
  console.log(`Modified: ${modifiedCount} files`);
  console.log(`Errors: ${errorCount} files`);
  console.log('='.repeat(60));
  
  return { processedCount, modifiedCount, errorCount };
}

/**
 * Example transformation functions
 */

// Example 1: Add a new field to all pokemon
function exampleAddField(pokemon) {
  return {
    ...pokemon,
    // newField: 'some value'
  };
}

// Example 2: Modify an existing field
function exampleModifyField(pokemon) {
  return {
    ...pokemon,
    // key: pokemon.key.toUpperCase()
  };
}

// Example 3: Remove a field
function exampleRemoveField(pokemon) {
  const { /* fieldToRemove, */ ...rest } = pokemon;
  return rest;
}

// Example 4: Complex transformation
function exampleComplexTransform(pokemon) {
  // Do something more complex
  const modified = { ...pokemon };
  
  // Your transformation logic here
  
  return modified;
}

// ============================================================================
// Run the update with your transformation function
// ============================================================================

// STEP 1: Define your transformation function
function myTransformFunction(pokemon, filepath) {
  // Modify the pokemon object here
  // Return the modified pokemon object
  
  // Example: Uncomment and modify this
  // return {
  //   ...pokemon,
  //   updated: true
  // };
  
  // For now, return unchanged (remove this when you add your transformation)
  return pokemon;
}

// STEP 2: Run the update
if (require.main === module) {
  // Test with dry run and limit first
  updateNationalFiles(myTransformFunction, { 
    dryRun: true,   // Set to false to actually save changes
    limit: 5        // Remove or set to null to process all files
  });
  
  // When ready to run for real:
  // updateNationalFiles(myTransformFunction, { dryRun: false });
}

updateNationalFiles(assignPokemonPokedexNumbers, {});

// Export for use in other files
module.exports = {
  updateNationalFiles
};
