import { fetchData } from './APIrequest.mjs';
import { generations } from './CONSTANTS.mjs';
import { transformGenerationData, saveJsonFile } from './helpers.mjs';

const endpoint = "generation/";
const saveFolder = './generations';
/**
 * Generations have the following keys as of the time of this build.
 * 	id
 * 	name
 * 	main_region
 * 	moves
 * 	names
 * 	pokemon_species
 * 	types
 * 	version_groups
 */
async function buildGenerations() {
	console.log("Building generations...");
	// get all available keys whenever update occurs
	const availableKeys = new Set();

	// Go through each generation, fetch the data, modify, save
	for (const generation of generations) {
		const saveFile = `${saveFolder}/generation_${generation}.json`;
		const data = await fetchData(endpoint + generation);
		// Comment out once all keys acquired
		for (const key of Object.keys(data)) {
			availableKeys.add(key);
		}

		// transform data
		const transformedData = transformGenerationData(data);

		// Here you would save transformedData to your database or file system
		saveJsonFile(saveFile, transformedData);
	}
	console.log("Available keys:", Array.from(availableKeys));
}

async function run() {
	await buildGenerations();
}

run().catch((error) => {
	console.error("Build generations error:", error);
});