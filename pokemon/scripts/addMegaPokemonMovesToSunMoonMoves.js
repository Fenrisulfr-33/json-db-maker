const fs = require('fs');
const sunMoonMoves = require('../data/moves/07.1-sun-moon-moves.json');
const megaPokemonSunMoon = [
    3.1,
    6.1,
    6.2,
    9.1,
    15.1,
    18.1,
    65.1,
    80.1,
    94.1,
    115.1,
    127.1,
    130.1,
    142.1,
    150.1,
    150.2,
    181.1,
    208.1,
    212.1,
    214.1,
    229.1,
    248.1,
    254.1,
    257.1,
    260.1,
    282.1,
    302.1,
    303.1,
    306.1,
    308.1,
    310.1,
    319.1,
    323.1,
    334.1,
    354.1,
    359.1,
    362.1,
    373.1,
    376.1,
    380.1,
    381.1,
    382.1,
    383.1,
    384.1,
    428.1,
    445.1,
    448.1,
    460.1,
    475.1,
    531.1,
    719.1,
];

const addMegaPokemonMovesToSunMoonMoves = () => {
    const returnMegaList = [];
    megaPokemonSunMoon.forEach((megaPokemonId) => {
        const foundMegaMon = sunMoonMoves.find((regularPokemon) => {
            if (regularPokemon.id === Math.floor(megaPokemonId)) {
                return regularPokemon;
            }
        });
        returnMegaList.push({
            id: megaPokemonId,
            name: `mega-${foundMegaMon.name}`,
            'sun-moon': foundMegaMon['sun-moon']
        });
    });
    const mergeList = sunMoonMoves.concat(returnMegaList);
    const sortedList = mergeList.sort((pokemonA, pokemonB) => {
        if (pokemonA.id < pokemonB.id) {
            return -1;
        }
    });
    const saveJson = JSON.stringify(sortedList, null, 2); // this makes it pretty
    fs.writeFile('../data/moves/07.2-sun-moon-moves.json', saveJson, (error) => {
        if (error) {
            console.log(error);
        }
        console.log("JSON data is saved.");
    });
}

addMegaPokemonMovesToSunMoonMoves();