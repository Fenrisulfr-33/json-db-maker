import dotenv from "dotenv";
import upsertMany from "./upsertToMongo.js";
import resolveMongoUri from "./resolveMongoUri.js";
import validateEntries from "../../genericFunctions/schemaValidation.mjs";

dotenv.config();

/**
 * Upserts a list of entries into the given db/collection for the given environment.
 * @param {Object} options
 * @param {string} [options.environment] - "dev" | "test" | "prod" (defaults to "dev")
 * @param {string} options.dbName - database name
 * @param {string} options.collectionName - collection name
 * @param {Array<Object>} options.entries - documents to upsert, each with an _id
 * @param {Object} [options.schema] - JSON schema to validate entries against; upsert is refused if any entry fails
 */
async function upsertEntries({ environment = "dev", dbName, collectionName, entries, schema }) {
	if (schema) {
		const failures = validateEntries(schema, entries);
		if (failures.length > 0) {
			throw new Error(`Refusing to upsert ${collectionName}: ${failures.length} of ${entries.length} entries failed schema validation.`);
		}
	}

	const uri = resolveMongoUri(environment);
	return upsertMany(uri, dbName, collectionName, entries);
}

export default upsertEntries;
