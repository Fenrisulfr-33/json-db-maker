const dataFetcher = require('../dataFetcher'),
pokedex = require('../06-jsons/06-pokedex.json'),
swshDex = require('../pokedexes/swsh/SwShDex.json'),
ioaDex = require('../pokedexes/swsh/IsleOfArmorDex.json');


/**
 * MAIN FUNCTION
 * 
 *  This re writes any JSON data that already had a template you want to preserve and edit/update/or post to
 * @param {object} old_data - the JSON array indivdual object
 * @param {object} new_data - is the array you wish to store your new data in
 * @param {array} new_aray - is the object you wish to store your new data in
 */
const pokedexRewrite07 = (oldData, newData, newArray, errors, checkObj) => {
    // if sword and shield dex pokemon exists, add pokedexNumber swsh to oldData
    for (const [key, value] of Object.entries(swshDex)){
        if (oldData._id === value.pokemon){
            oldData.pokedexNumber['swsh'] = Number(key);
        }
    }
    for (const [key, value] of Object.entries(ioaDex)){
        if (oldData._id === value.pokemon){
            oldData.pokedexNumber['ioa'] = Number(key);
        }
    }
    return oldData;
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
    897, // index to stop at - 1
    pokedex, // old data
    "../07-jsons/07-pokedex.json", // new file write
    pokedexRewrite07, // function passed in
    true, // returnObj = true, returnArray = false || Defaults to true
);