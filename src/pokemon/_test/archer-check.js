const list = require('./evolution-id-list.json');
const listNew = require('./evolution-id-list-NEW.json');

/**
 * old 
 * { id: pokemonId, evolution: evolutionNumber }
 * 
 * New
 * { _id: evolutionId, pokemon: [ { id: pokemonId } ] }
 */
const checkEvolutionIdList = () => {
	const errors = [];
	// For each old entry, make sure the PokemonId exists in the new list
	for (const entry of list) {
		const foundEntry = listNew.find(e => e._id === entry.evolution);

		if (!foundEntry) {
			errors.push(`Missing entry in listNew for id: ${entry.id}`);
			continue;
		}

		// console.log(foundEntry);
		console.log(`FoundEntry: ${foundEntry._id} for id: ${entry.id}`);

		const foundPokemon = foundEntry.pokemon.find(p => p.id === entry.id);

		if (!foundPokemon) {
			errors.push(`Missing pokemon id: ${entry.id} in evolution id: ${entry.evolution}`);
		}
	}
	console.log(errors);
};

checkEvolutionIdList();