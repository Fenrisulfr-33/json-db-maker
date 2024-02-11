const { pokedex } = require('../constants');

const addPokemonThatCanHaveAbility = (ability) => {
  const returnAbility = ability;
  if (!ability.key) {
    console.log(`Ability ${ability.name.english} does not have a key.`);
  } else {
    delete returnAbility.pokemonWithAbility;
    const normal = [];
    const hidden = [];

    pokedex.forEach((pokemon) => {
      if (pokemon.abilities.one) {
        const abilityOne = pokemon.abilities.one.name
          .replaceAll(" ", "-")
          .replaceAll("'", "")
          .toLowerCase();
        if (abilityOne === ability.key) {
          normal.push({ name: pokemon.name.english, id: pokemon._id });
        }
      }
      if (pokemon.abilities.two) {
        const abilityTwo = pokemon.abilities.two.name
          .replaceAll(" ", "-")
          .replaceAll("'", "")
          .toLowerCase();
        if (abilityTwo === ability.key) {
          normal.push({ name: pokemon.name.english, id: pokemon._id });
        }
      }
      if (pokemon.abilities.hidden) {
        const abilityHidden = pokemon.abilities.hidden.name
          .replaceAll(" ", "-")
          .replaceAll("'", "")
          .toLowerCase();
        if (abilityHidden === ability.key) {
          hidden.push({ name: pokemon.name.english, id: pokemon._id });
        }
      }
    });
    if (normal.length === 0 && hidden.length === 0){
        console.log(`Ability: ${ability.name.english} does not have any pokemon that learn it.`)
    }
    returnAbility.pokemonWithAbility = {
      normal,
      hidden,
    };
  }
  return returnAbility;
};

module.exports = addPokemonThatCanHaveAbility;
