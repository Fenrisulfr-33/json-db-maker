const fs = require("fs");
const pokedex = require('./20230815-dex.json');
const abilities = require("./20230815-abilities.json");
const moves = require('./20230815-moves.json');
const { returnAbilityModel, returnMoveModel, returnPokemonModel } = require('./helperFunctions/returnObjectModels.js');
const {
  assignPokedexNumbers,
} = require("./helperFunctions/assignPokedexNumbers.js");

const split = async (type, list, saveRoute) => {
  for (let i = 0; i < list.length; i++) {
    const item = list[i];
    let saveDoc = null;
    if (type === 'dex'){
      delete item.pokedexNumber;
      delete item.gameDropDown;
      item.pokedexNumber = assignPokedexNumbers(item._id);
      delete item.moves;
      saveDoc = returnPokemonModel(item) 
    };
    if (type === 'moves'){saveDoc = returnMoveModel(item) };
    if (type === 'abilities'){saveDoc = returnAbilityModel(item) };
    saveFile(saveDoc, saveRoute);
    
  }
  console.log("Done splitting");
  return;
};

const saveFile = (saveItem, saveRoute) => {
  // Create saveData in json format
  const saveData = JSON.stringify(saveItem, null, 2); // this makes it pretty
  // Write JSON string to a file
  fs.writeFile(
    `${saveRoute}/${saveItem._id}-${saveItem.key}.json`,
    saveData,
    (error) => {
      error ? console.error(error) : null;
    }
  );
  console.log(`Saved file at ${saveRoute}/${saveItem._id}-${saveItem.key}.json`)
};

// Run function
split('dex', pokedex, "./pokemon-data/pokedex");
split('abilities', abilities, "./pokemon-data/abilities");
split('moves', moves, "./pokemon-data/moves");
