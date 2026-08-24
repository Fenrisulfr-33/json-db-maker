import fs from "fs";
import path from "path";
import { MOVES_ENTRIES_DIR } from "#helpers/paths.js";

/**
 * Reads every move JSON file in moves/entries and parses it.
 * @returns {Array<Object>} move documents
 */
function loadMoves() {
	return fs
		.readdirSync(MOVES_ENTRIES_DIR)
		.filter((file) => path.extname(file) === ".json")
		.map((file) => JSON.parse(fs.readFileSync(path.join(MOVES_ENTRIES_DIR, file), "utf8")));
}

export default loadMoves;
