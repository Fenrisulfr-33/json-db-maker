const bdspMoves = require("../webscraping/00-bdsp-moves.json");
const laMoves = require("../webscraping/00-legends-arceus-moves.json");
const swshMoves = require("../webscraping/00-sword-shield-moves.json");

function addMovesToPokemon(pokemonId, pokemonMoves) {
  // Create a copy of the pokemon for return.
  const returnMoves = { ...pokemonMoves };

  // If the pokemon id is above id 493, skip this step, as BDSP can only have the first 493.
  if (pokemonId <= 898) {
    // Find is fast here because it is a sorted array.
    const foundSwshMoves = swshMoves.find(
      (swshMon) => swshMon.id === pokemonId
    );
    // If the object exist which it should.
    if (foundSwshMoves) {
      // Give the old object the new moves object.
      returnMoves["sword-shield"] = foundSwshMoves["sword-shield"];
    }
  }

  // LEGENDS ARCEUS ADDITION
  // If the pokemon id is above id 493, skip this step, as BDSP can only have the first 493.
  if (pokemonId <= 905) {
    // Find is fast here because it is a sorted array.
    const foundLaMoves = laMoves.find((laMon) => laMon.id === pokemonId);
    // If the object exist.
    if (foundLaMoves) {
      // Give the old object the new moves object.
      returnMoves["legends-arceus"] = foundLaMoves["legends-arceus"];
    }
  }

  // BDSP MOVE ADDITION

  // If the pokemon id is above id 493, skip this step, as BDSP can only have the first 493.
  if (pokemonId <= 493) {
    // Find is fast here because it is a sorted array.
    const foundBdspMoves = bdspMoves.find(
      (bdspMon) => bdspMon.id === pokemonId
    );
    // If the object exist which it should.
    if (foundBdspMoves) {
      // Give the old object the new moves object.
      returnMoves["brilliant-diamond-shining-pearl"] =
        foundBdspMoves["brilliant-diamond-shining-pearl"];
    }
  }

  return returnMoves;
}

module.exports = {
  addMovesToPokemon,
};
