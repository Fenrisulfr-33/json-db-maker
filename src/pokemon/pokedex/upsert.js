import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";
import dotenv from "dotenv";
import upsertEntries from "../helpers/upsertEntries.js";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ENTRIES_DIR = path.join(__dirname, "entries");

/**
 * Reads every pokemon JSON file in entries/ and parses it.
 * @returns {Array<Object>} pokemon documents
 */
function loadPokemon() {
	return fs
		.readdirSync(ENTRIES_DIR)
		.filter((file) => path.extname(file) === ".json")
		.map((file) => JSON.parse(fs.readFileSync(path.join(ENTRIES_DIR, file), "utf8")));
}

async function run() {
	const pokemon = loadPokemon();
	console.log(`Loaded ${pokemon.length} pokemon from ${ENTRIES_DIR}`);
	await upsertEntries({ 
		environment: process.env.MONGO_ENV, 
		dbName: `pokemon-${process.env.MONGO_ENV}`, 
		collectionName: "national-dex", 
		entries: pokemon });
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
	run().catch((error) => {
		console.error(error);
		process.exit(1);
	});
}

export default run;
