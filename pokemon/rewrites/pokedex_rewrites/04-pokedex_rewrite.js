const dataFetcher = require('../dataFetcher')
const pokedex = require('../03-jsons/03-pokedex.json');
/**
 * MAIN FUNCTION
 * 
 *  This re writes any JSON data that already had a template you want to preserve and edit/update/or post to
 * @param {object} old_data - the JSON array indivdual object
 * @param {object} new_data - is the array you wish to store your new data in
 * @param {array} new_aray - is the object you wish to store your new data in
 */
const pokedexRewrite04 = (old_data, new_data, new_array) => {   
    // change pokemon types from an array to an object
    const newTypes = {};
    old_data.type[0] ? newTypes['0'] = old_data.type[0] : null;
    old_data.type[1] ? newTypes['1'] = old_data.type[1] : null;
    old_data.type = newTypes;
    // Change pokemon eggGroups from array to object
    const newEggGroups = {};
    !old_data.eggGroups ? old_data['eggGroups'] = {} : 
        old_data.eggGroups[0] ? newEggGroups['0'] = old_data.eggGroups[0] : null;
        old_data.eggGroups[1] ? newEggGroups['1'] = old_data.eggGroups[1] : null;
        old_data.eggGroups[2] ? newEggGroups['2'] = old_data.eggGroups[2] : null;
        old_data.eggGroups = newEggGroups;

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
    '',
    897,
    pokedex, // old data
    "../04-jsons/04-pokedex.json", // new file write
    pokedexRewrite04, // function passed in
);