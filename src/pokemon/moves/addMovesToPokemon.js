import fs from "fs";
import path from "path";
import { MOVES_GAMES_DIR } from "#helpers/paths.js";

/**
 * Loads every game's learnset file from moves/games (skipping the template)
 * and indexes each one by pokemon id for fast lookup. The game key is read
 * from the data itself (the one field on each entry besides id/name) rather
 * than the filename, since filenames don't always match the key exactly
 * (e.g. 17-lets-go-pikcahu-eevee.json uses the key "lets-go-pikachu-eevee").
 * @returns {Array<{ key: string, movesById: Map<number, Object> }>}
 */
function loadGames() {
	return fs
		.readdirSync(MOVES_GAMES_DIR)
		.filter((file) => path.extname(file) === ".json")
		.map((file) => {
			const entries = JSON.parse(fs.readFileSync(path.join(MOVES_GAMES_DIR, file), "utf8"));
			const key = Object.keys(entries[0] || {}).find((field) => field !== "id" && field !== "name");
			if (!key) {
				throw new Error(`Could not determine game key for ${file}`);
			}
			const movesById = new Map(entries.map((entry) => [entry.id, entry[key]]));
			return { key, movesById };
		});
}

const games = loadGames();

/**
 * Adds every game's learnset to a pokemon, keyed by game.
 * @param {Object} pokemon - pokemon document, must have an id
 * @returns {Object} pokemon with a populated `moves` object
 */
function addMovesToPokemon(pokemon) {
	const moves = { ...pokemon.moves };
	games.forEach(({ key, movesById }) => {
		if (movesById.has(pokemon._id)) {
			moves[key] = movesById.get(pokemon._id);
		}
	});
	return { ...pokemon, moves };
}

export default addMovesToPokemon;
