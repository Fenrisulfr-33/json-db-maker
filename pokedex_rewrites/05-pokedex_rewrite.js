/**
 * Placeholder from manual rewrite due to lack of API info on last 810-899 pokemon
 */const dataFetcher = require('../dataFetcher')
const pokedex = require('../04-jsons/04-pokedex.json');
const evolutions = require('../evolutions/evolutionAssigning.json');
/**
 * MAIN FUNCTION
 * 
 *  This re writes any JSON data that already had a template you want to preserve and edit/update/or post to
 * @param {object} old_data - the JSON array indivdual object
 * @param {object} new_data - is the array you wish to store your new data in
 * @param {array} new_aray - is the object you wish to store your new data in
 */
const pokedexRewrite05 = (old_data, new_data, new_array) => {   
    // Give the first 151 evolution numbers and find a way to transfer all know egg moves from the lowest id available
    if (old_data._id === evolutions[old_data._id - 1].id) {
        old_data.evolution = evolutions[old_data._id - 1].evolution;
    } else {
        console.log(`Failed at pokedex number: ${old_data._id}`);
    }

    new_array.push(old_data) // send your new data into the final product
}

/**
 * 
 * @param {*} dataURL = incoming api request
 * @param {*} lastNum = the last number of the api request
 * @param {*} oldData = previous version of json file
 * @param {*} fileSaveURL = new save write
 * @param {*} converterFunc = passed in function with changes
 */
dataFetcher(
    '', // no API needed
    385, // includes gen 3 and down
    pokedex, // old data
    "../05-jsons/05-pokedex.json", // new file write
    pokedexRewrite05, // function passed in
);