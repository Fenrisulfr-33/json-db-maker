const redBlueMoves = require("../data/moves/01-red-blue-moves.json");
const yellowMoves = require("../data/moves/01-yellow-moves.json");
const goldSilverMoves = require('../data/moves/02-gold-silver-moves.json');
const crystalMoves = require('../data/moves/02-crystal-moves.json');
const rubySapphireMoves = require('../data/moves/03-ruby-sapphire-moves.json');
const emeraldMoves = require('../data/moves/03-emerald-moves.json');
const fireRedLeafGreenMoves = require('../data/moves/03-firered-leafgreen-moves.json');
const diamondPearlMoves = require('../data/moves/04-diamond-pearl-moves.json');
const platinumMoves = require('../data/moves/04-platinum-moves.json');

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
