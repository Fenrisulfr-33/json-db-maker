const { paldeanFormTabs } = require('../data/forms/paldeanForms/paldeanFormsArray');

function addFormsTabToPokemon(pokemonId){
    const foundTab = paldeanFormTabs.find((formTab) => formTab.id === pokemonId);
    if (foundTab) {
        return foundTab.formTab;
    }
}

module.exports = {
    addFormsTabToPokemon
}