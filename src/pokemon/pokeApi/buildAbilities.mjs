import { fetchData } from './APIrequest.mjs';
import { amountOfAbilities } from './CONSTANTS.mjs';
import { transformAbilityData, saveJsonFile } from './helpers.mjs';

const endpoint = "ability/";
const saveFolder = './abilities';
/**
 * Abilities have the following keys as of the time of this build.
 * 	id
 * 	name
 * 	is_main_series
 * 	generation
 * 	names
 * 	effect_entries
 * 	effect_changes
 * 	flavor_text_entries
 * pokemon - this is pokemon that can learn the ability
 */
async function buildAbilities() {
	console.log("Building abilities...");
	// get all available keys whenever update occurs
	const availableKeys = new Set();

	// Go through each generation, fetch the data, modify, save
	for (let ability = 1; ability <= amountOfAbilities; ability++) {
		const data = await fetchData(endpoint + ability);
		// Comment out once all keys acquired
		for (const key of Object.keys(data)) {
			availableKeys.add(key);
		}

		// transform data
		const transformedData = transformAbilityData(data);

		const saveFile = `${saveFolder}/${ability}-${data.name}.json`;
		// Here you would save transformedData to your database or file system
		saveJsonFile(saveFile, transformedData);
	}
	console.log("Available keys:", Array.from(availableKeys));
}

async function run() {
	await buildAbilities();
}

run().catch((error) => {
	console.error("Build abilities error:", error);
});