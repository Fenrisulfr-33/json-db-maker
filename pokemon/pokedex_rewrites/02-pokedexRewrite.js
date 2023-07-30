const dataFetcher = require("./dataFetcher");
const pokedex = require("./pokedex_jsons/01-pokedex.json");
const { scarletVioletDex } = require('../pokedexes/scarlet-violet');
const { swordShieldDex, isleOfArmorDex, crownTundraDex } = require('../pokedexes/sword-shield');
const { goldSilverCrystalDex } = require('../pokedexes/gold-silver-crystal');
const { redBlueYellowDex } = require('../pokedexes/red-blue-yellow');
/**
 * MAIN FUNCTION
 *
 *  This re writes any JSON data that already had a template you want to preserve and edit/update/or post to
 * @param {object} oldData - the JSON array indivdual object
 * @param {object} newData - is the object getting passed into the new array
 * @param {object} checkObj - use this to store and info you want to see at the end of the conversion
 */
const pokedexRewrite02 = (oldData, newData, checkObj) => {
    let returnPokemon = {
        ...oldData
    }
    const removeOldDexNoAddNew = (oldData, dex, oldDex, newKey) => {
        if (dex.includes(oldData._id)) {
            dex.find((num, index) => {
                if (num === oldData._id) {
                    if (oldData.pokedexNumber[oldDex]) { delete oldData.pokedexNumber[oldDex] }
                    oldData.pokedexNumber[newKey] = index + 1;
                }
            });
        } 
        return oldData;
    }

    returnPokemon = removeOldDexNoAddNew(oldData, scarletVioletDex, 'scvi', 'scarlet-violet');
    returnPokemon = removeOldDexNoAddNew(oldData, swordShieldDex, 'swsh', 'sword-shield');
    returnPokemon = removeOldDexNoAddNew(oldData, isleOfArmorDex, 'ioa', 'isle-of-armor');
    returnPokemon = removeOldDexNoAddNew(oldData, crownTundraDex, 'ct', 'crown-tundra');
    returnPokemon = removeOldDexNoAddNew(oldData, goldSilverCrystalDex, 'gsc', 'crystal');
    returnPokemon = removeOldDexNoAddNew(oldData, goldSilverCrystalDex, 'gsc', 'gold-silver');
    returnPokemon = removeOldDexNoAddNew(oldData, redBlueYellowDex, 'rby', 'yellow');
    returnPokemon = removeOldDexNoAddNew(oldData, redBlueYellowDex, 'rby', 'red-blue');


    return returnPokemon;
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
    "", // '' no API needed : https://pokeapi.co/api/v2/pokemon
    1007, // index to stop at - 1 1008 + 5 forms
    pokedex, // old data
    "./pokedex_jsons/02-pokedex.json", // new file write
    pokedexRewrite02 // function passed in
);
