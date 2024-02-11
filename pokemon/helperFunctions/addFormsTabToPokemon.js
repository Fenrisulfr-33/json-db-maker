const formTabs = require('../forms/formTabs');

function addFormsTabToPokemon(pokemonId){
    const foundTab = formTabs.find((formTab) => {
        if (formTab.pokemonIds.includes(pokemonId)){
            return formTab;
        }
    });
    if (foundTab) {
        return foundTab.tab;
    }
}

module.exports = addFormsTabToPokemon;