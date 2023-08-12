const fs = require("fs");
const pokedex = require("./new-baseline.json");
const {
  assignPokedexNumbers,
} = require("./helperFunctions/assignPokedexNumbers.js");
const {
  reformatPokemonObject,
} = require("./helperFunctions/reformatPokemonObject");
const { addMovesToPokemon } = require("./helperFunctions/addMovesToPokemon");
const {
  reformatPokemonMoves,
} = require("./helperFunctions/reformatPokemonMoves");
const {
  addGameDropDownToPokemon,
} = require("./helperFunctions/addGameDropDownToPokemon");
const {
  replaceWrongMoveNames,
} = require("./helperFunctions/replaceWrongMoveNames");
const {
  changePokedexEntriesData,
} = require("./helperFunctions/changePokedexEntriesData");
const {
  addPaldeaAdditionalPokemon,
} = require("./helperFunctions/addFormsToPokedex");

function pokedexRewrite() {
    let returnPokedex = pokedex;
  // Assign errors, and add any to child functions if you think something is wrong.
  let errors = {};

  // Add forms/Manuals to dex.
  returnPokedex = addPaldeaAdditionalPokemon(returnPokedex);
  returnPokedex.sort((pokemonA, pokemonB) => {
    if (pokemonA._id < pokemonB._id) {
      return -1;
    }
  });

  returnPokedex.forEach((pokemon) => {
    delete pokemon.pokedexNumber;
    pokemon.pokedexNumber = assignPokedexNumbers(pokemon._id);

    // This is how we can update the moves after a new webscrape
    delete pokemon.moves;
    pokemon.moves = {};
    pokemon.moves = addMovesToPokemon(pokemon._id, pokemon.moves);

    // This makes sure all moves are in order
    pokemon.moves = reformatPokemonMoves(pokemon.moves);

    // This makes the GameDropDown new if new games are added, or moves for pokemon
    pokemon.gameDropDown = addGameDropDownToPokemon(pokemon.moves);

    // This is in case any moves are spelled wrong from scrape
    // TODO: fix the rewrite to change moves before they get to this point.
    pokemon.moves = replaceWrongMoveNames(pokemon.moves, errors);

    // This is to fix pokedexEntries until we have a new baseline
    pokemon.pokedexEntries = changePokedexEntriesData(
      pokemon.pokedexEntries,
      pokemon._id,
      errors
    );
  });
  // Reorders pokemon moves in order of generation.
  console.log("errors", errors);
  // Run this every time to keep the objects in a specific order.
  const reformattedPokedex = returnPokedex.map((pokemon) => {
    return reformatPokemonObject(pokemon);
  });
  // Save file

  // Create saveData in json format
  const saveData = JSON.stringify(reformattedPokedex, null, 2); // this makes it pretty
  // Write JSON string to a file
  fs.writeFile("./test.json", saveData, (error) => {
    error ? console.error(error) : null;
    console.log("JSON data is saved.");
  });
}

// Run function
pokedexRewrite();
