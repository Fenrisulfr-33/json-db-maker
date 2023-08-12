const paldeanFormsArray = require('../data/forms/paldeanForms/paldeanFormsArray');

function addPaldeaAdditionalPokemon(originalPokedex){
    console.log(paldeanFormsArray);
    const returnPokedex = originalPokedex.concat(paldeanFormsArray);
    // console.log(returnPokedex.slice(1007));
    return returnPokedex;
}

module.exports = {
    addPaldeaAdditionalPokemon
}