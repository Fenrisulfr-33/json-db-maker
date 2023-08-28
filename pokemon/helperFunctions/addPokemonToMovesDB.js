const moves = require('../data/moves/00-dnt-moves.json');
const pokedex = require('../20230815-dex.json');

function addPokemonToMovesDB(){
    moves.forEach((move) => {
        pokedex.forEach((pokemon) => {
            const checkMoves = pokemon.moves;
        })
    })
} 

module.exports = {
    addPokemonToMovesDB
}