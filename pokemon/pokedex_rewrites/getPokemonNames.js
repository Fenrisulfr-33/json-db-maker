const dataFetcher = require("./dataFetcher");
const pokedex = require("./pokedex_jsons/01-pokedex.json");
/**
 * MAIN FUNCTION
 *
 *  This re writes any JSON data that already had a template you want to preserve and edit/update/or post to
 * @param {object} oldData - the JSON array indivdual object
 * @param {object} newData - is the object getting passed into the new array
 * @param {object} checkObj - use this to store and info you want to see at the end of the conversion
 */
const getPokemonNames = (oldData, newData, checkObj) => {
    return oldData?.name?.english 
    ? oldData.name.english.replace('.', '').replace(' ', '-').toLowerCase()
    : console.log(`Pokemon Id: ${oldData._id} has no name.`);
};

/**
 * Data Fetcher Function
 *
 * @param {*} dataURL = incoming api request
 * @param {*} lastNum = the last number of the api request
 * @param {*} oldData = previous version of json file
 * @param {*} fileSaveURL = new save write
 * @param {*} converterFunc = passed in function with changes
 */
dataFetcher(
    "", // '' no API needed : https://pokeapi.co/api/v2/pokemon
    1007, // index to stop at - 1 1008 + 5 forms
    pokedex, // old data
    "./pokemonNames.json", // new file write
    getPokemonNames // function passed in
);
