const path = require('path');
const fs = require('fs');

/**
 * Load all Pokemon from the national folder into an array
 * @returns {Array} Array of all Pokemon objects from the national folder
 */
function LoadNationalPokedex() {
    const nationalDir = path.join(__dirname, 'pokedex', 'national');
    const pokemonArray = [];
    
    const files = fs.readdirSync(nationalDir);
    
    files.forEach(file => {
        if (path.extname(file) === '.json') {
            const filePath = path.join(nationalDir, file);
            const pokemonData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
            pokemonArray.push(pokemonData);
        }
    });
    
    console.log(`✓ Loaded ${pokemonArray.length} Pokemon from national folder`);
    return pokemonArray;
}

module.exports = LoadNationalPokedex;