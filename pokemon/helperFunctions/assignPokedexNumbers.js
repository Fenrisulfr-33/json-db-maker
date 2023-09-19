const scarletVioletDex = require('../pokedexes/objectFormatted/scarlet-violet.json');
const legendsArceusDex = require('../pokedexes/objectFormatted/legends-arceus.json');
const crownTundraDex = require('../pokedexes/objectFormatted/crown-tundra.json');
const isleOfArmorDex = require('../pokedexes/objectFormatted/isle-of-armor.json');
const swordShieldDex = require('../pokedexes/objectFormatted/sword-shield.json');
// const ultraSunUltraMoonUlaulaDex = require('../pokedexes/objectFormatted/ultra-sun-ultra-moon-ulaula.json');
// const ultraSunUltraMoonPoniDex = require('../pokedexes/objectFormatted/ultra-sun-ultra-moon-poni.json');
const ultraSunUltraMoonMelemeleDex = require('../pokedexes/objectFormatted/ultra-sun-ultra-moon-melemele.json');
const ultraSunUltraMoonAkalaDex = require('../pokedexes/objectFormatted/ultra-sun-ultra-moon-akala.json');
const ultraSunUltraMoonDex = require('../pokedexes/objectFormatted/ultra-sun-ultra-moon-alola.json');
const blackWhiteDex = require('../pokedexes/objectFormatted/black-white.json');
const platinumDex = require('../pokedexes/objectFormatted/platinum.json');
const diamondPearlDex = require('../pokedexes/objectFormatted/diamond-pearl.json');
const rubySapphireEmeraldDex = require('../pokedexes/objectFormatted/ruby-sapphire-emerald.json');
const goldSilverCrystalDex = require('../pokedexes/objectFormatted/gold-silver-crystal.json');
const redBlueYellowDex = require('../pokedexes/objectFormatted/red-blue-yellow.json');

function assignPokedexNumbers (pokemonId){
    // TODO: Do this at the rewrite not inside the function.
    // For now we delete the pre-existing object until we update the dex and can confirm no old values exist.
    const newPokedexValues = {};

    removeOldDexNoAddNew(pokemonId, scarletVioletDex, 'scarlet-violet', newPokedexValues);
    removeOldDexNoAddNew(pokemonId, legendsArceusDex, 'legends-arceus', newPokedexValues);
    removeOldDexNoAddNew(pokemonId, crownTundraDex, 'crown-tundra', newPokedexValues);
    removeOldDexNoAddNew(pokemonId, isleOfArmorDex, 'isle-of-armor', newPokedexValues);
    removeOldDexNoAddNew(pokemonId, swordShieldDex, 'sword-shield', newPokedexValues);

    removeOldDexNoAddNew(pokemonId, ultraSunUltraMoonDex, 'ultra-sun-ultra-moon', newPokedexValues);
    removeOldDexNoAddNew(pokemonId, blackWhiteDex, 'black-white', newPokedexValues);
    removeOldDexNoAddNew(pokemonId, platinumDex, 'platinum', newPokedexValues);
    removeOldDexNoAddNew(pokemonId, diamondPearlDex, 'diamond-pearl', newPokedexValues);
    removeOldDexNoAddNew(pokemonId, rubySapphireEmeraldDex, 'emerald', newPokedexValues);
    removeOldDexNoAddNew(pokemonId, rubySapphireEmeraldDex, 'ruby-sapphire', newPokedexValues);

    removeOldDexNoAddNew(pokemonId, goldSilverCrystalDex, 'crystal', newPokedexValues);
    removeOldDexNoAddNew(pokemonId, goldSilverCrystalDex, 'gold-silver', newPokedexValues);
    removeOldDexNoAddNew(pokemonId, redBlueYellowDex, 'yellow', newPokedexValues);
    removeOldDexNoAddNew(pokemonId, redBlueYellowDex, 'red-blue', newPokedexValues);

    return newPokedexValues;
};

const removeOldDexNoAddNew = (pokemonNum, dex, newKey, returnObj) => {
        const foundPokemon = dex.find((pokemon) => {
            if (pokemon.pokemonId === pokemonNum) {
                return pokemon
            }
        });
        if (foundPokemon){
            returnObj[newKey] = foundPokemon.dexNo;
        }
        
    return returnObj;
}

module.exports = {
    assignPokedexNumbers,
}