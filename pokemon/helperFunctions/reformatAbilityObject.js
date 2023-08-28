function reformatAbilityObject(ability){
    const key = ability.name.english.replaceAll(' ', '-').replaceAll("'", '').toLowerCase();
    return {
        _id: ability._id,
        key,
        name: ability.name,
        generation: ability.generation,
        effect: ability.effect,
        description: ability.description,
        pokemonWithAbility: ability.pokemonWithAbility,
    }
}

module.exports = {
    reformatAbilityObject
}