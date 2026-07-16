import { writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import data from './evolutionId-pokemonList.json' with { type: 'json' };

const __dirname = dirname(fileURLToPath(import.meta.url));
const outputDir = join(__dirname, 'entries');

function writeEvolutionFile(entry, outputDir) {
	const paddedId = String(entry._id).padStart(3, '0');
	const baseName = entry.pokemon[0].name.toLowerCase();
	const filename = `${paddedId}-${baseName}.json`;
	const filePath = join(outputDir, filename);
	const modifiedEntry = modifyEntry(entry);

	writeFileSync(filePath, JSON.stringify(modifiedEntry, null, 4));

	return filePath;
}

function modifyEntry(entry) {
	// Example modification: Add a new property to the entry
	const evolutionData = entry.pokemon.map(p => ({ id: p.id, name: p.name,  type: [] }));
	entry.evolution = [evolutionData];
	delete entry.pokemon; // Remove the original pokemon array if needed
	return entry;
}

function writeEvolutionEntries() {
	return data.map((entry) => writeEvolutionFile(entry, outputDir));
}

writeEvolutionEntries();