const returnMoveModel = (move) => {
  return {
    _id: move._id,
    key: move.name.english
      .replaceAll(" ", "-")
      .replaceAll("'", "")
      .toLowerCase(),
    name: move.name,
    type: move.type,
    category: move.category,
    contest: move.contest,
    pp: move.pp,
    power: move.power,
    accuracy: move.accuracy,
    contact: move.contact,
    generation: Number(move.generation),
    target: move.target,
    changes: move.changes,
    description: move.description,
    effect: move.effect,
    priority: move.priority,
  };
};

const returnPokemonModel = (pokemon) => {
  const key = pokemon.name.english
    .replaceAll(" ", "-")
    .replaceAll("'", "")
    .toLowerCase();
  let returnPokemonObj = {};
  if (pokemon.hasOwnProperty("formsTab")) {
    returnPokemonObj = {
      _id: pokemon._id,
      key,
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
    };
  } else {
    returnPokemonObj = {
      _id: pokemon._id,
      key,
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
    };
  }

  return returnPokemonObj;
};

const returnAbilityModel = (ability) => {
  return {
    _id: ability._id,
    key: ability.name.english
    .replaceAll(" ", "-")
    .replaceAll("'", "")
    .toLowerCase(),
    name: ability.name,
    generation: ability.generation,
    effect: ability.effect,
    description: ability.description,
    pokemonWithAbility: ability.pokemonWithAbility,
  }
}

const returnPokemonMovesModel = (pokemonMoves) => {
  const movesGenerationFormat = {};
  pokemonMoves.colosseum
    ? (movesGenerationFormat.colosseum = pokemonMoves.colosseum)
    : null;
  pokemonMoves.xd ? (movesGenerationFormat.xd = pokemonMoves.xd) : null;
  pokemonMoves["red-blue"]
    ? (movesGenerationFormat["red-blue"] = pokemonMoves["red-blue"])
    : null;
  pokemonMoves.yellow
    ? (movesGenerationFormat.yellow = pokemonMoves.yellow)
    : null;
  pokemonMoves["gold-silver"]
    ? (movesGenerationFormat["gold-silver"] = pokemonMoves["gold-silver"])
    : null;
  pokemonMoves.crystal
    ? (movesGenerationFormat.crystal = pokemonMoves.crystal)
    : null;
  pokemonMoves["ruby-sapphire"]
    ? (movesGenerationFormat["ruby-sapphire"] = pokemonMoves["ruby-sapphire"])
    : null;
  pokemonMoves.emerald
    ? (movesGenerationFormat.emerald = pokemonMoves.emerald)
    : null;
  pokemonMoves["firered-leafgreen"]
    ? (movesGenerationFormat["firered-leafgreen"] =
        pokemonMoves["firered-leafgreen"])
    : null;
  pokemonMoves["diamond-pearl"]
    ? (movesGenerationFormat["diamond-pearl"] = pokemonMoves["diamond-pearl"])
    : null;
  pokemonMoves.platinum
    ? (movesGenerationFormat.platinum = pokemonMoves.platinum)
    : null;
  pokemonMoves["heartgold-soulsilver"]
    ? (movesGenerationFormat["heartgold-soulsilver"] =
        pokemonMoves["heartgold-soulsilver"])
    : null;
  pokemonMoves["black-white"]
    ? (movesGenerationFormat["black-white"] = pokemonMoves["black-white"])
    : null;
  pokemonMoves["black-2-white-2"]
    ? (movesGenerationFormat["black-2-white-2"] =
        pokemonMoves["black-2-white-2"])
    : null;
  pokemonMoves["x-y"]
    ? (movesGenerationFormat["x-y"] = pokemonMoves["x-y"])
    : null;
  pokemonMoves["omega-ruby-alpha-sapphire"]
    ? (movesGenerationFormat["omega-ruby-alpha-sapphire"] =
        pokemonMoves["omega-ruby-alpha-sapphire"])
    : null;
  pokemonMoves["sun-moon"]
    ? (movesGenerationFormat["sun-moon"] = pokemonMoves["sun-moon"])
    : null;
  pokemonMoves["ultra-sun-ultra-moon"]
    ? (movesGenerationFormat["ultra-sun-ultra-moon"] =
        pokemonMoves["ultra-sun-ultra-moon"])
    : null;
  pokemonMoves["lets-go-pikachu-lets-go-eevee"]
    ? (movesGenerationFormat["lets-go-pikachu-lets-go-eevee"] =
        pokemonMoves["lets-go-pikachu-lets-go-eevee"])
    : null;
  pokemonMoves["sword-shield"]
    ? (movesGenerationFormat["sword-shield"] = pokemonMoves["sword-shield"])
    : null;
  pokemonMoves["legends-arceus"]
    ? (movesGenerationFormat["legends-arceus"] = pokemonMoves["legends-arceus"])
    : null;
  pokemonMoves["brilliant-diamond-shining-pearl"]
    ? (movesGenerationFormat["brilliant-diamond-shining-pearl"] =
        pokemonMoves["brilliant-diamond-shining-pearl"])
    : null;
  pokemonMoves["scarlet-violet"]
    ? (movesGenerationFormat["scarlet-violet"] = pokemonMoves["scarlet-violet"])
    : null;

  return movesGenerationFormat;
}

module.exports = {
  returnPokemonModel,
  returnMoveModel,
  returnAbilityModel,
  returnPokemonMovesModel,
};
