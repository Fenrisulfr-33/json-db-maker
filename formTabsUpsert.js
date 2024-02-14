const { MongoClient } = require("mongodb");
const { mongodb_uri, formTabs } = require('./env');
const client = new MongoClient(mongodb_uri);

const replaceInsertFormTab = async () => {
  for (let i = 0; i < formTabs.length; i++) {
    const formTab = formTabs[i];
    await replaceDocument(formTab);
  }
  await client.close();
};

async function replaceDocument(replacementFormTab) {
  try {
    // clinet.db(databaseName)
    const pokemon = client.db("pokemon");
    // databaseName.collection(collectionName)
    const forms = pokemon.collection("form-tabs");
    // model.replaceOne(query, doc, options)
    const result = await forms.replaceOne({ _id: replacementFormTab._id }, replacementFormTab, {
      upsert: true
    });
    if (result.modifiedCount > 0) {
      console.log(`Modified ${result.modifiedCount} document(s) at position ${replacementFormTab._id}`);
    } else if (result.upsertedId) {
      console.log(`Inserted ${result.upsertedId} document at position ${replacementFormTab._id}`);
    }
  } catch (error) {
    console.log(error);
  }
}

replaceInsertFormTab();
