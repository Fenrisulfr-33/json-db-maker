const pokemonPath = require("path").join(__dirname, "./pokemon-data/pokedex");
const saveFile = require("./helperFunctions/saveFile");
const addMovesToPokemon = require("./helperFunctions/addMovesToPokemon.js");
const replaceWrongMoveNames = require("./helperFunctions/replaceWrongMoveNames.js");
const assignPokemonPokedexNumbers = require("./helperFunctions/assignPokedexNumbers.js");
const addGameDropDownToPokemon = require("./helperFunctions/addGameDropDownToPokemon.js");
const addFormsTabToPokemon = require('./helperFunctions/addFormsTabToPokemon.js');
const addEvolutionObjectToPokemon = require('./helperFunctions/addEvolutionObjectToPokemon.js');
const assignEvolutionKeys = require('./helperFunctions/assignEvolutionKeys.js');
const { returnPokemonModel, returnPokemonMovesModel } = require('./helperFunctions/returnObjectModels.js');

const pokedexFinal = [];
const errors = {};

require("fs")
  .readdirSync(pokemonPath)
  .forEach(function (file) {
    const pokemon = require(`./pokemon-data/pokedex/${file}`);
    delete pokemon.pokedexNumber;
    pokemon.pokedexNumber = assignPokemonPokedexNumbers(pokemon._id);
    pokemon.moves = addMovesToPokemon(pokemon._id, pokemon.moves);
    pokemon.moves = returnPokemonMovesModel(pokemon.moves);
    // TODO: Write a function to go through moves jsons and fix these errors at the core.
    pokemon.moves = replaceWrongMoveNames(pokemon.moves, errors);
    // TODO: implement gameDropdown on backend
    pokemon.gameDropDown = addGameDropDownToPokemon(pokemon.moves);

    // Adds evolution id to pokemon
    pokemon.evolution = assignEvolutionKeys(pokemon._id);

    returnPokemon = returnPokemonModel(pokemon)
    pokedexFinal.push(returnPokemon);
  });

saveFile(
  pokedexFinal,
  `./pokemon-data/${new Date().toJSON().slice(0, 10)}-pokedex`,
  true,
  "Join Pokedex",
  errors
);