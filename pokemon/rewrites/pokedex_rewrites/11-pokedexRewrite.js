const dataFetcher = require('../../dataFetcher');
const pokedex = require('../../jsons/10-jsons/10-pokedex.json');
const dexMoves = require('../../jsons/04-jsons/04-moves.json');

/**
 * MAIN FUNCTION
 * 
 *  This re writes any JSON data that already had a template you want to preserve and edit/update/or post to
 * @param {object} old_data - the JSON array indivdual object
 * @param {object} new_data - is the object getting passed into the new array
 * @param {array} new_aray - is the array that stores the new data
 */
const pokedexRewrite11 = (oldData, newData, newArray, errors, checkObj) => {
    const {
        baseStats: {
            hp,
            atk,
            def,
            spatk,
            spdef,
            spd
        },
        abilities,
        type,
    } = oldData;

    // "types": [
    //     {
    //       "slot": 1,
    //       "type": {
    //         "name": "electric",
    //         "url": "https://pokeapi.co/api/v2/type/13/"
    //       }
    //     },
    //     {
    //       "slot": 2,
    //       "type": {
    //         "name": "dragon",
    //         "url": "https://pokeapi.co/api/v2/type/16/"
    //       }
    //     }
    //   ],

    /**
     * Convert oldData types to a new object
     * 
     * types: {
     *      "0": "",
     *      "1": ""
     * }
     * 
     * to
     * 
     * types: {
     *      "one": "",
     *      "two": "",
     * }
     */
    oldData.type.one = oldData.type[0];
    oldData.type.two = oldData.type[1];
    // delete old keys
    delete oldData.type[0];
    delete oldData.type[1];
    // add new types
    if (oldData.type.one === ''){
        oldData.type.one = newData.types[0].type.name[0].toUpperCase() + newData.types[0].type.name.substring(1);
    }
    if (oldData.type.two === '' && newData.types[1]){
        oldData.type.two = newData.types[1].type.name[0].toUpperCase() + newData.types[1].type.name.substring(1);
    }

    oldData.abilities.one = oldData.abilities[1];
    oldData.abilities.two = oldData.abilities[2];
    oldData.abilities.hidden = oldData.abilities.h;
    // delete old keys
    delete oldData.abilities[1];
    delete oldData.abilities[2];
    delete oldData.abilities.h;

    // "stats": [
    //     {
    //       "base_stat": 100,
    //       "effort": 0,
    //       "stat": {
    //         "name": "hp",
    //         "url": "https://pokeapi.co/api/v2/stat/1/"
    //       }
    //     },
    //     {
    //       "base_stat": 85,
    //       "effort": 0,
    //       "stat": {
    //         "name": "attack",
    //         "url": "https://pokeapi.co/api/v2/stat/2/"
    //       }
    //     },
    //     {
    //       "base_stat": 100,
    //       "effort": 0,
    //       "stat": {
    //         "name": "defense",
    //         "url": "https://pokeapi.co/api/v2/stat/3/"
    //       }
    //     },
    //     {
    //       "base_stat": 135,
    //       "effort": 3,
    //       "stat": {
    //         "name": "special-attack",
    //         "url": "https://pokeapi.co/api/v2/stat/4/"
    //       }
    //     },
    //     {
    //       "base_stat": 115,
    //       "effort": 0,
    //       "stat": {
    //         "name": "special-defense",
    //         "url": "https://pokeapi.co/api/v2/stat/5/"
    //       }
    //     },
    //     {
    //       "base_stat": 135,
    //       "effort": 0,
    //       "stat": {
    //         "name": "speed",
    //         "url": "https://pokeapi.co/api/v2/stat/6/"
    //       }
    //     }
    //   ],
    
    // Everypokemon should have a baseStat HP so will just check that one
    if (oldData.baseStats.hp === 0){
        oldData.baseStats.hp = newData.stats[0].base_stat;
        oldData.baseStats.atk = newData.stats[1].base_stat;
        oldData.baseStats.def = newData.stats[2].base_stat;
        oldData.baseStats.spatk = newData.stats[3].base_stat;
        oldData.baseStats.spdef = newData.stats[4].base_stat;
        oldData.baseStats.spd = newData.stats[5].base_stat;
        // make a total stats
        oldData.baseStats.total = newData.stats[0].base_stat + 
            newData.stats[1].base_stat + 
            newData.stats[2].base_stat +
            newData.stats[3].base_stat +
            newData.stats[4].base_stat + 
            newData.stats[5].base_stat;
    } else {
        // make a total stats
        oldData.baseStats.total = hp + atk + def + spatk + spdef + spd;
    }
    // evs, check to see if the object is empty first
    if (Object.keys(oldData.evs).length === 0){
        newData.stats.forEach((stat) => {
            if (stat.effort !== 0){
                if (stat.name === 'hp') { oldData.evs.hp = stat.effort }
                if (stat.name === 'attack') {oldData.evs.atk = stat.effort}
                if (stat.name === 'defense') {oldData.evs.def = stat.effort}
                if (stat.name === 'special-attack') {oldData.evs.spatk = stat.effort}
                if (stat.name === 'special-defense') {oldData.evs.spdef = stat.effort}
                if (stat.name === 'speed') {oldData.evs.spd = stat.effort}
            }
        })
    }

    // "abilities": [
    //     {
    //       "ability": {
    //         "name": "unaware",
    //         "url": "https://pokeapi.co/api/v2/ability/109/"
    //       },
    //       "is_hidden": false,
    //       "slot": 1
    //     },
    //     {
    //       "ability": {
    //         "name": "oblivious",
    //         "url": "https://pokeapi.co/api/v2/ability/12/"
    //       },
    //       "is_hidden": false,
    //       "slot": 2
    //     },
    //     {
    //       "ability": {
    //         "name": "water-veil",
    //         "url": "https://pokeapi.co/api/v2/ability/41/"
    //       },
    //       "is_hidden": true,
    //       "slot": 3
    //     }
    //   ],
    if (oldData.abilities.one === ''){
        const newAbility = newData.abilities[0].ability.name[0].toUpperCase() + newData.abilities[0].ability.name.substring(1);
        const fixed = newAbility.replace('-', ' ');
        oldData.abilities.one = fixed;
    }
    if (oldData.abilities.two === '' && newData.abilities[1] && newData.abilities[1].is_hidden === false){
        const newAbility = newData.abilities[1].ability.name[0].toUpperCase() + newData.abilities[1].ability.name.substring(1);
        const fixed  = newAbility.replace('-', ' ');
        oldData.abilities.two = fixed;
        if (oldData.abilities.hidden === '' && newData.abilities[2].is_hidden){ 
            const newAbility = newData.abilities[2].ability.name[0].toUpperCase() + newData.abilities[2].ability.name.substring(1);
            const fixed = newAbility.replace('-', ' ');
            oldData.abilities.hidden = fixed;
        }
    } else if (oldData.abilities.hidden === '' && newData.abilities[1] && newData.abilities[1].is_hidden === true){
        if (oldData.abilities.hidden === '' && newData.abilities[1].is_hidden){
            const newAblity = newData.abilities[1].ability.name[0].toUpperCase() + newData.abilities[1].ability.name.substring(1);
            const fixed = newAblity.replace('-', ' ');
            oldData.abilities.hidden = fixed;
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
    // '', // no API needed
    'https://pokeapi.co/api/v2/pokemon', // no API needed
    1007, // index to stop at - 1
    pokedex, // old data
    "../../jsons/11-jsons/11-pokedex.json", // new file write
    pokedexRewrite11, // function passed in
    true, // returnObj = true, returnArray = false || Defaults to true
);