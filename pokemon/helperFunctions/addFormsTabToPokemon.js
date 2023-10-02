const { paldeanFormTabs } = require('../data/forms/paldean-forms/paldeanFormsArray');

function addFormsTabToPokemon(pokemonId){
    const foundTab = paldeanFormTabs.find((formTab) => formTab.id === Math.floor(pokemonId));
    if (foundTab) {
        return foundTab.formTab;
    }
}

module.exports = {
    addFormsTabToPokemon
}