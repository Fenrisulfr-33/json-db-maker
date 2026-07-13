const { MongoClient } = require("mongodb");
const paldeck = require("./2024-02-02-paldeck.json");
const { PALWOLRD_URI } = require("./CONSTANTS");
const client = new MongoClient(PALWOLRD_URI);

const replaceInsertPalToDB = async () => {
  for (let i = 0; i < paldeck.length; i++) {
    const pal = paldeck[i];
    await replaceDocument(pal);
  }
  await client.close();
};

async function replaceDocument(replacementNewPal) {
  try {
    // Get the database and collection on which to run the operation
    const palworld = client.db("palworld");
    const paldeck = palworld.collection("paldeck");
    // Create a query for documents where the title contains "The Cat from"
    const query = { _id: replacementNewPal._id };
    const options = {
      upsert: true,
    };
    // Execute the replace operation
    const result = await paldeck.replaceOne(query, replacementNewPal, options);
    if (result.modifiedCount > 0) {
      console.log(
        `Modified ${result.modifiedCount} document(s) at position ${replacementNewPal._id}`
      );
    } else if (result.upsertedId) {
      console.log(
        `Inserted ${result.upsertedId} document at position ${replacementNewPal._id}`
      );
    }
  } catch (error) {
    console.log(error);
  }
}

replaceInsertPalToDB();
