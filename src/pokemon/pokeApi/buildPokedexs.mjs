import { fetchData } from './APIrequest.mjs';
import { amountOfPokedexes} from './CONSTANTS.mjs';
import { transformPokedexData, saveJsonFile } from './helpers.mjs';

const endpoint = "pokedex/";
const saveFolder = './pokedexes';
/**
 * Pokedexs have the following keys as of the time of this build.
 * 	id
 * 	name
 * 	is_main_series
 * 	descriptions
 * 	pokemon_entries
 * 	region
 * 	version_groups
 */
async function buildPokedexes() {
	console.log("Building pokedexes...");
	// get all available keys whenever update occurs
	const availableKeys = new Set();

	// Go through each generation, fetch the data, modify, save
	for (let i = 0; i < amountOfPokedexes; i++) {
		// For some reason 10 is not a pokedex skip
		if (i + 1 === 10) {
			continue;
		}

		const saveFile = `${saveFolder}/pokedex_${i + 1}.json`;
		const data = await fetchData(endpoint + (i + 1));
		// Comment out once all keys acquired
		for (const key of Object.keys(data)) {
			availableKeys.add(key);
		}

		// transform data
		const transformedData = transformPokedexData(data);

		// Here you would save transformedData to your database or file system
		saveJsonFile(saveFile, transformedData);
	}
	console.log("Available keys:", Array.from(availableKeys));
}

async function run() {
	await buildPokedexes();
}

run().catch((error) => {
	console.error("Build pokedexes error:", error);
});