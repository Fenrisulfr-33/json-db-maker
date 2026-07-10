const { MongoClient } = require("mongodb");

/**
 * Upserts (replace-or-insert) a list of documents into a Mongo collection,
 * matching each document to an existing one by _id.
 * @param {string} uri - Mongo connection string
 * @param {string} dbName - database name
 * @param {string} collectionName - collection name
 * @param {Array<Object>} documents - documents to upsert, each with an _id
 */
async function upsertMany(uri, dbName, collectionName, documents) {
	if (!uri) {
		throw new Error("Missing Mongo connection string (expected MONGO_URI).");
	}

	const client = new MongoClient(uri);
	let inserted = 0;
	let modified = 0;
	let unchanged = 0;

	try {
		await client.connect();
		const collection = client.db(dbName).collection(collectionName);

		for (const doc of documents) {
			const result = await collection.replaceOne({ _id: doc._id }, doc, {
				upsert: true,
			});
			if (result.upsertedId) {
				inserted++;
			} else if (result.modifiedCount > 0) {
				modified++;
			} else {
				unchanged++;
			}
		}
	} finally {
		await client.close();
	}

	console.log(
		`${dbName}.${collectionName}: ${inserted} inserted, ${modified} modified, ${unchanged} unchanged.`
	);

	return { inserted, modified, unchanged };
}

module.exports = upsertMany;
