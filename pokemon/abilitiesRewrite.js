const fs = require("fs");
const abilities = require("./20230815-abilities.json");
const { reformatAbilityObject } = require('./helperFunctions/reformatAbilityObject');
const { addPokemonThatCanHaveAbility } = require('./helperFunctions/addPokemonThatCanHaveAbility');

function pokedexRewrite() {
    let returnAbilities = abilities;
  // Assign errors, and add any to child functions if you think something is wrong.
  let errors = {};

  returnAbilities.forEach((ability) => {
    
  });

  console.log("errors", errors);
  // Run this every time to keep the objects in a specific order.
  const reformattedAbilities = returnAbilities.map((ability) => {
    return reformatAbilityObject(ability);
  });
  // Save file

  // Create saveData in json format
  const saveData = JSON.stringify(reformattedAbilities, null, 2); // this makes it pretty
  // Write JSON string to a file
  fs.writeFile("./01-abilities.json", saveData, (error) => {
    error ? console.error(error) : null;
    console.log("JSON data is saved.");
  });
}

// Run function
pokedexRewrite();
