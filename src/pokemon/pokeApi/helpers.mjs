import { writeFile } from 'fs';

function saveJsonFile(filePath, data) {
	const jsonString = JSON.stringify(data, null, 4);
	writeFile(filePath, jsonString, 'utf8', (err) => {
		if (err) {
			console.error("Error writing file:", err);
		} else {
			console.log(`File successfully saved at ${filePath}`);
		}
	});
}

function cleanData(data) {
	return data.map(item => item.name);
}

function cleanName(data) {
	return data.map(item => ({
		language: item.language.name,
		name: item.name
	}));
}

function cleanDescription(data) {
	return data.map(item => ({
		language: item.language.name,
		description: item.description
	}));
}

function cleanPokemonEntries(data){
	return data.map(item => ({
		entry_number: item.entry_number,
		pokemon_species: item.pokemon_species.name
	}));
}

/**
 * Used for ./buildGenerations.mjs
 * 
 * @param {Object} data API response data for a generation
 * @returns {Object} Transformed generation data
 */
function transformGenerationData(data) {
	return {
		_id: data.id,
		name: data.name,
		abilities: cleanData(data.abilities),
		main_region: data.main_region.name,
		moves: cleanData(data.moves),
		names: cleanName(data.names),
		pokemon_species: cleanData(data.pokemon_species),
		types: cleanData(data.types),
		version_groups: cleanData(data.version_groups)
	};
}

function transformPokedexData(data) {
	return {
		_id: data.id,
		name: data.name,
		is_main_series: data.is_main_series,
		descriptions: cleanDescription(data.descriptions),
		names: cleanName(data.names),
		pokemon_entries: cleanPokemonEntries(data.pokemon_entries),
		region: data.region ? data.region.name : null,
		version_groups: cleanData(data.version_groups)
	};
}

export { transformGenerationData, transformPokedexData, saveJsonFile };