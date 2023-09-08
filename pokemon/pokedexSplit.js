const fs = require("fs");
const pokedex = require("./20230815-dex.json");
const {
  assignPokedexNumbers,
} = require("./helperFunctions/assignPokedexNumbers.js");
const {
  reformatPokemonObject,
} = require("./helperFunctions/reformatPokemonObject");

const pokedexSplit = async () => {
    for (let i = 0; i < pokedex.length; i++){
        const pokemon = pokedex[i];
        delete pokemon.pokedexNumber;
        delete pokemon.gameDropDown;
        pokemon.pokedexNumber = assignPokedexNumbers(pokemon._id);
        delete pokemon.moves;
        const formattedPokemon = reformatPokemonObject(pokemon);
        saveFile(formattedPokemon);
    }
    console.log('Done splitting');
    return;
}

const saveFile = (pokemon) => {
      // Create saveData in json format
  const saveData = JSON.stringify(pokemon, null, 2); // this makes it pretty
  // Write JSON string to a file
  fs.writeFile(`./pokemon-data/pokedex/${pokemon._id}-${pokemon.key}.json`, saveData, (error) => {
    error ? console.error(error) : null;
    // console.log("JSON data is saved.");
  });
}

// Run function
pokedexSplit();
