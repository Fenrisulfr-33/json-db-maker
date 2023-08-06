const bdspMoves = require("../webscraping/00-bdsp-moves.json");
const laMoves = require("../webscraping/00-legends-arceus-moves.json");

function addMovesToPokemon(pokemonId, pokemonMoves) {
  // Create a copy of the pokemon for return.
  const returnMoves = { ...pokemonMoves };

  // LEGENDS ARCEUS ADDITION

  // Find is fast here because it is a sorted array.
  const foundLAMoves = laMoves.find((laMon) => laMon.id === pokemonId);
  // If the object exist.
  if (foundLAMoves) {
    // Give the old object the new moves object.
    returnMoves["legends-arceus"] = foundLAMoves["legends-arceus"];
  } // No console.log exists here because there is no greater if statement.

  // BDSP MOVE ADDITION

  // If the pokemon id is above id 493, skip this step, as BDSP can only have the first 493.
  if (pokemonId <= 493) {
    // Find is fast here because it is a sorted array.
    const foundBDSPMoves = bdspMoves.find(
      (bdspMon) => bdspMon.id === pokemonId
    );
    // If the object exist which it should.
    if (foundBDSPMoves) {
      // Give the old object the new moves object.
      returnMoves["brilliant-diamond-shining-pearl"] =
        foundBDSPMoves["brilliant-diamond-shining-pearl"];
    } else {
      // Just in case of typos, or weird one off cases.
      console.log(`Pokemon id: [${pokemonId}] Not found.`);
    }
  }

  return returnMoves;
}

module.exports = {
  addMovesToPokemon,
};
