function reformatPokemonObject(pokemon){
    return {
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
        gameDropDown: pokemon.gameDropdown,
        pokedexEntries: pokemon.pokedexEntries,
        moves: pokemon.moves,
    };
};

module.exports = {
    reformatPokemonObject,
}