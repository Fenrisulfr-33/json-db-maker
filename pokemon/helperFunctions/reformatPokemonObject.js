function reformatPokemonObject(pokemon){
    let returnPokemonObj = {};
    if (pokemon.hasOwnProperty('formsTab')){
        returnPokemonObj = {
            _id: pokemon._id,
            name: pokemon.name,
            pokedexNumber: pokemon.pokedexNumber,
            type: pokemon.type,
            abilities: pokemon.abilities,
            baseStats: pokemon.baseStats,
            info: pokemon.info,
            gender: pokemon.gender,
            evolution: pokemon.evolution,
            generation: pokemon.generation,
            evs: pokemon.evs,
            eggGroups: pokemon.eggGroups,
            species: pokemon.species,
            catchRate: pokemon.catchRate,
            baseFriendship: pokemon.baseFriendship,
            baseExp: pokemon.baseExp,
            growthRate: pokemon.growthRate,
            eggCycles: pokemon.eggCycles,
            nameOrigin: pokemon.nameOrigin,
            gameDropDown: pokemon.gameDropDown,
            formsTab: pokemon.formsTab,
            pokedexEntries: pokemon.pokedexEntries,
            moves: pokemon.moves,
        }
    } else {
        returnPokemonObj = {
            _id: pokemon._id,
            name: pokemon.name,
            pokedexNumber: pokemon.pokedexNumber,
            type: pokemon.type,
            abilities: pokemon.abilities,
            baseStats: pokemon.baseStats,
            info: pokemon.info,
            gender: pokemon.gender,
            evolution: pokemon.evolution,
            generation: pokemon.generation,
            evs: pokemon.evs,
            eggGroups: pokemon.eggGroups,
            species: pokemon.species,
            catchRate: pokemon.catchRate,
            baseFriendship: pokemon.baseFriendship,
            baseExp: pokemon.baseExp,
            growthRate: pokemon.growthRate,
            eggCycles: pokemon.eggCycles,
            nameOrigin: pokemon.nameOrigin,
            gameDropDown: pokemon.gameDropDown,
            pokedexEntries: pokemon.pokedexEntries,
            moves: pokemon.moves,
        }
    }

    return returnPokemonObj
};

module.exports = {
    reformatPokemonObject,
}