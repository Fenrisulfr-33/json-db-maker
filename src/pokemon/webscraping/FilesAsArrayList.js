const pokemonPath = require("path").join(__dirname, "./pokemon-data/pokedex");
const saveFile = require("./helperFunctions/saveFile");
const addMovesToPokemon = require("./helperFunctions/addMovesToPokemon.js");
const replaceWrongMoveNames = require("./helperFunctions/replaceWrongMoveNames.js");
const assignPokemonPokedexNumbers = require("./helperFunctions/assignPokedexNumbers.js");
const addGameDropDownToPokemon = require("./helperFunctions/addGameDropDownToPokemon.js");
const addFormsTabToPokemon = require('./helperFunctions/addFormsTabToPokemon.js');
// const addEvolutionObjectToPokemon = require('./helperFunctions/addEvolutionObjectToPokemon.js');
// const assignEvolutionKeys = require('./helperFunctions/assignEvolutionKeys.js');
const { returnPokemonModel, returnPokemonMovesModel } = require('./helperFunctions/returnObjectModels.js');

/**
 * Read all files from a directory and process them
 * @param {string} directoryPath - Path to directory containing files
 * @param {function} processingFunction - Optional function to process each file (receives fileData and fileName)
 * @returns {array} Array of file contents (processed or raw)
 */
function FilesAsArrayList(directoryPath, processingFunction) {
    const files = [];
    const fs = require("fs");
    const path = require("path");

    fs.readdirSync(directoryPath).forEach(function (file) {
        const fullPath = path.join(directoryPath, file);
        const fileData = require(fullPath);
        
        if (processingFunction) {
            const processedData = processingFunction(fileData, file);
            files.push(processedData);
        } else {
            files.push(fileData);
        }
    });

    return files;
}

/**
 * Read all JSON files from a directory, process them, and update them in place
 * @param {string} directoryPath - Path to directory containing JSON files
 * @param {function} processingFunction - Function to process each file (receives fileData and fileName, returns updated data)
 * @returns {object} Object with count of processed files and any errors
 */
function UpdateFilesInPlace(directoryPath, processingFunction) {
    const fs = require("fs");
    const path = require("path");
    let processedCount = 0;
    const errors = [];

    fs.readdirSync(directoryPath).forEach(function (file) {
        try {
            const fullPath = path.join(directoryPath, file);
            
            // Skip non-JSON files
            if (path.extname(file) !== '.json') {
                return;
            }

            // Read the JSON file
            const fileData = require(fullPath);
            
            // Process the data
            const updatedData = processingFunction(fileData, file);
            
            // Write back to the same file
            fs.writeFileSync(fullPath, JSON.stringify(updatedData, null, 2), 'utf8');
            
            processedCount++;
            console.log(`✓ Updated: ${file}`);
            
        } catch (error) {
            errors.push({ file, error: error.message });
            console.error(`✗ Error processing ${file}:`, error.message);
        }
    });

    return {
        processed: processedCount,
        errors: errors.length > 0 ? errors : null
    };
}

const errors = {};

module.exports = { 
    FilesAsArrayList,
    UpdateFilesInPlace
};