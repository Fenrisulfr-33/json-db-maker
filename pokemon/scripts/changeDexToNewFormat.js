const fs = require('fs');
const redBlueYellowDex = require('../pokedexes/arrayFormatted/red-blue-yellow.json');
const goldSilverCrystalDex = require('../pokedexes/arrayFormatted/gold-silver-crystal.json');
const rubySapphireEmeraldDex = require('../pokedexes/arrayFormatted/ruby-sapphire-emerald.json');
const fireRedLeafGreenDex = require('../pokedexes/arrayFormatted/firered-leafgreen.json');
const diamondPearlDex = require('../pokedexes/arrayFormatted/diamond-pearl.json');
const platinumDex = require('../pokedexes/arrayFormatted/platinum.json');
const heartGoldSoulSilverDex = require('../pokedexes/arrayFormatted/heartgold-soulsilver.json');
const blackWhiteDex = require('../pokedexes/arrayFormatted/black-white.json');
const black2White2Dex = require('../pokedexes/arrayFormatted/black-2-white-2.json');
const xyCentralDex = require('../pokedexes/arrayFormatted/x-y-central.json');
const xyCoastalDex = require('../pokedexes/arrayFormatted/x-y-coastal.json');
const xyMountainDex = require('../pokedexes/arrayFormatted/x-y-mountain.json');
const omegaRubyAlphaSapphireDex = require('../pokedexes/arrayFormatted/omega-ruby-alpha-sapphire.json');
const sunMoonDex = require('../pokedexes/arrayFormatted/sun-moon-alola.json');
const sunMoonAkalaDex = require('../pokedexes/arrayFormatted/sun-moon-akala.json');
const sunMoonMelemeleDex = require('../pokedexes/arrayFormatted/sun-moon-melemele.json');
const sunMoonUlaulaDex = require('../pokedexes/arrayFormatted/sun-moon-ulaula.json');
const sunMoonPoniDex = require('../pokedexes/arrayFormatted/sun-moon-poni.json');
const ultraSunUltraMoonDex = require('../pokedexes/arrayFormatted/ultra-sun-ultra-moon-alola.json');
const ultraSunUltraMoonAkalaDex = require('../pokedexes/arrayFormatted/ultra-sun-ultra-moon-akala.json');
const ultraSunUltraMoonMelemeleDex = require('../pokedexes/arrayFormatted/ultra-sun-ultra-moon-melemele.json');
const ultraSunUltraMoonUlaulaDex = require('../pokedexes/arrayFormatted/ultra-sun-ultra-moon-ulaula.json');
const ultraSunUltraMoonPoniDex = require('../pokedexes/arrayFormatted/ultra-sun-ultra-moon-poni.json');
const swordShieldDex = require('../pokedexes/arrayFormatted/sword-shield.json');
const isleOfArmorDex = require('../pokedexes/arrayFormatted/isle-of-armor.json');
const crownTundraDex = require('../pokedexes/arrayFormatted/crown-tundra.json');
const legendsArceusDex = require('../pokedexes/arrayFormatted/legends-arceus.json');
const scarletVioletDex = require('../pokedexes/arrayFormatted/scarlet-violet.json');
const theTealMaskDex = require('../pokedexes/arrayFormatted/teal-mask.json');
const theIndigoDiskDex = require('../pokedexes/arrayFormatted/the-indigo-disk.json');

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
// Generation 1
changeDexToNewFormat(redBlueYellowDex, '../pokedexes/objectFormatted/red-blue-yellow.json');
// Generation 2
changeDexToNewFormat(goldSilverCrystalDex, '../pokedexes/objectFormatted/gold-silver-crystal.json');
// Generation 3
changeDexToNewFormat(rubySapphireEmeraldDex, '../pokedexes/objectFormatted/ruby-sapphire-emerald.json');
changeDexToNewFormat(fireRedLeafGreenDex, '../pokedexes/objectFormatted/firered-leafgreen.json');
// Generation 4
changeDexToNewFormat(diamondPearlDex, '../pokedexes/objectFormatted/diamond-pearl.json');
changeDexToNewFormat(platinumDex, '../pokedexes/objectFormatted/platinum.json');
changeDexToNewFormat(heartGoldSoulSilverDex, '../pokedexes/objectFormatted/heartgold-soulsilver.json');
// Generation 5
changeDexToNewFormat(blackWhiteDex, '../pokedexes/objectFormatted/black-white.json');
changeDexToNewFormat(black2White2Dex, '../pokedexes/objectFormatted/black-2-white-2.json');
// generation 6
changeDexToNewFormat(xyCentralDex, '../pokedexes/objectFormatted/x-y-central.json');
changeDexToNewFormat(xyCoastalDex, '../pokedexes/objectFormatted/x-y-coastal.json');
changeDexToNewFormat(xyMountainDex, '../pokedexes/objectFormatted/x-y-mountain.json');
// Generation 7
changeDexToNewFormat(omegaRubyAlphaSapphireDex, '../pokedexes/objectFormatted/omega-ruby-alpha-sapphire.json');
changeDexToNewFormat(sunMoonAkalaDex, '../pokedexes/objectFormatted/sun-moon-akala.json');
changeDexToNewFormat(sunMoonDex, '../pokedexes/objectFormatted/sun-moon-alola.json');
changeDexToNewFormat(sunMoonMelemeleDex, '../pokedexes/objectFormatted/sun-moon-melemele.json');
changeDexToNewFormat(sunMoonUlaulaDex, '../pokedexes/objectFormatted/sun-moon-ulaula.json');
changeDexToNewFormat(sunMoonPoniDex, '../pokedexes/objectFormatted/sun-moon-poni.json');
changeDexToNewFormat(ultraSunUltraMoonDex, '../pokedexes/objectFormatted/ultra-sun-ultra-moon-alola.json');
changeDexToNewFormat(ultraSunUltraMoonAkalaDex, '../pokedexes/objectFormatted/ultra-sun-ultra-moon-akala.json');
changeDexToNewFormat(ultraSunUltraMoonMelemeleDex, '../pokedexes/objectFormatted/ultra-sun-ultra-moon-melemele.json');
changeDexToNewFormat(ultraSunUltraMoonPoniDex, '../pokedexes/objectFormatted/ultra-sun-ultra-moon-poni.json');
changeDexToNewFormat(ultraSunUltraMoonUlaulaDex, '../pokedexes/objectFormatted/ultra-sun-ultra-moon-ulaula.json');
// Generation 8
changeDexToNewFormat(swordShieldDex, '../pokedexes/objectFormatted/sword-shield.json');
changeDexToNewFormat(isleOfArmorDex, '../pokedexes/objectFormatted/isle-of-armor.json');
changeDexToNewFormat(crownTundraDex, '../pokedexes/objectFormatted/crown-tundra.json');
changeDexToNewFormat(legendsArceusDex, '../pokedexes/objectFormatted/legends-arceus.json');
// Generation 9
changeDexToNewFormat(scarletVioletDex, '../pokedexes/objectFormatted/scarlet-violet.json');
changeDexToNewFormat(theTealMaskDex, '../pokedexes/objectFormatted/the-teal-mask.json');
changeDexToNewFormat(theIndigoDiskDex, '../pokedexes/objectFormatted/the-indigo-disk.json');