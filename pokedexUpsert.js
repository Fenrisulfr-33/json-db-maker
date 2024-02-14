const { MongoClient } = require("mongodb");
const { mongodb_uri, pokedex } = require('./env');
const client = new MongoClient(mongodb_uri);

const replaceInsertPokemon = async () => {
  for (let i = 0; i < pokedex.length; i++) {
    const pokemon = pokedex[i];
    await replaceDocument(pokemon);
  }
  await client.close();
};

async function replaceDocument(replacementPokemon) {
  try {
    // clinet.db(databaseName)
    const pokemon = client.db("pokemon");
    // databaseName.collection(collectionName)
    const national = pokemon.collection("national-dex");
    // model.replaceOne(query, doc, options)
    const result = await national.replaceOne({ _id: replacementPokemon._id }, replacementPokemon, {
      upsert: true
    });
    if (result.modifiedCount > 0) {
      console.log(`Modified ${result.modifiedCount} document(s) at position ${replacementPokemon._id}`);
    } else if (result.upsertedId) {
      console.log(`Inserted ${result.upsertedId} document at position ${replacementPokemon._id}`);
    }
  } catch (error) {
    console.log(error);
  }
}

replaceInsertPokemon();
