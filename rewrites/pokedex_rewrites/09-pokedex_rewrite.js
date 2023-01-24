const dataFetcher = require('../../dataFetcher'),
pokedex = require('../../jsons/08-jsons/concatPokedex.json'),
dexMoves = require('../../jsons/04-jsons/04-moves.json'),
scviTms = require('../../data/tms-trs-hm-jsons/scvi_tms.json');

/**
 * MAIN FUNCTION
 * 
 *  This re writes any JSON data that already had a template you want to preserve and edit/update/or post to
 * @param {object} old_data - the JSON array indivdual object
 * @param {object} new_data - is the array you wish to store your new data in
 * @param {array} new_aray - is the object you wish to store your new data in
 */
const pokedexRewrite09 = (oldData, newData, newArray, errors, checkObj) => {
    oldData.moves ? null : oldData.moves = {};
    newData.moves.forEach((move) => {
        const move_name = move.move.name.replace(/[^a-z]/g, '');
        const found = dexMoves.find((dexMove) => {
            if (dexMove.name.english.toLowerCase().replace(/[^a-z]/g, '') === move_name) { return dexMove; }
        });
        if (found) {
            move.version_group_details.forEach((version) => {   
                const game = version.version_group.name;
                if (game === 'scarlet-violet') {
                    if (version.move_learn_method.name === 'machine') {
                        if (scviTms[move_name]) {
                            if (oldData.moves[found.name.english]){
                                oldData.moves[found.name.english][`${game}-machine`] = 'machine';
                            } else {
                                oldData.moves[found.name.english] = {};
                                oldData.moves[found.name.english][`${game}-machine`] = 'machine';
                            }
                        }
                    } else if (version.move_learn_method.name === 'tutor') {
                        if (oldData.moves[found.name.english]){
                            oldData.moves[found.name.english][`${game}-tutor`] = 'tutor';
                        } else {
                            oldData.moves[found.name.english] = {};
                            oldData.moves[found.name.english][`${game}-tutor`] = 'tutor';
                        }
                    } else if (version.move_learn_method.name === 'level-up') {
                        if (oldData.moves[found.name.english]){
                            oldData.moves[found.name.english][`${game}-lvl`] = version.level_learned_at;
                        } else {
                            oldData.moves[found.name.english] = {};
                            oldData.moves[found.name.english][`${game}-lvl`] = version.level_learned_at;
                        }
                    } else if (version.move_learn_method.name === 'egg') {
                        if (oldData.moves[found.name.english]){
                            oldData.moves[found.name.english][`${game}-egg`] = 'egg';
                        } else {
                            oldData.moves[found.name.english] = {};
                            oldData.moves[found.name.english][`${game}-egg`] = 'egg';
                        }
                    } else {
                        errors[`${version.move_learn_method.name}`] = 'Not tracked';
                    }
                }
            });
        } else {
            errors[move_name] = 'Not in data';
        }
    })
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
    'https://pokeapi.co/api/v2/pokemon', // no API needed
    1007, // index to stop at - 1
    pokedex, // old data
    "../../jsons/09-jsons/09-pokedex.json", // new file write
    pokedexRewrite09, // function passed in
    true, // returnObj = true, returnArray = false || Defaults to true
);