require("dotenv").config();

const upsertMany = require("./upsertToMongo");
const resolveMongoUri = require("./resolveMongoUri");

/**
 * Upserts a list of entries into the given db/collection for the given environment.
 * @param {Object} options
 * @param {string} [options.environment] - "dev" | "test" | "prod" (defaults to "dev")
 * @param {string} options.dbName - database name
 * @param {string} options.collectionName - collection name
 * @param {Array<Object>} options.entries - documents to upsert, each with an _id
 */
async function upsertEntries({ environment = "dev", dbName, collectionName, entries }) {
	const uri = resolveMongoUri(environment);
	return upsertMany(uri, dbName, collectionName, entries);
}

module.exports = upsertEntries;
