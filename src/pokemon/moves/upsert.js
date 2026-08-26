import { fileURLToPath } from "url";
import path from "path";
import dotenv from "dotenv";
import upsertEntries from "../helpers/upsertEntries.js";
import schema from "../schemas/move.json" with { type: "json" };
import buildLearnsets from "./learnsets.js";
import readJsonDir from "#genericFunctions/files/readJsonDir.js";
import { MOVES_ENTRIES_DIR } from "#helpers/paths.js";

dotenv.config();

/**
 * Reads every move JSON file in entries/ and parses it.
 * @returns {Array<Object>} move documents
 */
async function run() {
	const moves = readJsonDir(MOVES_ENTRIES_DIR);
	console.log(`Loaded ${moves.length} moves from ${MOVES_ENTRIES_DIR}`);
	await upsertEntries({ 
		environment: process.env.MONGO_ENV, 
		dbName: `pokemon-${process.env.MONGO_ENV}`, 
		collectionName: "moves", 
		entries: moves, 
		schema 
	});

	const learnsets = buildLearnsets();
	console.log(`Built ${learnsets.length} learnsets from moves/games`);
	await upsertEntries({ 
		environment: process.env.MONGO_ENV, 
		dbName: `pokemon-${process.env.MONGO_ENV}`, 
		collectionName: "learnsets", 
		entries: learnsets 
	});
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
	run().catch((error) => {
		console.error(error);
		process.exit(1);
	});
}

export default run;
