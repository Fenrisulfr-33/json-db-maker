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

/**
 * Removes url key from the API response data and keeps only the names
 * @param {Array} data API response data containing name and language objects
 * @returns {Array} Cleaned data containing only the names and languages
 */
function cleanData(data) {
	return data.map(item => item.name);
}

/**
 * 
 * @param {Array} data 
 * @returns {Array} Cleaned data containing only the names and languages
 */
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

function cleanEffectEntries(data) {
	return data.map(item => ({
		language: item.language.name,
		effect: item.effect,
		short_effect: item.short_effect
	}));
}

function cleanEffectChangesEntries(data) {
	return data.map(item => ({
		language: item.language.name,
		effect: item.effect,
	}));
}

function cleanEffectChanges(data) {
	return data.map(item => ({
		game: item.version_group.name,
		effect_entries: cleanEffectChangesEntries(item.effect_entries),
	}));
}

function cleanPokemonData(data) {
	return data.map(item => ({
		is_hidden: item.is_hidden,
		slot: item.slot,
		pokemon: item.pokemon.name, // this is lowercase? key
	}));
}

function cleanFlavorText(data) {
	return data.map(item => ({
		language: item.language.name,
		flavor_text: item.flavor_text
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

function transformAbilityData(data) {
	return {
		_id: data.id,
		name: data.name, // key?
		generation: data.generation.name,
		names: cleanName(data.names),
		effect_entries: cleanEffectEntries(data.effect_entries),
		effect_changes: cleanEffectChanges(data.effect_changes),
		// flavor_text_entries
		pokemon: cleanPokemonData(data.pokemon)
	}
}

export { transformGenerationData, transformPokedexData, transformAbilityData, saveJsonFile };