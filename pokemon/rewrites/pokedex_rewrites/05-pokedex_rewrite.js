/**
 * Placeholder from manual rewrite due to lack of API info on last 810-899 pokemon
 */
const dataFetcher = require('../dataFetcher')
const pokedex = require('../04-jsons/04-pokedex.json');
const evolutions = require('../evolutions/00-evolutionsAssigning.json');
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
        old_data.evolution = {};
        old_data.evolution.id = evolutions[old_data._id - 1].evolution;
        old_data.evolution.start = evolutions[old_data._id - 1].start ? true : null
    } else {
        console.log(`Failed at pokedex number: ${old_data._id}`);
    }
    // Add Generations for checking
    if (old_data._id >= 1 && old_data._id < 152){
        old_data['generation'] = 1;
    } else if (old_data._id >= 152 && old_data._id < 252){
        old_data['generation'] = 2;
    } else if (old_data._id >= 252 && old_data._id < 387){
        old_data['generation'] = 3;
    } else if (old_data._id >= 387 && old_data._id < 494){
        old_data['generation'] = 4;
    } else if (old_data._id >= 494 && old_data._id < 650){
        old_data['generation'] = 5;
    } else if (old_data._id >= 650 && old_data._id < 722){
        old_data['generation'] = 6;
    } else if (old_data._id >= 722 && old_data._id < 810){
        old_data['generation'] = 7;
    } else if (old_data._id >= 810 && old_data._id < 899){
        old_data['generation'] = 8;
    } 

    return old_data;// send your new data into the final product
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
    897, // includes gen 3 and down
    pokedex, // old data
    "../05-jsons/05-pokedex.json", // new file write
    pokedexRewrite05, // function passed in
);