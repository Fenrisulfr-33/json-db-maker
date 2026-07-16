import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { createRequire } from "module";
import saveFile from "./helperFunctions/saveFile.js";
import addMovesToPokemon from "./helperFunctions/addMovesToPokemon.js";
import replaceWrongMoveNames from "./helperFunctions/replaceWrongMoveNames.js";
import assignPokemonPokedexNumbers from "./helperFunctions/assignPokedexNumbers.js";
import addGameDropDownToPokemon from "./helperFunctions/addGameDropDownToPokemon.js";
import addFormsTabToPokemon from './helperFunctions/addFormsTabToPokemon.js';
// import addEvolutionObjectToPokemon from './helperFunctions/addEvolutionObjectToPokemon.js';
// import assignEvolutionKeys from './helperFunctions/assignEvolutionKeys.js';
import { returnPokemonModel, returnPokemonMovesModel } from './helperFunctions/returnObjectModels.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const require = createRequire(import.meta.url);

const pokemonPath = path.join(__dirname, "./pokemon-data/pokedex");

const pokedexFinal = [];
const errors = {};

fs
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
        // TODO: add evolution id to pokemonDocument
        // pokemon.evolution = assignEvolutionKeys(pokemon._id);

        returnPokemon = returnPokemonModel(pokemon)
        pokedexFinal.push(returnPokemon);
    });

function createNewPokedex() {
    /**
     * Loop through the pokemon files to create the new pokedex
     * 
     * assign pokedex numbers to each pokemon
     */
}

saveFile(
    pokedexFinal,
    `./pokemon-data/${new Date().toJSON().slice(0, 10)}-pokedex`,
    true,
    "Join Pokedex",
    errors
);