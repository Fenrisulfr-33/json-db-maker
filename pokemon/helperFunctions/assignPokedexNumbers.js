const { scarletVioletDex } = require('../pokedexes/scarlet-violet');
const { legendsArceusDex } = require('../pokedexes/legends-arceus');
const { swordShieldDex, isleOfArmorDex, crownTundraDex } = require('../pokedexes/sword-shield');
const { goldSilverCrystalDex } = require('../pokedexes/gold-silver-crystal');
const { redBlueYellowDex } = require('../pokedexes/red-blue-yellow');

function assignPokedexNumbers (pokemonId){
    // TODO: Do this at the rewrite not inside the function.
    // For now we delete the pre-existing object until we update the dex and can confirm no old values exist.
    const newPokedexValues = {};

    const removeOldDexNoAddNew = (pokemonNum, dex, newKey, returnObj) => {
        if (dex.includes(pokemonNum)) {
            dex.find((num, index) => {
                if (num === pokemonNum) {
                    returnObj[newKey] = index + 1;
                }
            });
        } 
        return returnObj;
    }

    removeOldDexNoAddNew(pokemonId, scarletVioletDex, 'scarlet-violet', newPokedexValues);
    removeOldDexNoAddNew(pokemonId, legendsArceusDex, 'legends-arceus', newPokedexValues);
    removeOldDexNoAddNew(pokemonId, swordShieldDex, 'sword-shield', newPokedexValues);
    removeOldDexNoAddNew(pokemonId, isleOfArmorDex, 'isle-of-armor', newPokedexValues);
    removeOldDexNoAddNew(pokemonId, crownTundraDex, 'crown-tundra', newPokedexValues);
    removeOldDexNoAddNew(pokemonId, goldSilverCrystalDex, 'crystal', newPokedexValues);
    removeOldDexNoAddNew(pokemonId, goldSilverCrystalDex, 'gold-silver', newPokedexValues);
    removeOldDexNoAddNew(pokemonId, redBlueYellowDex, 'yellow', newPokedexValues);
    removeOldDexNoAddNew(pokemonId, redBlueYellowDex, 'red-blue', newPokedexValues);

    return newPokedexValues;
};

module.exports = {
    assignPokedexNumbers,
}