function addMovesToForms(orginalPokemon, formPokemon){
    const returnFormPokemon = { ...formPokemon };
    returnFormPokemon.moves = {};
    formPokemon.movesToCopy.forEach((game) => {
        returnFormPokemon.moves[game] = orginalPokemon.moves[game]
    });
    delete returnFormPokemon.movesToCopy

    return returnFormPokemon;
}

module.exports = {
    addMovesToForms,
}