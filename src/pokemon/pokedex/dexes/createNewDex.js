/**
 * @author Brendan Archer
 * @version 1.0.0
 * @description
 * This file is used to create a new dex json file
 * It takes in an argument of size (number of entries) 
 * and creates a new dex with that many entries
 * 
 * Usage: node createNewDex.js <dexName> <size>
 * Example: node createNewDex.js 33-new-dex 150
 * This will create a new dex file named 33-new-dex.json with 150 entries
 * Each entry will have a dexNo (starting from 1) and a pokemonId of 0
 * The new dex file will be created in the dexes_objects folder
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const args = process.argv.slice(2);

if (args.length !== 2) {
    console.error('Usage: node createNewDex.js <dexName> <size>');
    process.exit(1);
}

if (isNaN(args[1])) {
    console.error('Size must be an integer');
    process.exit(1);
}

const [dexName, sizeStr] = args;
const size = parseInt(sizeStr, 10);

const newDex = [];

for (let i = 1; i <= size; i++) {
    newDex.push({
        dexNo: i,
        pokemonId: 0
    });
}

const dexFilePath = path.join(__dirname, 'dexes_objects', `${dexName}.json`);
fs.writeFileSync(dexFilePath, JSON.stringify(newDex, null, 4));
console.log(`New dex file created: ${dexFilePath}`);