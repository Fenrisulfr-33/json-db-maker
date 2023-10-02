const fs = require('fs');
const theTealMaskDex = require('../pokedexes/arrayFormatted/teal-mask.json');
const scarletVioletDex = require('../pokedexes/arrayFormatted/scarlet-violet.json');
const legendsArceusDex = require('../pokedexes/arrayFormatted/legends-arceus.json');
const crownTundraDex = require('../pokedexes/arrayFormatted/crown-tundra.json');
const isleOfArmorDex = require('../pokedexes/arrayFormatted/isle-of-armor.json');
const swordShieldDex = require('../pokedexes/arrayFormatted/sword-shield.json');
const ultraSunUltraMoonPoniDex = require('../pokedexes/arrayFormatted/ultra-sun-ultra-moon-poni.json');
const ultraSunUltraMoonUlaulaDex = require('../pokedexes/arrayFormatted/ultra-sun-ultra-moon-ulaula.json');
const ultraSunUltraMoonMelemeleDex = require('../pokedexes/arrayFormatted/ultra-sun-ultra-moon-melemele.json');
const ultraSunUltraMoonAkalaDex = require('../pokedexes/arrayFormatted/ultra-sun-ultra-moon-akala.json');
const ultraSunUltraMoonDex = require('../pokedexes/arrayFormatted/ultra-sun-ultra-moon-alola.json');
const sunMoonPoniDex = require('../pokedexes/arrayFormatted/sun-moon-poni.json');
const sunMoonUlaulaDex = require('../pokedexes/arrayFormatted/sun-moon-ulaula.json');
const sunMoonMelemeleDex = require('../pokedexes/arrayFormatted/sun-moon-melemele.json');
const sunMoonAkalaDex = require('../pokedexes/arrayFormatted/sun-moon-akala.json');
const sunMoonDex = require('../pokedexes/arrayFormatted/sun-moon-alola.json');
const omegaRubyAlphaSapphireDex = require('../pokedexes/arrayFormatted/omega-ruby-alpha-sapphire.json')
const xyMountainDex = require('../pokedexes/arrayFormatted/x-y-mountain.json');
const xyCoastalDex = require('../pokedexes/arrayFormatted/x-y-coastal.json');
const xyCentralDex = require('../pokedexes/arrayFormatted/x-y-central.json');
const black2White2Dex = require('../pokedexes/arrayFormatted/black-2-white-2.json');
const blackWhiteDex = require('../pokedexes/arrayFormatted/black-white.json');
const platinumDex = require('../pokedexes/arrayFormatted/platinum.json');
const diamondPearlDex = require('../pokedexes/arrayFormatted/diamond-pearl.json');
const rubySapphireEmeraldDex = require('../pokedexes/arrayFormatted/ruby-sapphire-emerald.json');
const goldSilverCrystalDex = require('../pokedexes/arrayFormatted/gold-silver-crystal.json');
const redBlueYellowDex = require('../pokedexes/arrayFormatted/red-blue-yellow.json');

const changeDexToNewFormat = (dex, saveRoute) => {
    const returnDex = [];
    dex.forEach((pokemonId, index) => {
        returnDex.push({
            dexNo: index + 1,
            pokemonId,
        })
    })
    const saveJson = JSON.stringify(returnDex, null, 2); // this makes it pretty
    fs.writeFile(saveRoute, saveJson, (error) => {
        if (error) {
            console.log(error);
        }
        console.log("JSON data is saved.");
    });
}

/**
 * Format
 * changeDexToNewFormat(dex, saveRoute);
 */
changeDexToNewFormat(theTealMaskDex, '../pokedexes/objectFormatted/the-teal-mask.json');
changeDexToNewFormat(scarletVioletDex, '../pokedexes/objectFormatted/scarlet-violet.json');
changeDexToNewFormat(legendsArceusDex, '../pokedexes/objectFormatted/legends-arceus.json');
changeDexToNewFormat(crownTundraDex, '../pokedexes/objectFormatted/crown-tundra.json');
changeDexToNewFormat(isleOfArmorDex, '../pokedexes/objectFormatted/isle-of-armor.json');
changeDexToNewFormat(swordShieldDex, '../pokedexes/objectFormatted/sword-shield.json');
changeDexToNewFormat(ultraSunUltraMoonUlaulaDex, '../pokedexes/objectFormatted/ultra-sun-ultra-moon-ulaula.json');
changeDexToNewFormat(ultraSunUltraMoonPoniDex, '../pokedexes/objectFormatted/ultra-sun-ultra-moon-poni.json');
changeDexToNewFormat(ultraSunUltraMoonMelemeleDex, '../pokedexes/objectFormatted/ultra-sun-ultra-moon-melemele.json');
changeDexToNewFormat(ultraSunUltraMoonAkalaDex, '../pokedexes/objectFormatted/ultra-sun-ultra-moon-akala.json');
changeDexToNewFormat(ultraSunUltraMoonDex, '../pokedexes/objectFormatted/ultra-sun-ultra-moon-alola.json');
changeDexToNewFormat(sunMoonPoniDex, '../pokedexes/objectFormatted/sun-moon-poni.json');
changeDexToNewFormat(sunMoonUlaulaDex, '../pokedexes/objectFormatted/sun-moon-ulaula.json');
changeDexToNewFormat(sunMoonMelemeleDex, '../pokedexes/objectFormatted/sun-moon-melemele.json');
changeDexToNewFormat(sunMoonAkalaDex, '../pokedexes/objectFormatted/sun-moon-akala.json');
changeDexToNewFormat(sunMoonDex, '../pokedexes/objectFormatted/sun-moon-alola.json');
changeDexToNewFormat(omegaRubyAlphaSapphireDex, '../pokedexes/objectFormatted/omega-ruby-alpha-sapphire.json');
changeDexToNewFormat(xyMountainDex, '../pokedexes/objectFormatted/x-y-mountain.json');
changeDexToNewFormat(xyCoastalDex, '../pokedexes/objectFormatted/x-y-coastal.json');
changeDexToNewFormat(xyCentralDex, '../pokedexes/objectFormatted/x-y-central.json');
changeDexToNewFormat(black2White2Dex, '../pokedexes/objectFormatted/black-2-white-2.json');
changeDexToNewFormat(blackWhiteDex, '../pokedexes/objectFormatted/black-white.json');
changeDexToNewFormat(platinumDex, '../pokedexes/objectFormatted/platinum.json');
changeDexToNewFormat(diamondPearlDex, '../pokedexes/objectFormatted/diamond-pearl.json');
changeDexToNewFormat(rubySapphireEmeraldDex, '../pokedexes/objectFormatted/ruby-sapphire-emerald.json');
changeDexToNewFormat(goldSilverCrystalDex, '../pokedexes/objectFormatted/gold-silver-crystal.json');
changeDexToNewFormat(redBlueYellowDex, '../pokedexes/objectFormatted/red-blue-yellow.json');