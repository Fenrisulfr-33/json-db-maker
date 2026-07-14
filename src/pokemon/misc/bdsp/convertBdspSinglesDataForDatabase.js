const singlesTrainerData = require("./bdspSinglesBattleTowerTrainers.json");
const { pokedex } = require('../../../constants');
const saveFile = require('../../helperFunctions/saveFile');

function main() {
  const detailedSinglesTrainerData = singlesTrainerData.map((trainer) => {
    return {
      name: trainer.type,
      title: trainer.title,
      pokemonData: getDetailedPokemonData(trainer.pokemonData)
    };
  });
  saveFile(detailedSinglesTrainerData, './bdspSinglesBattleTowerTrainersDetailedData.json', false, 'bdspBattleTowerSinglesData')
}

const getDetailedPokemonData = (pokemonData) => {
  return pokemonData.map((pokemonTeams) => {
    const detailedPokemonTeams = pokemonTeams.map((pokemon) => {

      const foundPokemon = findPokemonByName(pokemon.name);
      const nature = pokemon.nature;
      const statsWithEvsLevelFifty = {
        hp: modernHpStatCalculator(50, foundPokemon.baseStats.hp, 31, pokemon.evs.hp),
        atk: modernOtherStatCalculator(50, foundPokemon.baseStats.atk, 31, nature, 'atk', pokemon.evs.atk),
        def: modernOtherStatCalculator(50, foundPokemon.baseStats.def, 31, nature, 'def', pokemon.evs.def),
        spatk: modernOtherStatCalculator(50, foundPokemon.baseStats.spatk, 31, nature, 'spatk', pokemon.evs.spAtk),
        spdef: modernOtherStatCalculator(50, foundPokemon.baseStats.spdef, 31, nature, 'spdef', pokemon.evs.spDef),
        spd: modernOtherStatCalculator(50, foundPokemon.baseStats.spd, 31, nature, 'spd', pokemon.evs.spd)
      }

      return {
        id: foundPokemon._id,
        name: foundPokemon.name.english,
        ability: pokemon.ability,
        heldItem: pokemon.heldItem,
        nature: pokemon.nature,
        attacks: [
          pokemon.attacks ? pokemon.attacks.one : pokemon.moves.one,
          pokemon.attacks ? pokemon.attacks.two : pokemon.moves.two,
          pokemon.attacks ? pokemon.attacks.tre : pokemon.moves.tre,
          pokemon.attacks ? pokemon.attacks.four : pokemon.moves.four,
        ],
        // stats: {
        //   hp: foundPokemon.baseStats.hp,
        //   atk: foundPokemon.baseStats.atk,
        //   def: foundPokemon.baseStats.def,
        //   spatk: foundPokemon.baseStats.spatk,
        //   spdef: foundPokemon.baseStats.spdef,
        //   spd: foundPokemon.baseStats.spd
        // },
        stats: statsWithEvsLevelFifty,
        // evs: pokemon.evs
      }
    });
    return detailedPokemonTeams;
  });
};

const findPokemonByName = (pokemonName) => {
  const foundPokemon = pokedex.find((pokemon) => pokemon.name.english === pokemonName);
  if (foundPokemon) {
    return foundPokemon;
  } else {
    console.error(`${pokemonName} not found in pokedex`);
  }
};

const modernHpStatCalculator = (level, base, iv, ev) => {
  return Math.floor(((2 * base + iv + ev / 4) * level) / 100 + level + 10);
};

const getModifierFromNatureAndStat = (nature, stat) => {
  return natures[nature.toLowerCase()][stat];
}

const modernOtherStatCalculator = (level, base, iv, nature, stat, ev) => {
  const natureModifier = getModifierFromNatureAndStat(nature, stat);
  return Math.floor((((2 * base + iv + ev / 4) * level) / 100 + 5) * natureModifier);
};

const baseStatModifier = {
  atk: 1,
  def: 1,
  spatk: 1,
  spdef: 1,
  spd: 1,
};

const natures = {
  adamant: {
    ...baseStatModifier,
    atk: 1.1,
    spatk: .9,
  },
  bashful: {
    ...baseStatModifier,
  },
  bold: {
    ...baseStatModifier,
    def: 1.1,
    atk: .9,
  },
  brave: {
    ...baseStatModifier,
    atk: 1.1,
    spd: .9,
  },
  calm: {
    ...baseStatModifier,
    spdef: 1.1,
    atk: .9,
  },
  careful: {
    ...baseStatModifier,
    spdef: 1.1,
    spatk: .9,
  },
  docile: {
    ...baseStatModifier,
  },
  gentle: {
    ...baseStatModifier,
    spdef: 1.1,
    def: .9,
  },
  hardy: {
    ...baseStatModifier,
  },
  hasty: {
    ...baseStatModifier,
    spd: 1.1,
    def: .9,
  },
  impish: {
    ...baseStatModifier,
    def: 1.1,
    spatk: .9,
  },
  jolly: {
    ...baseStatModifier,
    spd: 1.1,
    spatk: .9,
  },
  lax: {
    ...baseStatModifier,
    def: 1.1,
    spdef: .9,
  },
  lonely: {
    ...baseStatModifier,
    atk: 1.1,
    def: .9,
  },
  mild: {
    ...baseStatModifier,
    spatk: 1.1,
    def: .9,
  },
  modest: {
    ...baseStatModifier,
    spatk: 1.1,
    atk: .9,
  },
  naive: {
    ...baseStatModifier,
    spd: 1.1,
    spdef: .9,
  },
  naughty: {
    ...baseStatModifier,
    atk: 1.1,
    spdef: .9,
  },
  quiet: {
    ...baseStatModifier,
    spatk: 1.1,
    spd: .9,
  },
  quirky: {
    ...baseStatModifier,
  },
  rash: {
    ...baseStatModifier,
    spatk: 1.1,
    spdef: .9,
  },
  relaxed: {
    ...baseStatModifier,
    def: 1.1,
    spd: .9,
  },
  sassy: {
    ...baseStatModifier,
    spdef: 1.1,
    spd: .9,
  },
  serious: {
    ...baseStatModifier,
  },
  timid: {
    ...baseStatModifier,
    spd: 1.1,
    atk: .9,
  },
};

main();