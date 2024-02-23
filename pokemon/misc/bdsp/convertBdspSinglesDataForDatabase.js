const singlesTrainerData = require("./bdspSinglesBattleTowerTrainers.json");
const { pokedex } = require("../../constants");

export default function main() {
  const detailedSinglesTrainerData = singlesTrainerData.map((trainer) => {
    return {
      name: trainer.type,
      title: trainer.title,
      pokemonData: getDetailedPokemonData(trainer.pokemonData)
    };
  });
}

const getDetailedPokemonData = (pokemonData) => {
    return pokemonData.map((pokemon) => {
        const foundPokemon = findPokemonByName(pokemon.name);
        return {
          id: foundPokemon._id,
          name: foundPokemon.name,
          ability: pokemon.ability,
          heldItem: pokemon.heldItem,
          nature: pokemon.nature,
          attacks: [
              pokemon.attacks.one,
              pokemon.attacks.two,
              pokemon.attacks.tre,
              pokemon.attacks.four
          ],
          stats: {
              hp: foundPokemon.baseStats.hp,
              atk: foundPokemon.baseStats.atk,
              def: foundPokemon.baseStats.def,
              spatk: foundPokemon.baseStats.spatk,
              spdef: foundPokemon.baseStats.spdef,
              spd: foundPokemon.baseStats.spd 
          },
          evs: pokemon.evs
        }
    });
};

const findPokemonByName = (pokemonName) => {
  const foundPokemon = pokedex.find((pokemon) => pokemon.name.english === pokemonName);
  if (foundPokemon){
    return foundPokemon;
  } else {
    console.error(`${pokemonName} not found in pokedex`);
  }
};

const modernHpStatCalculator = (level, base, iv, nature, ev) => {
  return ((2 * base + iv + ev / 4) * level) / 100 + level + 10;
};

const modernOtherStatCalculator = (level, base, iv, nature, ev) => {
  return (((2 * base + iv + ev / 4) * level) / 100 + 5) * nature;
};

const getPokemonNatureModifier = (nature, stat) => {
    const positiveAttack = ['Lonely', 'Adamant', 'Naughty', 'Brave'];
    const positiveDefense = ['Bold', 'Impish', 'Lax', 'Relaxed'];
    const positiveSpAttack = ['Modest', 'Mild', 'Rash', 'Quiet'];
    const positiveSpDefense = ['Calm', 'Gentle', 'Careful', 'Sassy'];
    const positiveSpeed = ['Timid', 'Hasty', 'Jolly', 'Naive'];
}

const natures = [
    {
        name: 'Adamant',
        increase: 
    }
]