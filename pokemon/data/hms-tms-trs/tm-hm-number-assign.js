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
const { bulbasaur } = require('../manual-check/01');

const tmHmNumberAssign = (pokemon) => {
    let returnPokemonObj = {...pokemon};
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
        if (returnPokemon.moves[game].machine){
            returnPokemon.moves[game].machine.forEach((move) => {
                const checkMove = move.toLowerCase().replaceAll('-', '').replaceAll(' ', '');
                if (hms[checkMove]){
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
    }


    for (const game in returnPokemonObj.moves){
        let hms = {};
        let tms = {};

        if (game === 'red-blue' || game === 'yellow'){
            hms = rbyHms;
            tms = rbyTms;
            const returnPokemon = createTmHmArrays(returnPokemonObj, game, tms, hms);
            returnPokemonObj = {
                ...
            }
        } else if (game === 'gold-silver' || game === 'crystal'){
            hms = gscHms;
            tms = gscTms;
        } else if (game === 'ruby-sapphire' || game === 'emerald'){
            hms = rseHms;
            tms = rseTms;
        } else if (game === 'firered-leafgreen'){
            hms = frlgHms;
            tms = frlgTms;
        } else if (game === 'diamond-pearl' || game === 'platinum'){
            hms = dppHms;
            tms = dppTms;
        } else if (game === 'heartgold-soulsilver'){
            hms = hgssHms;
            tms = hgssTms;
        } else if (game === 'black-white' || game === 'black-2-white-2'){
            hms = b2w2Hms;
            tms = b2w2Tms;
        } else if (game === 'x-y'){
            hms = xyHms;
            tms = xyTms;
        } else if (game === 'omega-ruby-alpha-sapphire'){
            hms = orasHms;
            tms = orasTms;
        } else if (game === 'sun-moon'){
            tms = smTms;
        } else if (game === 'ultra-sun-ultra-moon'){
            tms = usumTms;
        }
        
        if (returnPokemonObj.moves[game]['technical-machine']){
            returnPokemonObj = {
                ...returnPokemonObj,
                moves:{
                    ...returnPokemonObj.moves,
                    [game]: {
                        ...returnPokemonObj.moves[game],
                        'technical-machine': switchMoves(returnPokemonObj.moves[game]['technical-machine'], tms, 'technical'),
                    }
                }
            }
        }
        if (returnPokemonObj.moves[game]['hidden-machine']){
            returnPokemonObj = {
                ...returnPokemonObj,
                moves:{
                    ...returnPokemonObj.moves,
                    [game]: {
                        ...returnPokemonObj.moves[game],
                        'hidden-machine': switchMoves(returnPokemonObj.moves[game]['hidden-machine'], hms, 'hidden'),
                    }
                }
            }
        }
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
        if (machine === 'technical'){
            newMachines.push(techObj);
        } else {
            newMachines.push(hiddenObj);
        }
        
    });
    if (machine === 'technical'){
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
