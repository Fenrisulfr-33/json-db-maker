// const fs = require("fs");
const {
    rbyHms,
    gscHms,
    rseHms,
    frlgHms,
    dppHms,
    hgssHms,
    b2w2Hms,
    xyHms,
    orasHms,
} = require('../data/hms-tms-trs/hms');
const {
    rbyTms,
    gscTms,
    rseTms,
    frlgTms,
    dppTms,
    hgssTms,
    b2w2Tms,
    xyTms,
    orasTms,
    smTms,
    usumTms,
    lgplgeTms,
} = require('../data/hms-tms-trs/tms');
const {
    swshTrs
} = require('../data/hms-tms-trs/trs');

function reformatPokemonMachines(pokemonMoves) {
    let returnPokemonMoves = { ...pokemonMoves };
    // In pokemon moves, each game needs to have tms and hms assigned to the arrays

    /**
     * Input format
     * 
     *  'gold-silver': {
     *      'technical-machine': [
     *          'Headbutt'
     *      ],
     *      'hidden-machine': [
     *          'Cut'
     *      ]
     *  }
     * 
     *  New Format
     * 
     *  'gold-silver': {
     *      'technical-machine': [
     *          {
     *              name: 'Headbutt',
     *              tm: 1
     *          }
     *      ],
     *      'hidden-machine': [
     *          {
     *              name: 'Cut',
     *              hm: 1
     *          }
     *      ]
     *  }
     */
    const createTmHmArrays = (returnPokemon, game, tms, hms) => {
        const hiddenMachines = [];
        const technicalMachines = [];
        if (hms !== null) {
            if (returnPokemonMoves[game].machine) {
                returnPokemonMoves[game].machine.forEach((move) => {
                    const checkMove = move.toLowerCase().replaceAll('-', '').replaceAll(' ', '');
                    if (hms[checkMove]) {
                        hiddenMachines.push({ hm: hms[checkMove], name: move });
                    } else {
                        technicalMachines.push({ tm: tms[checkMove], name: move });
                    }
                });
                returnPokemonMoves[game]['technical-machine'] = technicalMachines;
                returnPokemonMoves[game]['hidden-machine'] = hiddenMachines;
                delete returnPokemonMoves[game].machine
            }
            return returnPokemonMoves;
        } else if (tms !== null) {
            if (returnPokemonMoves[game].machine) {
                returnPokemonMoves[game].machine.forEach((move) => {
                    const checkMove = move.toLowerCase().replaceAll('-', '').replaceAll(' ', '');
                    if (tms[checkMove]) {
                        technicalMachines.push({ tm: tms[checkMove], name: move });
                    } else {
                        console.log(checkMove, 'Not found in', game);
                    }
                });
                returnPokemonMoves[game]['technical-machine'] = technicalMachines;
                delete returnPokemonMoves[game].machine
            }
            return returnPokemon;
        }
    }


    for (const game in returnPokemonMoves) {
        const finishedGames = ['sword-shield', 'brilliant-diamond-shining-pearl', 'legends-arceus'];
        if (finishedGames.includes(game)) {
            null
        } else {

            let hms = {};
            let tms = {};

            if (game === 'red-blue' || game === 'yellow') {
                hms = rbyHms;
                tms = rbyTms;
                returnPokemonMoves = {
                    ...createTmHmArrays(returnPokemonMoves, game, tms, hms)
                }
            } else if (game === 'gold-silver' || game === 'crystal') {
                hms = gscHms;
                tms = gscTms;
                returnPokemonMoves = {
                    ...createTmHmArrays(returnPokemonMoves, game, tms, hms)
                }
            } else if (game === 'ruby-sapphire' || game === 'emerald') {
                hms = rseHms;
                tms = rseTms;
                returnPokemonMoves = {
                    ...createTmHmArrays(returnPokemonMoves, game, tms, hms)
                }
            } else if (game === 'firered-leafgreen') {
                hms = frlgHms;
                tms = frlgTms;
                returnPokemonMoves = {
                    ...createTmHmArrays(returnPokemonMoves, game, tms, hms)
                }
            } else if (game === 'diamond-pearl' || game === 'platinum') {
                hms = dppHms;
                tms = dppTms;
                returnPokemonMoves = {
                    ...createTmHmArrays(returnPokemonMoves, game, tms, hms)
                }
            } else if (game === 'heartgold-soulsilver') {
                hms = hgssHms;
                tms = hgssTms;
                returnPokemonMoves = {
                    ...createTmHmArrays(returnPokemonMoves, game, tms, hms)
                }
            } else if (game === 'black-white' || game === 'black-2-white-2') {
                hms = b2w2Hms;
                tms = b2w2Tms;
                returnPokemonMoves = {
                    ...createTmHmArrays(returnPokemonMoves, game, tms, hms)
                }
            } else if (game === 'x-y') {
                hms = xyHms;
                tms = xyTms;
                returnPokemonMoves = {
                    ...createTmHmArrays(returnPokemonMoves, game, tms, hms)
                }
            } else if (game === 'omega-ruby-alpha-sapphire') {
                hms = orasHms;
                tms = orasTms;
                returnPokemonMoves = {
                    ...createTmHmArrays(returnPokemonMoves, game, tms, hms)
                }
            } else if (game === 'sun-moon') {
                tms = smTms;
                hms = null;
                returnPokemonMoves = {
                    ...createTmHmArrays(returnPokemonMoves, game, tms, hms)
                }
            } else if (game === 'ultra-sun-ultra-moon') {
                tms = usumTms;
                hms = null;
                returnPokemonMoves = {
                    ...createTmHmArrays(returnPokemonMoves, game, tms, hms)
                }
            } else if (game === 'lets-go-pikachu-lets-go-eevee') {
                tms = lgplgeTms;
                hms = null;
                returnPokemonMoves = {
                    ...createTmHmArrays(returnPokemonMoves, game, tms, hms)
                }
                // }  else if (game === 'sword-shield') {
                // TODO: Fix trs and tms, currently I don't see tms in machines, just trs
                //     tms = lgplgeTms;
                //     hms = null;
                //     returnPokemonObj = {
                //         ...createTmHmArrays(returnPokemonObj, game, tms, hms)
                //     }
            }

            // Sort all machines by their number for simplicity
            if (returnPokemonMoves[game]['technical-machine']) {
                returnPokemonMoves = {
                    ...returnPokemonMoves,
                    moves: {
                        ...returnPokemonMoves,
                        [game]: {
                            ...returnPokemonMoves[game],
                            'technical-machine': sortMoves(returnPokemonMoves[game]['technical-machine'], tms, 'technical'),
                        }
                    }
                }
            }
            if (returnPokemonMoves[game]['hidden-machine']) {
                returnPokemonMoves = {
                    ...returnPokemonMoves,
                    moves: {
                        ...returnPokemonMoves,
                        [game]: {
                            ...returnPokemonMoves[game],
                            'hidden-machine': sortMoves(returnPokemonMoves[game]['hidden-machine'], hms, 'hidden'),
                        }
                    }
                }
            }
        }
    }

    return returnPokemonMoves;
}

const sortMoves = (oldMoves, machineObj, machine) => {
    const newMachines = [];
    let sortedMachines = [];
    oldMoves.forEach((move) => {
        const compareMove = move.name.toLowerCase().replaceAll('-', '').replaceAll(' ', '');
        const techObj = {
            name: move,
            tm: machineObj[compareMove],
        }
        const hiddenObj = {
            name: move,
            hm: machineObj[compareMove],
        }
        if (machine === 'technical') {
            newMachines.push(techObj);
        } else {
            newMachines.push(hiddenObj);
        }

    });
    if (machine === 'technical') {
        sortedMachines = newMachines.sort((a, b) => {
            if (a.tm < b.tm) {
                return -1;
            }
        });
    } else {
        sortedMachines = newMachines.sort((a, b) => {
            if (a.hm < b.hm) {
                return -1;
            }
        });
    }

    return sortedMachines;
}

// const writeFile = (fileSaveURL, pokemon) => {
//     const convertedPokemon = tmHmNumberAssign(pokemon);
//     const saveObj = JSON.stringify(convertedPokemon, null, 2);
//     fs.writeFile(fileSaveURL, saveObj, (error) => {
//         if (error) {
//             console.log(error);
//         } else {
//             console.log(`File saved at ${fileSaveURL}`);
//         }
//     })

// }

// writeFile('../manual-check/bulbasaur.json', bulbasaur)

module.exports = {
    reformatPokemonMachines,
}