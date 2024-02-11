const { MongoClient } = require("mongodb");
const pokedex = require("./pokemon/pokemon-data/2024-02-11-pokedex.json");
// TODO: replace uri string with env constant
const uri = "mongodb+srv://archer_brendan:OdinRaven33@cluster0.spj8q.mongodb.net/pokemon?retryWrites=true&w=majority";
const client = new MongoClient(uri);

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
    // model.replaceOne(query, options)
    const result = await national.replaceOne({ _id: replacementPokemon._id }, replacementPokemon, {
      upsert: true
    });
    if (result.modifiedCount > 0){
      console.log(`Modified ${result.modifiedCount} document(s) at position ${replacementPokemon._id}`);
    } else if (result.upsertedId){
      console.log(`Inserted ${result.upsertedId} document at position ${replacementPokemon._id}`);
    }
  } catch (error) {
    console.log(error);
  }
}

replaceInsertPokemon();
