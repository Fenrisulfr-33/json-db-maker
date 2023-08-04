const fs = require("fs");
const pokedex = require("./pokedex_rewrites/pokedex_jsons/01-pokedex.json");
const { assignPokedexNumbers } = require('./helperFunctions/assignPokedexNumbers.js');
const { reformatPokemonObject } = require('./helperFunctions/reformatPokemonObject');

function pokedexRewrite(){
    pokedex.forEach((pokemon) => {
        delete pokemon.pokedexNumber;
        pokemon.pokedexNumber = assignPokedexNumbers(pokemon._id)
    });



    const reformattedPokedex = pokedex.map((pokemon) => {
      return reformatPokemonObject(pokemon);
    })
    // Save file
    
    // Create saveData in json format
    const saveData = JSON.stringify(reformattedPokedex, null, 2); // this makes it pretty
    // Write JSON string to a file
    fs.writeFile('./00-pokedex.json', saveData, (error) => {
      error ? console.error(error) : null;
      console.log("JSON data is saved.");
    });
};

// Run function
pokedexRewrite();