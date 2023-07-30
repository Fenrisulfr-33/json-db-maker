const fs = require("fs");
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
} = require('./hms');
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
} = require('./tms');
const {
    swshTrs
} = require('./trs');
const { bulbasaur } = require('../manual-check/01');

const tmHmNumberAssign = (pokemon) => {
    let returnPokemonObj = { ...pokemon };
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
            if (returnPokemon.moves[game].machine) {
                returnPokemon.moves[game].machine.forEach((move) => {
                    const checkMove = move.toLowerCase().replaceAll('-', '').replaceAll(' ', '');
                    if (hms[checkMove]) {
                        hiddenMachines.push(move);
                    } else {
                        technicalMachines.push(move);
                    }
                });
                returnPokemon.moves[game]['technical-machine'] = technicalMachines;
                returnPokemon.moves[game]['hidden-machine'] = hiddenMachines;
                delete returnPokemon.moves[game].machine
            }
            return returnPokemon;
        } else if (tms !== null) {
            if (returnPokemon.moves[game].machine) {
                returnPokemon.moves[game].machine.forEach((move) => {
                    const checkMove = move.toLowerCase().replaceAll('-', '').replaceAll(' ', '');
                    if (tms[checkMove]) {
                        technicalMachines.push(move);
                    } else {
                        console.log(checkMove, 'Not found in', game);
                    }
                });
                returnPokemon.moves[game]['technical-machine'] = technicalMachines;
                delete returnPokemon.moves[game].machine
            }
            return returnPokemon;
        }
    }


    for (const game in returnPokemonObj.moves) {
        let hms = {};
        let tms = {};

        if (game === 'red-blue' || game === 'yellow') {
            hms = rbyHms;
            tms = rbyTms;
            returnPokemonObj = {
                ...createTmHmArrays(returnPokemonObj, game, tms, hms)
            }
        } else if (game === 'gold-silver' || game === 'crystal') {
            hms = gscHms;
            tms = gscTms;
            returnPokemonObj = {
                ...createTmHmArrays(returnPokemonObj, game, tms, hms)
            }
        } else if (game === 'ruby-sapphire' || game === 'emerald') {
            hms = rseHms;
            tms = rseTms;
            returnPokemonObj = {
                ...createTmHmArrays(returnPokemonObj, game, tms, hms)
            }
        } else if (game === 'firered-leafgreen') {
            hms = frlgHms;
            tms = frlgTms;
            returnPokemonObj = {
                ...createTmHmArrays(returnPokemonObj, game, tms, hms)
            }
        } else if (game === 'diamond-pearl' || game === 'platinum') {
            hms = dppHms;
            tms = dppTms;
            returnPokemonObj = {
                ...createTmHmArrays(returnPokemonObj, game, tms, hms)
            }
        } else if (game === 'heartgold-soulsilver') {
            hms = hgssHms;
            tms = hgssTms;
            returnPokemonObj = {
                ...createTmHmArrays(returnPokemonObj, game, tms, hms)
            }
        } else if (game === 'black-white' || game === 'black-2-white-2') {
            hms = b2w2Hms;
            tms = b2w2Tms;
            returnPokemonObj = {
                ...createTmHmArrays(returnPokemonObj, game, tms, hms)
            }
        } else if (game === 'x-y') {
            hms = xyHms;
            tms = xyTms;
            returnPokemonObj = {
                ...createTmHmArrays(returnPokemonObj, game, tms, hms)
            }
        } else if (game === 'omega-ruby-alpha-sapphire') {
            hms = orasHms;
            tms = orasTms;
            returnPokemonObj = {
                ...createTmHmArrays(returnPokemonObj, game, tms, hms)
            }
        } else if (game === 'sun-moon') {
            tms = smTms;
            hms = null;
            returnPokemonObj = {
                ...createTmHmArrays(returnPokemonObj, game, tms, hms)
            }
        } else if (game === 'ultra-sun-ultra-moon') {
            tms = usumTms;
            hms = null;
            returnPokemonObj = {
                ...createTmHmArrays(returnPokemonObj, game, tms, hms)
            }
        }  else if (game === 'lets-go-pikachu-lets-go-eevee') {
            tms = lgplgeTms;
            hms = null;
            returnPokemonObj = {
                ...createTmHmArrays(returnPokemonObj, game, tms, hms)
            }
        // }  else if (game === 'sword-shield') {
        // TODO: Fix trs and tms, currently I don't see tms in machines, just trs
        //     tms = lgplgeTms;
        //     hms = null;
        //     returnPokemonObj = {
        //         ...createTmHmArrays(returnPokemonObj, game, tms, hms)
        //     }
        }

        if (returnPokemonObj.moves[game]['technical-machine']) {
            returnPokemonObj = {
                ...returnPokemonObj,
                moves: {
                    ...returnPokemonObj.moves,
                    [game]: {
                        ...returnPokemonObj.moves[game],
                        'technical-machine': switchMoves(returnPokemonObj.moves[game]['technical-machine'], tms, 'technical'),
                    }
                }
            }
        }
        if (returnPokemonObj.moves[game]['hidden-machine']) {
            returnPokemonObj = {
                ...returnPokemonObj,
                moves: {
                    ...returnPokemonObj.moves,
                    [game]: {
                        ...returnPokemonObj.moves[game],
                        'hidden-machine': switchMoves(returnPokemonObj.moves[game]['hidden-machine'], hms, 'hidden'),
                    }
                }
            }
        }
    }

    /**
     * Sort Pokemon moves by Generation
     * 
     * colosseum
     * xd
     * ['red-blue']
     * yellow
     * ['gold-silver']
     * crystal
     * ['ruby-sapphire']
     * emerald
     * ['firered-leafgreen']
     * ['diamond-pearl']
     * platinum
     * ['heartgold-soulsilver']
     * ['black-white']
     * ['black-2-white-2']
     * ['x-y']
     * ['omega-ruby-alpha-sapphire']
     * ['sun-moon']
     * ['ultra-sun-ultra-moon']
     * ['lets-go-pikachu-lets-go-eevee']
     * ['sword-shield']
     * ['legends-arceus']
     * ['brilliant-diamond-shining-pearl']
     * ['scarlet-violet']
     */
    const movesGenerationFormat = {};
    returnPokemonObj.moves.colosseum ? movesGenerationFormat.colosseum = returnPokemonObj.moves.colosseum : null;
    returnPokemonObj.moves.xd ? movesGenerationFormat.xd = returnPokemonObj.moves.xd : null;
    returnPokemonObj.moves['red-blue'] ? movesGenerationFormat['red-blue'] = returnPokemonObj.moves['red-blue'] : null;
    returnPokemonObj.moves.yellow ? movesGenerationFormat.yellow = returnPokemonObj.moves.yellow : null;
    returnPokemonObj.moves['gold-silver'] ? movesGenerationFormat['gold-silver'] = returnPokemonObj.moves['gold-silver'] : null;
    returnPokemonObj.moves.crystal ? movesGenerationFormat.crystal = returnPokemonObj.moves.crystal : null;
    returnPokemonObj.moves['ruby-sapphire'] ? movesGenerationFormat['ruby-sapphire'] = returnPokemonObj.moves['ruby-sapphire'] : null;
    returnPokemonObj.moves.emerald ? movesGenerationFormat.emerald = returnPokemonObj.moves.emerald : null;
    returnPokemonObj.moves['firered-leafgreen'] ? movesGenerationFormat['firered-leafgreen'] = returnPokemonObj.moves['firered-leafgreen'] : null;
    returnPokemonObj.moves['diamond-pearl'] ? movesGenerationFormat['diamond-pearl'] = returnPokemonObj.moves['diamond-pearl'] : null;
    returnPokemonObj.moves.platinum ? movesGenerationFormat.platinum = returnPokemonObj.moves.platinum : null;
    returnPokemonObj.moves['heartgold-soulsilver'] ? movesGenerationFormat['heartgold-soulsilver'] = returnPokemonObj.moves['heartgold-soulsilver'] : null;
    returnPokemonObj.moves['black-white'] ? movesGenerationFormat['black-white'] = returnPokemonObj.moves['black-white'] : null;
    returnPokemonObj.moves['black-2-white-2'] ? movesGenerationFormat['black-2-white-2'] = returnPokemonObj.moves['black-2-white-2'] : null;
    returnPokemonObj.moves['x-y'] ? movesGenerationFormat['x-y'] = returnPokemonObj.moves['x-y'] : null;
    returnPokemonObj.moves['omega-ruby-alpha-sapphire'] ? movesGenerationFormat['omega-ruby-alpha-sapphire'] = returnPokemonObj.moves['omega-ruby-alpha-sapphire'] : null;
    returnPokemonObj.moves['sun-moon'] ? movesGenerationFormat['sun-moon'] = returnPokemonObj.moves['sun-moon'] : null;
    returnPokemonObj.moves['ultra-sun-ultra-moon'] ? movesGenerationFormat['ultra-sun-ultra-moon'] = returnPokemonObj.moves['ultra-sun-ultra-moon'] : null;
    returnPokemonObj.moves['lets-go-pikachu-lets-go-eevee'] ? movesGenerationFormat['lets-go-pikachu-lets-go-eevee'] = returnPokemonObj.moves['lets-go-pikachu-lets-go-eevee'] : null;
    returnPokemonObj.moves['sword-shield'] ? movesGenerationFormat['sword-shield'] = returnPokemonObj.moves['sword-shield'] : null;
    returnPokemonObj.moves['legends-arceus'] ? movesGenerationFormat['legends-arceus'] = returnPokemonObj.moves['legends-arceus'] : null;
    returnPokemonObj.moves['brilliant-diamond-shining-pearl'] ? movesGenerationFormat['brilliant-diamond-shining-pearl'] = returnPokemonObj.moves['brilliant-diamond-shining-pearl'] : null;
    returnPokemonObj.moves['scarlet-violet'] ? movesGenerationFormat['scarlet-violet'] = returnPokemonObj.moves['scarlet-violet'] : null;
    returnPokemonObj = {
        ...returnPokemonObj,
        moves: movesGenerationFormat
    }

    return returnPokemonObj;
}

const switchMoves = (oldMoves, machineObj, machine) => {
    const newMachines = [];
    let sortedMachines = [];
    oldMoves.forEach((move) => {
        const compareMove = move.toLowerCase().replaceAll('-', '').replaceAll(' ', '');
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

const writeFile = (fileSaveURL, pokemon) => {
    const convertedPokemon = tmHmNumberAssign(pokemon);
    const saveObj = JSON.stringify(convertedPokemon, null, 2);
    fs.writeFile(fileSaveURL, saveObj, (error) => {
        if (error) {
            console.log(error);
        } else {
            console.log(`File saved at ${fileSaveURL}`);
        }
    })

}

writeFile('../manual-check/bulbasaur.json', bulbasaur)
