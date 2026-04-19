/**
 * Write a Pokemon object to a JSON file
 * @param {object} pokemonObject - The Pokemon data to write
 * @param {string} filePath - Full path to the JSON file (e.g., './pokemon-data/pokedex/pikachu.json')
 * @returns {object} { success: boolean, error?: string }
 */
function writePokemonToFile(pokemonObject, filePath) {
    const fs = require('fs');
    
    try {
        // Write formatted JSON with 2-space indentation
        fs.writeFileSync(filePath, JSON.stringify(pokemonObject, null, 2), 'utf8');
        
        return { success: true };
    } catch (error) {
        return { success: false, error: error.message };
    }
}

// Usage examples:
// 1. Simple write
const result = writePokemonToFile(pokemonData, './pokemon-data/pokedex/pikachu.json');

// 2. With error handling
const pikachu = { _id: 25, name: { english: "Pikachu" }, type: ["Electric"] };
const result = writePokemonToFile(pikachu, './pokemon-data/pokedex/pikachu.json');

if (result.success) {
    console.log('✓ Pokemon saved successfully');
} else {
    console.error('✗ Error:', result.error);
}

// 3. Dynamic file path
const fileName = `${pokemon.name.english.toLowerCase()}.json`;
const filePath = path.join(__dirname, 'pokemon-data/pokedex', fileName);
writePokemonToFile(pokemon, filePath);