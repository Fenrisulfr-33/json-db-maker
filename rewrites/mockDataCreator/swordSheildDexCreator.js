const fs = require("fs");
const nationalDex = require('../../jsons/07-jsons/07-pokedex.json');
const swordShieldDex = require('../../pokedexes/swsh/SwShDex.json');

const swordShieldDexCreator = () => {
    // create your return array;
    const finalDex = [];
    for (const [key, value] of Object.entries(swordShieldDex)){
        // the key is the pokedexNumber and the value.pokemon is the national _id
        const foundPokemon = nationalDex.find((pokemon) => pokemon._id === value.pokemon);
        // add pokemon to finalDex array
        finalDex.push(foundPokemon);
    }
    // created the fs array
    const data_array = JSON.stringify(finalDex, null, 2); // this makes it pretty
    // write new dex file
    fs.writeFile('./swordShieldMockData.json', data_array, (error) => {
        error ? console.log(error) : console.log("JSON data is saved.");
    });
    return;
}
// call function
swordShieldDexCreator();