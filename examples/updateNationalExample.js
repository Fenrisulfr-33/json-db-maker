/**
 * Example: Update Specific Fields in National Pokedex
 * 
 * This example shows how to use updateNationalPokedex.js
 * to make specific changes to pokemon data
 */

const { updateNationalFiles } = require('./updateNationalPokedex');

// Example 1: Add generation field based on _id
function addGenerationField(pokemon) {
  const id = pokemon._id;
  let generation;
  
  if (id >= 1 && id <= 151) generation = 1;
  else if (id >= 152 && id <= 251) generation = 2;
  else if (id >= 252 && id <= 386) generation = 3;
  else if (id >= 387 && id <= 493) generation = 4;
  else if (id >= 494 && id <= 649) generation = 5;
  else if (id >= 650 && id <= 721) generation = 6;
  else if (id >= 722 && id <= 809) generation = 7;
  else if (id >= 810 && id <= 905) generation = 8;
  else generation = 9;
  
  return {
    ...pokemon,
    generation
  };
}

// Example 2: Normalize type fields
function normalizeTypes(pokemon) {
  if (pokemon.type) {
    return {
      ...pokemon,
      type: {
        one: pokemon.type.one,
        two: pokemon.type.two || null
      }
    };
  }
  return pokemon;
}

// Example 3: Add a computed field
function addIsLegendary(pokemon) {
  const legendaryIds = [144, 145, 146, 150, 151, 243, 244, 245, 249, 250, 251, /* add more */];
  
  return {
    ...pokemon,
    isLegendary: legendaryIds.includes(pokemon._id)
  };
}

// Example 4: Chain multiple transformations
function chainTransformations(pokemon) {
  let result = pokemon;
  result = addGenerationField(result);
  result = normalizeTypes(result);
  result = addIsLegendary(result);
  return result;
}

// Run the transformation you want
if (require.main === module) {
  console.log('Select a transformation to run:\n');
  console.log('1. Add generation field');
  console.log('2. Normalize types');
  console.log('3. Add isLegendary field');
  console.log('4. Chain all transformations\n');
  
  // Modify this to select which transformation to run
  const selectedTransformation = addGenerationField; // Change this
  
  updateNationalFiles(selectedTransformation, {
    dryRun: true,  // Set to false when ready to save
    limit: 10      // Test with 10 files first
  });
}
