require("dotenv").config();

const fs = require("fs");
const path = require("path");
const upsertEntries = require("../helpers/upsertEntries");

const ENTRIES_DIR = path.join(__dirname, "entries");

/**
 * Reads every move JSON file in entries/ and parses it.
 * @returns {Array<Object>} move documents
 */
function loadMoves() {
	return fs
		.readdirSync(ENTRIES_DIR)
		.filter((file) => path.extname(file) === ".json")
		.map((file) => JSON.parse(fs.readFileSync(path.join(ENTRIES_DIR, file), "utf8")));
}

async function run() {
	const moves = loadMoves();
	console.log(`Loaded ${moves.length} moves from ${ENTRIES_DIR}`);
	await upsertEntries({ environment: process.env.MONGO_ENV, dbName: `pokemon-${process.env.MONGO_ENV}`, collectionName: "moves", entries: moves });
}

if (require.main === module) {
	run().catch((error) => {
		console.error(error);
		process.exit(1);
	});
}

module.exports = run;
