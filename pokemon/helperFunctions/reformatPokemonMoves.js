function reformatPokemonMoves(pokemonMoves) {
  /**
   * Sort Pokemon moves by Generation
   *
   * colosseum
   * xd
   * ['red-blue']
   * yellow
   * ['gold-silver']
   * crystal
   * ['ruby-sapphire']
   * emerald
   * ['firered-leafgreen']
   * ['diamond-pearl']
   * platinum
   * ['heartgold-soulsilver']
   * ['black-white']
   * ['black-2-white-2']
   * ['x-y']
   * ['omega-ruby-alpha-sapphire']
   * ['sun-moon']
   * ['ultra-sun-ultra-moon']
   * ['lets-go-pikachu-lets-go-eevee']
   * ['sword-shield']
   * ['legends-arceus']
   * ['brilliant-diamond-shining-pearl']
   * ['scarlet-violet']
   */
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
  reformatPokemonMoves,
};
