const dataFetcher = require('./dataFetcher');
const pokedex = require('../pokedex_rewrites/finalPokedex/final-pokedex.json');

const getPokemonMovesByGameFromPokeAPI = (oldData, newData, checkObj) => {
    const legendsArceusMoves = {
        'legends-arceus': [

        ]
    }
    newData.moves.forEach((move) => {
        move.version_group_details.forEach((group) => {
            if (group.version_group.name === 'legends-arceus'){
                legendsArceusMoves['legends-arceus'].push(move.move.name)
            }
        })
    })
    return legendsArceusMoves;
};

/**
 * Data Fetcher Function
 *
 * @param {*} dataURL = incoming api request
 * @param {*} lastNum = the last number of the api request
 * @param {*} oldData = previous version of json file
 * @param {*} fileSaveURL = new save write
 * @param {*} converterFunc = passed in function with changes
 */
dataFetcher(
    "https://pokeapi.co/api/v2/pokemon", // '' no API needed : https://pokeapi.co/api/v2/pokemon
    1007, // index to stop at - 1 1008 + 5 forms
    pokedex, // old data
    "./movesByGame.json", // new file write
    getPokemonMovesByGameFromPokeAPI // function passed in
);
