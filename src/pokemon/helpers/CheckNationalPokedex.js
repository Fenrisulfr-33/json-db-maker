/**
 * Update National Pokedex Files
 * 
 * Loops through all JSON files in the national folder and updates them
 * by applying a transformation function
 * 
 * Usage:
 *   node updateNationalPokedex.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { forEachFile } from './fileUtils.js';
import readJson from '../../genericFunctions/files/readJson.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const NATIONAL_DIR = path.join(__dirname, '../','pokedex', 'national');
const sunMoonDex = readJson('../pokedex/dexes/dexes_objects/14-sun-moon-alola.json', import.meta.url);

function doesPokemonExistInSunMoon(pokemonId) {
    return sunMoonDex.find(p => p.pokemonId === pokemonId);
}

function CheckNationalPokedex(checkFn) {

    let seenCount = 0;
    let badFileCount = 0;
    let errorCount = 0;

    console.log('Starting count of national pokedex files...');
    console.log(`Directory: ${NATIONAL_DIR}`);

    forEachFile(NATIONAL_DIR, (filepath, index) => {

        try {
            // Read the JSON file
            const fileContent = fs.readFileSync(filepath, 'utf8');
            const pokemonData = JSON.parse(fileContent);

            if (pokemonData.pokedexNumber['sun-moon']) {
                // Apply transformation function
                const existsInSunMoon = checkFn(pokemonData._id);

                if (!existsInSunMoon) {
                    badFileCount++;
                    console.log(`${pokemonData.name.english}-${pokemonData._id} contains sun/moon data but should not.`);
                }
                seenCount++;
            }


        } catch (error) {
            errorCount++;
            console.error(`✗ Error processing ${path.basename(filepath)}:`, error.message);
        }
    }, { extension: '.json' });

    console.log('\n' + '='.repeat(60));
    console.log('Search complete!');
    console.log(`Seen: ${seenCount} files`);
    console.log(`Bad Files: ${badFileCount} files`);
    console.log(`Errors: ${errorCount} files`);
    console.log('='.repeat(60));

    return { seenCount, badFileCount, errorCount };
}


CheckNationalPokedex(doesPokemonExistInSunMoon);