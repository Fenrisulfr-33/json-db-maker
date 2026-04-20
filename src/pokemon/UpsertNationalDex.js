/**
 * Summary: Updates or inserts Pokemon documents into the national-dex collection in MongoDB.
 *
 * @file    This file defines the pokedex upsert functionality.
 * @author  [Fenrisulfr-33]
 * @since   1.0.0
 * @link    [URL to relevant documentation]
 * @license [No License]
 */

const { MongoClient } = require("mongodb");
const { MONGO_URI, pokedex } = require('../../env.js');
const client = new MongoClient(MONGO_URI);

/**
 * Replaces an existing Pokemon document in the national-dex collection with the 
 * provided replacementPokemon.
 * If the document does not exist, it will be inserted.
 * @param {Object} replacementPokemon - The Pokemon document to replace or insert.

 */
async function upsertDocument(pokemonData) {
  try {
    // Name of the database we want to upsert
    const pokemon = client.db("pokemon");
    // The name of the collection we want to upsert into
    const national = pokemon.collection("national-dex");
    // model.replaceOne(query, doc, options)
    const result = await national.replaceOne({ _id: pokemonData._id }, pokemonData, {
      upsert: true
    });
    if (result.modifiedCount > 0) {
      console.log(`Modified ${result.modifiedCount} document(s) at position ${pokemonData._id}`);
    } else if (result.upsertedId) {
      console.log(`Inserted ${result.upsertedId} document at position ${pokemonData._id}`);
    }
  } catch (error) {
    console.log(error);
  }
}

const UpsertNationalDex = async () => {
  for (const pokemon of pokedex){
    await upsertDocument(pokemon);
  }

  await client.close();
};
  
UpsertNationalDex();
