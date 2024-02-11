const redBlueMoves = require("../moves/games/red-blue-moves.json");
const yellowMoves = require("../moves/games/yellow-moves.json");
const goldSilverMoves = require('../moves/games/gold-silver-moves.json');
const crystalMoves = require('../moves/games/crystal-moves.json');
const rubySapphireMoves = require('../moves/games/ruby-sapphire-moves.json');
const emeraldMoves = require('../moves/games/emerald-moves.json');
const fireRedLeafGreenMoves = require('../moves/games/firered-leafgreen-moves.json');
const diamondPearlMoves = require('../moves/games/diamond-pearl-moves.json');
const platinumMoves = require('../moves/games/platinum-moves.json');
const heartGoldSoulSilverMoves = require('../moves/games/heartgold-soulsilver-moves.json');
const blackWhiteMoves = require('../moves/games/black-white-moves.json');
const black2White2Moves = require('../moves/games/black-2-white-2-moves.json');
const xyMoves = require('../moves/games/xy-moves.json');
// TODO: add x & y form moves
const omegaRubyAlphaSapphireMoves = require('../moves/games/omega-ruby-alpha-sapphire-moves.json');
// TODO: add omega ruby & alpha sapphire form moves
const sunMoonMoves = require('../moves/games/sun-moon-moves.json');
// TODO: add sun and moon form moves
const ultraSunUltraMoonMoves = require('../moves/games/ultra-sun-ultra-moon-moves.json');
// TODO: add ultra sun & ultra moon form moves
const letsGoPikachuEeveeMoves = require('../moves/games/lets-go-pikcahu-eevee-moves.json');
const swordShieldMoves = require('../moves/games/sword-shield-moves.json');
// TODO: add sword & shield form moves
const brilliantDiamondShiningPearlMoves = require('../moves/games/brilliant-diamond-shining-pearl-moves.json');
const legendsArceusMoves = require('../moves/games/legends-arceus-moves.json');
const scarletVioletMoves = require('../moves/games/scarlet-violet-moves.json');
const scarletVioletFormsMoves = require('../moves/forms/scarlet-violet-moves.json');
const concatScarletViolet = scarletVioletMoves.concat(scarletVioletFormsMoves);

const movesByGame = [
    { moves: redBlueMoves, key: 'red-blue', length: 151 },
    { moves: yellowMoves, key: 'yellow', length: 151 },
    { moves: goldSilverMoves, key: 'gold-silver', length: 251 },
    { moves: crystalMoves, key: 'crystal', length: 251 },
    { moves: rubySapphireMoves, key: 'ruby-sapphire', length: 386 },
    { moves: emeraldMoves, key: 'emerald', length: 386 },
    { moves: fireRedLeafGreenMoves, key: 'firered-leafgreen', length: 386 },
    { moves: diamondPearlMoves, key: 'diamond-pearl', length: 493 },
    { moves: platinumMoves, key: 'platinum', length: 493 },
    { moves: heartGoldSoulSilverMoves, key: 'heart-gold-soul-silver', length: 493 },
    { moves: blackWhiteMoves, key: 'black-white', length: 649 },
    { moves: black2White2Moves, key: 'black-2-white-2', length: 649 },
    { moves: xyMoves, key: 'x-y', length: 721 },
    { moves: omegaRubyAlphaSapphireMoves, key: 'omega-ruby-alpha-sapphire', length: 721 },
    { moves: sunMoonMoves, key: 'sun-moon', length: 809 },
    { moves: ultraSunUltraMoonMoves, key: 'ultra-sun-ultra-moon', length: 809 },
    { moves: letsGoPikachuEeveeMoves, key: 'lets-go-pikachu-eevee', length: 809 },
    { moves: swordShieldMoves, key: 'sword-shield', length: 905 },
    { moves: brilliantDiamondShiningPearlMoves, key: 'brilliant-diamond-shining-pearl', length: 905 },
    { moves: legendsArceusMoves, key: 'legends-arceus', length: 905 },
    { moves: concatScarletViolet, key: 'scarlet-violet', length: 1025 },
]

const assignMoves = (moves, pokemonId, returnMoves, game, length) => {
    if (Math.floor(pokemonId) <= length) {
        const foundMoves = moves.find((pokemon) => pokemon.id === pokemonId);
        if (foundMoves) {
            returnMoves[game] = foundMoves[game];
        }
    }
    return returnMoves;
}

function addMovesToPokemon(pokemonId, pokemonMoves) {
    let returnMoves = { ...pokemonMoves };
    movesByGame.forEach((game) => {
        returnMoves = assignMoves(game.moves, pokemonId, returnMoves, game.key, game.length)
    });
    return returnMoves;
}

module.exports = addMovesToPokemon;
