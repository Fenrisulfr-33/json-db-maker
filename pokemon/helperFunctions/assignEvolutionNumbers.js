const evolutionsAssigningMasterKey = require("../evolutions/evolutionsAssigningMasterKey");

/**
 * This function takes in an object, to be used with pokedex-rewrites loop.
 * @param {object} pokemonObj
 * @returns An new/updated evolution numbers key/value pair.
 */
export default function assignEvolutionNumbers(pokemonObj) {
  const foundPokemonEvolution = evolutionsAssigningMasterKey.find(
    (pokemon) => pokemon.id === pokemonObj._id
  );
  foundPokemonEvolution
    ? foundPokemonEvolution.evolution
    : console.error(`No evolution object found for ${pokemonObj.name.english}`);
}
