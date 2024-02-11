const evolutionMasterList = require('../evolutions/evolutionMasterList');

const addEvolutionObjectToPokemon = (pokemonEvoId) => {
    const foundEvo = evolutionMasterList.find((evo) => evo._id === pokemonEvoId);
    return foundEvo ?
        foundEvo :
        pokemonEvoId;
}

module.exports = addEvolutionObjectToPokemon;