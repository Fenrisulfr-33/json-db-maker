const pokedex = require('../03-pokedex.json'); // Current pokedex
/**
 * 
 * @param {*} pokemon 
 * Its important that in this function you DO NOT add eggs moves for pokemon that didn't exist yet.
 * Example: Pichu won't have all of Pikachu's egg moves because it didn't exist before gen 2.
 * This is huge for pokemon that get added to games later like Annihalape.
 */
function addEggMovesToAllEvos(pokemonEvo, returnArray){
    // If the generation of the pokemon is above the pokemon with a matching ev, skip certain games.
    const evoLine = pokedex.filter((pokemon) => pokemon.evolution === pokemonEvo.evolution);

    let sameGen = false;
    const evoGen = evoLine[0].generation;
    evoLine.forEach((evo) => {
        if (evo.generation !== evoGen){
            sameGen = true;
        }
    })
    // const evoLineSorted = evoLine.sort((a, b) => a.evolution > b.evolution);
    /**
     * Gen 1 has no Eggs moves
     * LGPLGE has no eggs moves
     * All data for eggs is good after Sword & Shield
     * Coliseum and XD don not matter
     * 
     * 
     */
    if (sameGen){
        
    }
    
}

module.exports = {
    addEggMovesToAllEvos
}