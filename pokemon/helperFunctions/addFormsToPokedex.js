const { paldeanFormsArray } = require('../data/forms/paldeanForms/paldeanFormsArray');

function addPaldeaAdditionalPokemon(originalPokedex){
    return originalPokedex.concat(paldeanFormsArray);
}

module.exports = {
    addPaldeaAdditionalPokemon
}