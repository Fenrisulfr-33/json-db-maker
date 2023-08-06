const fs = require("fs");
const pokedex = require("./pokedex_rewrites/pokedex_jsons/01-pokedex.json");
const { assignPokedexNumbers } = require('./helperFunctions/assignPokedexNumbers.js');
const { reformatPokemonObject } = require('./helperFunctions/reformatPokemonObject');
const { addMovesToPokemon } = require('./helperFunctions/addMovesToPokemon');
const { reformatPokemonMoves } = require('./helperFunctions/reformatPokemonMoves');
const { reformatPokemonMachines } = require('./helperFunctions/reformatPokemonMachines');

function pokedexRewrite(){
    pokedex.forEach((pokemon) => {
        delete pokemon.pokedexNumber;
        pokemon.pokedexNumber = assignPokedexNumbers(pokemon._id);
        pokemon.moves = addMovesToPokemon(pokemon._id, pokemon.moves);
        pokemon.moves = reformatPokemonMachines(pokemon.moves);
        pokemon.moves = reformatPokemonMoves(pokemon.moves);
    });
    // Reorders pokemon moves in order of generation.

    // Run this every time to keep the objects in a specific order.
    const reformattedPokedex = pokedex.map((pokemon) => {
      return reformatPokemonObject(pokemon);
    })
    // Save file
    
    // Create saveData in json format
    const saveData = JSON.stringify(reformattedPokedex, null, 2); // this makes it pretty
    // Write JSON string to a file
    fs.writeFile('./03-pokedex.json', saveData, (error) => {
      error ? console.error(error) : null;
      console.log("JSON data is saved.");
    });
};

// Run function
pokedexRewrite();