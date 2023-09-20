const evolutionMasterTree = require("../evolutions/evolutionMasterTree");

const addEvolutionObjectToPokemon = (pokemonEvoId) => {
    return evolutionMasterTree[pokemonEvoId] 
    ? evolutionMasterTree[pokemonEvoId]
    : pokemonEvoId
}

module.exports = addEvolutionObjectToPokemon;