const redBlueMoves = require("../data/moves/01-red-blue-moves.json");
const yellowMoves = require("../data/moves/01-yellow-moves.json");
const goldSilverMoves = require('../data/moves/02-gold-silver-moves.json');
const crystalMoves = require('../data/moves/02-crystal-moves.json');
const rubySapphireMoves = require('../data/moves/03-ruby-sapphire-moves.json');
const emeraldMoves = require('../data/moves/03-emerald-moves.json');
const fireRedLeafGreenMoves = require('../data/moves/03-firered-leafgreen-moves.json');
const diamondPearlMoves = require('../data/moves/04-diamond-pearl-moves.json');
const platinumMoves = require('../data/moves/04-platinum-moves.json');
const heartGoldSoulSilverMoves = require('../data/moves/04-heartgold-soulsilver-moves.json');
const blackWhiteMoves = require('../data/moves/05-black-white-moves.json');
const black2White2Moves = require('../data/moves/05-black-2-white-2-moves.json');
const xyMoves = require('../data/moves/06-xy-moves.json');
const omegaRubyAlphaSapphireMoves = require('../data/moves/06-omega-ruby-alpha-sapphire-moves.json');
const sunMoonMoves = require('../data/moves/07-sun-moon-moves.json');
const ultraSunUltraMoonMoves = require('../data/moves/07-ultra-sun-ultra-moon-moves.json');
const letsGoPikachuEeveeMoves = require('../data/moves/07-lets-go-pikcahu-eevee-moves.json');
const swordShieldMoves = require('../data/moves/08-sword-shield-moves.json');
const brilliantDiamondShiningPearlMoves = require('../data/moves/08-brilliant-diamond-shining-pearl-moves.json');
const legendsArceusMoves = require('../data/moves/08-legends-arceus-moves.json');
const scarletVioletMoves = require('../data/moves/09-scarlet-violet-moves.json');

const movesByGame = [
    { moves: redBlueMoves, key: 'red-blue', length: 151 },
    { moves: yellowMoves, key: 'yellow', length: 151 },
    { moves: goldSilverMoves, key: 'gold-silver', length: 251 },
    { moves: crystalMoves, key: 'crystal', length: 251 },
    { moves: rubySapphireMoves, key: 'ruby-sapphire', length: 386 },
    { moves: emeraldMoves, key: 'emerald', length: 386 },
    { moves: fireRedLeafGreenMoves, key: 'fire-red-leaf-green', length: 386 },
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
    { moves: scarletVioletMoves, key: 'scarlet-violet', length: 1008 },
]

const writeMoves = (moves, monId, returnObj, game, length) => {
    if (monId <= length) {
        const foundMoves = moves.find((mon) => mon.id === monId);
        if (foundMoves) {
            returnObj[game] = foundMoves[game];
        }
    }
    return returnObj;
}

function addMovesToPokemon(pokemonId, pokemonMoves) {
    // Create a copy of the pokemon for return.
    let returnMoves = { ...pokemonMoves };
    movesByGame.forEach((game) => {
        returnMoves = writeMoves(game.moves, pokemonId, returnMoves, game.key, game.length)
    });
    return returnMoves;
}

module.exports = {
    addMovesToPokemon,
};
