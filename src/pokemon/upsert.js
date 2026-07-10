require("dotenv").config();

const fs = require("fs");
const path = require("path");
const upsertMany = require("../helpers/upsertToMongo");

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
	await upsertMany(process.env.MONGO_URI, "pokemon", "national-dex", pokemon);
}

if (require.main === module) {
	run().catch((error) => {
		console.error(error);
		process.exit(1);
	});
}

module.exports = run;
