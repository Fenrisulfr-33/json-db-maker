import { MOVES_GAMES_DIR } from "#helpers/paths.js";
import readJsonDir from "#genericFunctions/files/readJsonDir.js";

/**
 * Pivots the per-game learnset files (one file per game, one record per pokemon)
 * into one document per pokemon, each game's moves nested under its game_key.
 * Source files stay organized by game because that's how the data was scraped;
 * this reshapes it to match how it's queried - by pokemon.
 * @returns {Array<{_id: number, moves: Object}>}
 */
function buildLearnsets() {
	const learnsetsById = new Map();

	readJsonDir(MOVES_GAMES_DIR).forEach((entries) => {
		entries.forEach(({ pokemon_id, game_key, moves }) => {
			if (!learnsetsById.has(pokemon_id)) {
				learnsetsById.set(pokemon_id, { _id: pokemon_id, moves: {} });
			}
			learnsetsById.get(pokemon_id).moves[game_key] = moves;
		});
	});

	return [...learnsetsById.values()].sort((a, b) => a._id - b._id);
}

export default buildLearnsets;
