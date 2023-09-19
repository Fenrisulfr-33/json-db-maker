const fs = require('fs');
const xyMoves = require('../data/moves/06-xy-moves.json');
const megaPokemonXy = [
    3.1,
    6.1,
    6.2,
    9.1,
    65.1,
    94.1,
    115.1,
    127.1,
    130.1,
    142.1,
    150.1,
    150.2,
    181.1,
    212.1,
    214.1,
    229.1,
    248.1,
    257.1,
    282.1,
    303.1,
    306.1,
    308.1,
    310.1,
    354.1,
    359.1,
    445.1,
    448.1,
    460.1,
];

const addMegaPokemonMovesToXyMoves = () => {
    const returnMegaList = [];
    megaPokemonXy.forEach((megaPokemonId) => {
        const foundMegaMon = xyMoves.find((regularPokemon) => {
            if(regularPokemon.id === Math.floor(megaPokemonId)){
                return regularPokemon;
            }
        });
        returnMegaList.push({
            id: megaPokemonId,
            name: `mega-${foundMegaMon.name}`,
            'x-y': foundMegaMon['x-y']
        });
    });
    const mergeList = xyMoves.concat(returnMegaList);
    const sortedList = mergeList.sort((pokemonA, pokemonB) => {
        if (pokemonA.id < pokemonB.id) {
            return -1;
        }
    });
    const saveJson = JSON.stringify(sortedList, null, 2); // this makes it pretty
    fs.writeFile('../data/moves/06.1-xy-moves.json', saveJson, (error) => {
        if (error) {
            console.log(error);
        }
        console.log("JSON data is saved.");
    });
}
addMegaPokemonMovesToXyMoves();