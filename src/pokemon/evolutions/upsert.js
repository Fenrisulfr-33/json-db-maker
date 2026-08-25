import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";
import dotenv from "dotenv";
import upsertEntries from "../helpers/upsertEntries.js";
import schema from "./schema.json" with { type: "json" };

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ENTRIES_DIR = path.join(__dirname, "entries");

/**
 * Reads every move JSON file in entries/ and parses it.
 * @returns {Array<Object>} move documents
 */
function loadEntries() {
	return fs
		.readdirSync(ENTRIES_DIR)
		.filter((file) => path.extname(file) === ".json")
		.map((file) => JSON.parse(fs.readFileSync(path.join(ENTRIES_DIR, file), "utf8")));
}

async function run() {
	const entries = loadEntries();
	console.log(`Loaded ${entries.length} entries from ${ENTRIES_DIR}`);
	await upsertEntries({ environment: process.env.MONGO_ENV, dbName: `pokemon-${process.env.MONGO_ENV}`, collectionName: "evolutions", entries: entries, schema });
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
	run().catch((error) => {
		console.error(error);
		process.exit(1);
	});
}

export default run;
