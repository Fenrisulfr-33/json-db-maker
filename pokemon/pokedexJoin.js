const fs = require('fs');
const pokemonPath = require("path").join(__dirname, "./pokemon-data/pokedex");
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
  const {
      addFormsTabToPokemon
  } = require('./helperFunctions/addFormsTabToPokemon');
  


const pokedexJoined = [];
const errors = {};

require("fs")
  .readdirSync(pokemonPath)
  .forEach(function (file) {
    const pokemon = require(`./pokemon-data/pokedex/${file}`);
    // console.log(pokemon._id);

    delete pokemon.pokedexNumber;
    pokemon.pokedexNumber = assignPokedexNumbers(pokemon._id);

    delete pokemon.moves;
    pokemon.moves = {};
    pokemon.moves = addMovesToPokemon(pokemon._id, pokemon.moves);

    pokemon.moves = reformatPokemonMoves(pokemon.moves);

    pokemon.gameDropDown = addGameDropDownToPokemon(pokemon.moves);

    pokemon.moves = replaceWrongMoveNames(pokemon.moves, errors);

    const formsTab = addFormsTabToPokemon(pokemon._id);
    // If the pokemon is found to have multiple forms
    if (formsTab) {
        // Then we want to create the key, instead of having it on every json
        pokemon.formsTab = formsTab;
    }

    returnPokemon = reformatPokemonObject(pokemon)

    pokedexJoined.push(returnPokemon);
  });

//   console.log(pokedexJoined);

const pokedexSorted = pokedexJoined.sort((pokemonA, pokemonB) => {
    if (pokemonA._id < pokemonB._id){
        return -1;
    }
})

// console.log(pokedexSorted);

const saveData = JSON.stringify(pokedexSorted, null, 2); 
/**
 * Dex Pokemon      1010
 * 
 * Paldean forms    4
 * Galarian forms    
 * Alolan forms
 * 
 * Mega forms
 * Rotom forms
 *     
 */
console.log('Pokedex length:', pokedexSorted.length);
console.log('errors', errors);
// Write JSON string to a file
fs.writeFile(`./pokemon-data/pokedexJoined.json`, saveData, (error) => {
  error ? console.error(error) : null;
  console.log("JSON data is saved.");
});