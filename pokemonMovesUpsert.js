const { MongoClient } = require("mongodb");
// const nationalDex = require("./pokemon/pokemon-data/pokedexJoined.json");
const nationalDex = require("./pokemon/pokemon-data/2023-10-09-pokedex.json");
// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb+srv://archer_brendan:OdinRaven33@cluster0.spj8q.mongodb.net/pokemon_moves?retryWrites=true&w=majority";
const client = new MongoClient(uri);

const replaceDbWithNewPokemon = async () => {
  for (let i = 0; i < nationalDex.length; i++) {
    const pokemon = nationalDex[i];
    // console.log(pokemon._id);
    await replaceDocument(pokemon);
  }
  await client.close();
};

async function replaceDocument(replacementMove) {
  try {
    // Get the database and collection on which to run the operation
    const pokemonMoves = client.db("pokemon_moves");
    const redBlue = pokemonMoves.collection("red_blue");
    // Create a query for documents where the title contains "The Cat from"
    const query = { _id: replacementMove._id };
    const options = {
      upsert: true
    }
    // Execute the replace operation
    const result = await national.replaceOne(query, replacementPokemon, options);
    /**
     * result = {
     *  acknowledged: true,
     *  modifiedCount: 0,
     *  upsertedId: null,
     *  upsertedCount: 0,
     *  matchedCount: 1
     * }
     */
    // console.log('result', result)
    // Print the result
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
