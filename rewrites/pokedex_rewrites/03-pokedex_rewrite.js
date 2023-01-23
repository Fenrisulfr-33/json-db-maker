const dataFetcher = require('../dataFetcher')
const pokedex = require('../02-jsons/02-pokedex.json');
const dexMoves = require('../01-jsons/01-moves.json');
const swshTrs = require('../tms-trs-hm-jsons/sword_shield_trs.json');
const lgplgeTms = require('../tms-trs-hm-jsons/lgplge_tms.json');
const usumTms = require('../tms-trs-hm-jsons/usun_umoon_tms.json');
const smTms = require('../tms-trs-hm-jsons/sun_moon_tms.json');
const orasTms = require('../tms-trs-hm-jsons/oras_tms.json');
const orasHms = require('../tms-trs-hm-jsons/oras_hms.json');
const xyTms = require('../tms-trs-hm-jsons/xy_tms.json');
const xyHms = require('../tms-trs-hm-jsons/xy_hms.json');
const b2w2Tms = require('../tms-trs-hm-jsons/b2w2_tms.json');
const b2w2Hms = require('../tms-trs-hm-jsons/b2w2_hms.json');
const dppTms = require('../tms-trs-hm-jsons/dpp_tms.json');
const dppHms = require('../tms-trs-hm-jsons/dpp_hms.json');
const hgssTms = require('../tms-trs-hm-jsons/dpp_tms.json');
const hgssHms = require('../tms-trs-hm-jsons/dpp_hms.json');
const rseTms = require('../tms-trs-hm-jsons/rse_tms.json');
const rseHms = require('../tms-trs-hm-jsons/rse_hms.json');
const frlgTms = require('../tms-trs-hm-jsons/frlg_tms.json');
const frlgHms = require('../tms-trs-hm-jsons/frlg_hms.json');
const gscTms = require('../tms-trs-hm-jsons/gsc_tms.json');
const gscHms = require('../tms-trs-hm-jsons/gsc_hms.json');
const rbyTms = require('../tms-trs-hm-jsons/rby_tms.json');
const rbyHms = require('../tms-trs-hm-jsons/rby_hms.json');
/**
 * MAIN FUNCTION
 * 
 *  This re writes any JSON data that already had a template you want to preserve and edit/update/or post to
 * @param {object} old_data - the JSON array indivdual object
 * @param {object} new_data - is the array you wish to store your new data in
 * @param {array} new_aray - is the object you wish to store your new data in
 */
const pokedexRewrite03 = (old_data, new_data, new_array, errors) => {   

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
                    } else if(game === 'lets-go-pikachu-lets-go-eevee') {
                        if (lgplgeTms[move_name]) {
                            old_data.moves[found.name.english][`${game}-machine`] = 'machine';
                        }
                    } else if(game === 'ultra-sun-ultra-moon') {
                        if (usumTms[move_name]) {
                            old_data.moves[found.name.english][`${game}-machine`] = 'machine';
                        }
                    } else if(game === 'sun-moon') {
                        if (smTms[move_name]) {
                            old_data.moves[found.name.english][`${game}-machine`] = 'machine';
                        }
                    } else if(game === 'omega-ruby-alpha-sapphire') {
                        if (orasTms[move_name]) {
                            old_data.moves[found.name.english][`${game}-machine`] = 'technical';
                        } else if (orasHms[move_name]) {
                            old_data.moves[found.name.english][`${game}-machine`] = 'hidden';
                        }
                    } else if(game === 'x-y') {
                        if (xyTms[move_name]) {
                            old_data.moves[found.name.english][`${game}-technical-machine`] = 'technical';
                        } else if (xyHms[move_name]) {
                            old_data.moves[found.name.english][`${game}-machine`] = 'hidden';
                        }
                    } else if(game === 'black-2-white-2') {
                        if (b2w2Tms[move_name]) {
                            old_data.moves[found.name.english][`${game}-machine`] = 'technical';
                        } else if (b2w2Hms[move_name]) {
                            old_data.moves[found.name.english][`${game}-machine`] = 'hidden';
                        }
                    }  else if(game === 'black-white') {
                        if (b2w2Tms[move_name]) {
                            old_data.moves[found.name.english][`${game}-machine`] = 'technical';
                        } else if (b2w2Hms[move_name]) {
                            old_data.moves[found.name.english][`${game}-machine`] = 'hidden';
                        }
                    } else if(game === 'diamond-pearl') {
                        if (dppTms[move_name]) {
                            old_data.moves[found.name.english][`${game}-machine`] = 'technical';
                        } else if (dppHms[move_name]) {
                            old_data.moves[found.name.english][`${game}-machine`] = 'hidden';
                        }
                    } else if(game === 'platinum') {
                        if (dppTms[move_name]) {
                            old_data.moves[found.name.english][`${game}-machine`] = 'technical';
                        } else if (dppHms[move_name]) {
                            old_data.moves[found.name.english][`${game}-machine`] = 'hidden';
                        }
                    } else if(game === 'heartgold-soulsilver') {
                        if (hgssTms[move_name]) {
                            old_data.moves[found.name.english][`${game}-machine`] = 'technical';
                        } else if (hgssHms[move_name]) {
                            old_data.moves[found.name.english][`${game}-machine`] = 'hidden';
                        }
                    } else if(game === 'firered-leafgreen') {
                        if (frlgTms[move_name]) {
                            old_data.moves[found.name.english][`${game}-machine`] = 'technical';
                        } else if (frlgHms[move_name]) {
                            old_data.moves[found.name.english][`${game}-machine`] = 'hidden';
                        }
                    } else if(game === 'emerald') {
                        if (rseTms[move_name]) {
                            old_data.moves[found.name.english][`${game}-machine`] = 'technical';
                        } else if (rseHms[move_name]) {
                            old_data.moves[found.name.english][`${game}-machine`] = 'hidden';
                        }
                    } else if(game === 'ruby-sapphire') {
                        if (rseTms[move_name]) {
                            old_data.moves[found.name.english][`${game}-machine`] = 'technical';
                        } else if (rseHms[move_name]) {
                            old_data.moves[found.name.english][`${game}-machine`] = 'hidden';
                        }
                    } else if(game === 'crystal') {
                        if (gscTms[move_name]) {
                            old_data.moves[found.name.english][`${game}-machine`] = 'technical';
                        } else if (gscHms[move_name]) {
                            old_data.moves[found.name.english][`${game}-machine`] = 'hidden';
                        }
                    } else if(game === 'gold-silver') {
                        if (gscTms[move_name]) {
                            old_data.moves[found.name.english][`${game}-machine`] = 'technical';
                        } else if (gscHms[move_name]) {
                            old_data.moves[found.name.english][`${game}-machine`] = 'hidden';
                        }
                    } else if(game === 'yellow') {
                        if (rbyTms[move_name]) {
                            old_data.moves[found.name.english][`${game}-machine`] = 'technical';
                        } else if (rbyHms[move_name]) {
                            old_data.moves[found.name.english][`${game}-machine`] = 'hidden';
                        }
                    } else if(game === 'red-blue') {
                        if (rbyTms[move_name]) {
                            old_data.moves[found.name.english][`${game}-machine`] = 'technical';
                        } else if (rbyHms[move_name]) {
                            old_data.moves[found.name.english][`${game}-machine`] = 'hidden';
                        }
                    } else {
                        errors[`${game}`] = 'Game not found';
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
                    errors[`${version.move_learn_method.name}`] = 'Not tracked';
                }
            })
        }

    })

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
    'https://pokeapi.co/api/v2/pokemon',
    897,
    pokedex, // old data
    "../03-jsons/03-pokedex.json", // new file write
    pokedexRewrite03, // function passed in
);