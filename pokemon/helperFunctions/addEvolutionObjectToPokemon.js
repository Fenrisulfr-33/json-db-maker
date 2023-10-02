const evolutionMasterTree = require("../evolutions/evolutionMasterTree");
const evolutionMasterList = require('../evolutions/evolutionMasterList');

// const addEvolutionObjectToPokemon = (pokemonEvoId) => {
//     return evolutionMasterTree[pokemonEvoId]
//         ? evolutionMasterTree[pokemonEvoId]
//         : pokemonEvoId
// }

const addEvolutionObjectToPokemon = (pokemonEvoId) => {
    const foundEvo = evolutionMasterList.find((evo) => evo._id === pokemonEvoId);
    return foundEvo ?
        foundEvo :
        pokemonEvoId;
}

module.exports = addEvolutionObjectToPokemon;