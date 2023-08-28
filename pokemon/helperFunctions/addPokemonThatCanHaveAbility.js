const pokedex = require('../20230815-dex.json');

function addPokemonThatCanHaveAbility(ability){  
    const abilityCheck = ability.name.english.replaceAll(' ', '-').replaceAll("'", '').toLowerCase();
    const returnAbility = ability;
    
    delete returnAbility.pokemonWithAbility;
        const normal = [];
        const hidden = [];

    pokedex.forEach((pokemon) => {
        // "abilities": {
        //     "one": {
        //       "name": "Beads of Ruin",
        //       "id": 287
        //     },
        //     "hidden": {
        //       "name": "Beads of Ruin",
        //       "id": 287
        //     }
        //   },
        if (pokemon.abilities.one){
            const abilityOne = pokemon.abilities.one.replaceAll(' ', '-').replaceAll("'", '').toLowerCase();
            if (abilityOne === abilityCheck){
                normal.push({name: pokemon.name.english, id: pokemon._id})
            }
        }
        if (pokemon.abilities.two){
            const abilityTwo = pokemon.abilities.two.replaceAll(' ', '-').replaceAll("'", '').toLowerCase();
            if (abilityTwo === abilityCheck){
                normal.push({name: pokemon.name.english, id: pokemon._id})
            }
        }
        if (pokemon.abilities.hidden){
            const abilityHidden = pokemon.abilities.hidden.replaceAll(' ', '-').replaceAll("'", '').toLowerCase();
            if (abilityHidden === abilityCheck){
                hidden.push({name: pokemon.name.english, id: pokemon._id})
            }
        }
    })
    returnAbility.pokemonWithAbility = {};
    returnAbility.pokemonWithAbility.normal = normal;
    returnAbility.pokemonWithAbility.hidden = hidden;         
}

module.exports = {
    addPokemonThatCanHaveAbility
}