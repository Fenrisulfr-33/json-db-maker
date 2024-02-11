const { MongoClient } = require("mongodb");
// const nationalDex = require("./pokemon/pokemon-data/pokedexJoined.json");
const pokedex = require("./pokemon/pokemon-data/2024-02-10-pokedex.json");
// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb+srv://archer_brendan:OdinRaven33@cluster0.spj8q.mongodb.net/pokemon?retryWrites=true&w=majority";
const client = new MongoClient(uri);

const replaceDbWithNewPokemon = async () => {
  for (let i = 0; i < pokedex.length; i++) {
    const pokemon = pokedex[i];
    await replaceDocument(pokemon);
  }
  await client.close();
};

async function replaceDocument(replacementPokemon) {
  try {
    const pokemon = client.db("pokemon");
    const national = pokemon.collection("national-dex");
    const query = { _id: replacementPokemon._id };
    const options = {
      upsert: true
    }
    const result = await national.replaceOne(query, replacementPokemon, options);
    if (result.modifiedCount > 0){
      console.log(`Modified ${result.modifiedCount} document(s) at position ${replacementPokemon._id}`);
    } else if (result.upsertedId){
      console.log(`Inserted ${result.upsertedId} document at position ${replacementPokemon._id}`);
    }
  } catch (error) {
    console.log(error);
  }
}

replaceDbWithNewPokemon();
