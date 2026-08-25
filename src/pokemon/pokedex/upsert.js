import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";
import dotenv from "dotenv";
import upsertEntries from "../helpers/upsertEntries.js";
import { createGameDropDown, addMovesToPokemon } from "./helpers.js";
import assignPokemonPokedexNumbers from "./AssignPokedexNumbers.js";
import schema from "../schemas/pokemon.json" with { type: "json" };

const __filename = fileURLToPath(import.meta.url);

/**
 * Reads every pokemon JSON file in entries/ and parses it.
 * @returns {Array<Object>} pokemon documents
 */
function loadPokemon() {
	return fs
		.readdirSync(POKEDEX_ENTRIES_DIR)
		.filter((file) => path.extname(file) === ".json")
		.map((file) => JSON.parse(fs.readFileSync(path.join(POKEDEX_ENTRIES_DIR, file), "utf8")));
}

async function run() {
	const pokemon = loadPokemon().map((mon) => {
		let updated = assignPokemonPokedexNumbers(mon);
		updated.moves = addMovesToPokemon(updated._id, updated.moves);
		updated.gameDropDown = createGameDropDown(updated.moves);
		return updated;
	});

	await upsertEntries({
		environment: process.env.MONGO_ENV,
		dbName: `pokemon-${process.env.MONGO_ENV}`,
		collectionName: "national-dex",
		entries: pokemon,
		schema });
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
	run().catch((error) => {
		console.error(error);
		process.exit(1);
	});
}

export default run;
