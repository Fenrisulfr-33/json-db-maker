const fs = require('fs');
const fetch = require('node-fetch');
// data objects
const pokedex = require('../02-jsons/02-pokedex.json');
/* const moves = require('./00-jsons/00-moves.json') 
Once the moves JSON file was updated from the og moves to 00 moves to 01 moves, use this to re write the pokedex so you can get all moves*/
const dexMoves = require('../01-jsons/01-moves.json');
const swshTrs = require('./swordShieldTRs');

/**
 * ------------------- READ THIS PART ----------------------------
 * 
 *  This rewrite will only change the moves section as I have discovered a better method
 * 
 *  Instead of storing each generation and a list of by tms, hms, lvlUp, etc...
 *  We will have an object that contains each moves and inside that move object it will contain every generatrion and game they can learn that
 *  move in and how they learn it
 * 
 *  moves: {
 *      "move": {
 *          gen_one: {
 *              rb: 20,
 *              y: [ m, t ]
 *          }
 *      }
 *  }
 */

/* ------------------ THIS IS OUR TEMPLATE FROM BEFORE ------------------------ */

const temp = pokedex[93] // Gengar Test
const final = [];


let index = 0;
const fetcher = async () => {
    const POKE_API_URL = 'https://pokeapi.co/api/v2/';
    try {
        if (index > 897) {
            // convert JSON object to string
            const data_array = JSON.stringify(final, null, 2); // this makes it pretty

            // write JSON string to a file
            fs.writeFile('./03-jsons/03-pokedex.json', data_array, (error) => {
                if (error) {
                    console.log(error);
                }
                console.log("JSON data is saved.");
            });
            return;
        }
        const response = await fetch(`${POKE_API_URL}pokemon/${index+1}`);
        const data = await response.json();
        _main_rewrite(pokedex[index], data, final);
        index++
        console.log(`-----Done ${index}-----`)
        fetcher();
    } catch (error) {
        console.log(error);
    }
}
fetcher();

/**
 * MAIN FUNCTION
 * 
 *  This re writes any JSON data that already had a template you want to preserve and edit/update/or post to
 * @param {object} old_data - the JSON array indivdual object
 * @param {object} new_data - is the array you wish to store your new data in
 * @param {array} new_aray - is the object you wish to store your new data in
 */
const _main_rewrite = (old_data, new_data, new_array) => {   

    delete old_data.moves; // remove previous implementation
    delete old_data.locations; // remove previous implementation
    old_data["moves"] = {};

    // new_data.moves = []
    // for each item, find that moves id in the moves list
    // console.log(new_data.moves);
    new_data.moves.forEach((move) => {
        const move_name = move.move.name.replace(/[^a-z]/g, '');
        const found = dexMoves.find((dexMove) => {
            if (dexMove.name.english.toLowerCase().replace(/[^a-z]/g, '') === move_name) { return dexMove; }
        });
        if (found) {
            // console.log(found._id);
            // add the move to the old_data
            old_data.moves[found.name.english] = {};
            move.version_group_details.forEach((version) => {
                
                // if level_learned_at is 0, then use move_learn_method
                const game = version.version_group.name;


                if (version.move_learn_method.name === 'machine') {
                    if(game === 'sword-shield') {
                        if (swshTrs[move_name]) {
                            old_data.moves[found.name.english][`${game}-record`] = swshTrs[move_name];
                        } else {
                            old_data.moves[found.name.english][`${game}-machine`] = 'machine';
                        }
                    }
                } else if (version.move_learn_method.name === 'tutor') {
                    old_data.moves[found.name.english][`${game}-tutor`] = 'tutor';
                } else if (version.move_learn_method.name === 'level-up') {
                    old_data.moves[found.name.english][`${game}-lvl`] = version.level_learned_at;
                } else if (version.move_learn_method.name === 'egg') {
                    old_data.moves[found.name.english][`${game}-egg`] = 'egg';
                } else if (version.move_learn_method.name === 'stadium-surfing-pikachu') {
                    old_data.moves[found.name.english][`${game}-ssp`] = 'stadium-surfing-pikachu';
                } else if (version.move_learn_method.name === 'light-ball-egg') {
                    old_data.moves[found.name.english][`${game}-lbe`] = 'light-ball-egg';
                } else if (version.move_learn_method.name === 'form-change') {
                    old_data.moves[found.name.english][`${game}-fc`] = 'form-change';
                } else if (version.move_learn_method.name === 'zygarde-cube') {
                    old_data.moves[found.name.english][`${game}-zc`] = 'zygarde-cube';
                } else {
                    console.log(`${version.move_learn_method.name} not tracked`);
                }
            })
        }

    })



    new_array.push(old_data) // send your new data into the final product
}