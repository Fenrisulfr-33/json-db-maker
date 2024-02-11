const fs = require('fs');
const redBlue = require('./moves/01-red-blue-moves.json');
const yellow = require('./moves/01-yellow-moves.json');
const crystal = require('./moves/02-crystal-moves.json');
const goldSilver = require('./moves/02-gold-silver-moves.json');

const reformatPokemonMovesDB = (moves, game, saveFile) => {
  const reformattedPokemonMoves = moves.map((pokemon) => {
    return {
      _id: pokemon.id,
      name: pokemon.name,
      moves: pokemon[game],
    }
  });
  const saveData = JSON.stringify(reformattedPokemonMoves, null, 2);
  fs.writeFile(saveFile, saveData, (error) => {
    error ? console.error(error) : null;
    console.log(`${saveFile} saved.`);
  });
}

reformatPokemonMovesDB(redBlue, 'red-blue', './database_moves/red_blue.json');
reformatPokemonMovesDB(yellow, 'yellow', './database_moves/yellow.json');
reformatPokemonMovesDB(crystal, 'crystal', './database_moves/crystal.json');
reformatPokemonMovesDB(goldSilver, 'gold-silver', './database_moves/gold_silver.json');
