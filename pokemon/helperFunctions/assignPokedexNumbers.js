const redBlueYellowDex = require("../pokedexes/objectFormatted/red-blue-yellow.json");
const goldSilverCrystalDex = require("../pokedexes/objectFormatted/gold-silver-crystal.json");
const rubySapphireEmeraldDex = require("../pokedexes/objectFormatted/ruby-sapphire-emerald.json");
const fireRedLeafGreenDex = require("../pokedexes/objectFormatted/firered-leafgreen.json");
const diamondPearlDex = require("../pokedexes/objectFormatted/diamond-pearl.json");
const platinumDex = require("../pokedexes/objectFormatted/platinum.json");
const heartGoldSoulSilverDex = require("../pokedexes/objectFormatted/heartgold-soulsilver.json");
const blackWhiteDex = require("../pokedexes/objectFormatted/black-white.json");
const black2White2Dex = require("../pokedexes/objectFormatted/black-2-white-2.json");
const xyCentralDex = require("../pokedexes/objectFormatted/x-y-central.json");
const xyCoastalDex = require("../pokedexes/objectFormatted/x-y-coastal.json");
const xyMountainDex = require("../pokedexes/objectFormatted/x-y-mountain.json");
const omegaRubyAlphaSapphireDex = require("../pokedexes/objectFormatted/omega-ruby-alpha-sapphire.json");
const sunMoonDex = require("../pokedexes/objectFormatted/sun-moon-alola.json");
const sunMoonAkalaDex = require("../pokedexes/objectFormatted/sun-moon-akala.json");
const sunMoonMelemeleDex = require("../pokedexes/objectFormatted/sun-moon-melemele.json");
const sunMoonUlaulaDex = require("../pokedexes/objectFormatted/sun-moon-ulaula.json");
const sunMoonPoniDex = require("../pokedexes/objectFormatted/sun-moon-poni.json");
const ultraSunUltraMoonDex = require("../pokedexes/objectFormatted/ultra-sun-ultra-moon-alola.json");
const ultraSunUltraMoonAkalaDex = require("../pokedexes/objectFormatted/ultra-sun-ultra-moon-akala.json");
const ultraSunUltraMoonMelemeleDex = require("../pokedexes/objectFormatted/ultra-sun-ultra-moon-melemele.json");
const ultraSunUltraMoonPoniDex = require("../pokedexes/objectFormatted/ultra-sun-ultra-moon-poni.json");
const ultraSunUltraMoonUlaulaDex = require("../pokedexes/objectFormatted/ultra-sun-ultra-moon-ulaula.json");
const swordShieldDex = require("../pokedexes/objectFormatted/sword-shield.json");
const letsGoPikachuEeveeDex = require("../pokedexes/objectFormatted/lets-go-pikachu-eevee.json");
const isleOfArmorDex = require("../pokedexes/objectFormatted/isle-of-armor.json");
const crownTundraDex = require("../pokedexes/objectFormatted/crown-tundra.json");
const legendsArceusDex = require("../pokedexes/objectFormatted/legends-arceus.json");
const scarletVioletDex = require("../pokedexes/objectFormatted/scarlet-violet.json");
const theTealMaskDex = require("../pokedexes/objectFormatted/the-teal-mask.json");
const theIndigoDiskDex = require("../pokedexes/objectFormatted/the-indigo-disk.json");

const pokedexesByGame = [
  { game: "red-blue", dex: redBlueYellowDex },
  { game: "yellow", dex: redBlueYellowDex },
  { game: "gold-silver", dex: goldSilverCrystalDex },
  { game: "crystal", dex: goldSilverCrystalDex },
  { game: "ruby-sapphire", dex: rubySapphireEmeraldDex },
  { game: "emerald", dex: rubySapphireEmeraldDex },
  { game: "firered-leafgreen", dex: fireRedLeafGreenDex },
  { game: "diamond-pearl", dex: diamondPearlDex },
  { game: "platinum", dex: platinumDex },
  { game: "heartgold-soulsilver", dex: heartGoldSoulSilverDex },
  { game: "black-white", dex: blackWhiteDex },
  { game: "black-2-white-2", dex: black2White2Dex },
  { game: "x-y-central", dex: xyCentralDex },
  { game: "x-y-coastal", dex: xyCoastalDex },
  { game: "x-y-mountain", dex: xyMountainDex },
  { game: "omega-ruby-alpha-sapphire", dex: omegaRubyAlphaSapphireDex },
  { game: "sun-moon", dex: sunMoonDex },
  { game: "sun-moon-akala", dex: sunMoonAkalaDex },
  { game: "sun-moon-melemele", dex: sunMoonMelemeleDex },
  { game: "sun-moon-ulaula", dex: sunMoonUlaulaDex },
  { game: "sun-moon-poni", dex: sunMoonPoniDex },
  { game: "ultra-sun-ultra-moon", dex: ultraSunUltraMoonDex },
  { game: "ultra-sun-ultra-moon-akala", dex: ultraSunUltraMoonAkalaDex },
  { game: "ultra-sun-ultra-moon-melemele", dex: ultraSunUltraMoonMelemeleDex },
  { game: "ultra-sun-ultra-moon-poni", dex: ultraSunUltraMoonPoniDex },
  { game: "ultra-sun-ultra-moon-ulaula", dex: ultraSunUltraMoonUlaulaDex },
  { game: "sword-shield", dex: swordShieldDex },
  { game: "lets-go-pikachu-eevee", dex: letsGoPikachuEeveeDex },
  { game: "isle-of-armor", dex: isleOfArmorDex },
  { game: "crown-tundra", dex: crownTundraDex },
  { game: "legends-arceus", dex: legendsArceusDex },
  { game: "scarlet-violet", dex: scarletVioletDex },
  { game: "the-teal-mask", dex: theTealMaskDex },
  { game: "the-indigo-disk", dex: theIndigoDiskDex },
];

function assignPokemonPokedexNumbers(pokemonId) {
  const newPokedexValues = {};
  pokedexesByGame.forEach((pokedex) => {
    addGameAndDexNo(pokemonId, pokedex.dex, pokedex.game, newPokedexValues);
  });
  return newPokedexValues;
}

const addGameAndDexNo = (pokemonId, dex, game, pokedexValues) => {
  const foundPokemon = dex.find((pokemon) => {
    if (pokemon.pokemonId === pokemonId) {
      return pokemon.dexNo;
    }
  });
  if (foundPokemon) {
    pokedexValues[game] = foundPokemon.dexNo;
  }
  return pokedexValues;
};

module.exports = assignPokemonPokedexNumbers;
