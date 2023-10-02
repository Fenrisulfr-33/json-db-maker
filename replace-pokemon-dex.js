const { MongoClient } = require("mongodb");
const nationalDex = require("./pokemon/pokemon-data/pokedexJoined.json");
// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb+srv://archer_brendan:OdinRaven33@cluster0.spj8q.mongodb.net/pokemon?retryWrites=true&w=majority";
const client = new MongoClient(uri);

const replaceDbWithNewPokemon = async () => {
  for (let i = 0; i < nationalDex.length; i++) {
    const pokemon = nationalDex[i];
    // console.log(pokemon._id);
    await replaceDocument(pokemon);
  }
  await client.close();
};

async function replaceDocument(replacementPokemon) {
  try {
    // Get the database and collection on which to run the operation
    const pokemon = client.db("pokemon");
    const national = pokemon.collection("national-dex");
    // Create a query for documents where the title contains "The Cat from"
    const query = { _id: replacementPokemon._id };
    // Execute the replace operation
    const result = await national.replaceOne(query, replacementPokemon);

    // Print the result
    console.log(`Modified ${result.modifiedCount} document(s) at position ${replacementPokemon._id}`);
  } catch (error) {
    console.log(error);
  }
}

replaceDbWithNewPokemon();
