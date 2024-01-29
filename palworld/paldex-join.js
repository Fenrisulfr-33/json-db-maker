const fs = require("fs");
const paldexPath = require("path").join(__dirname, "./paldex");
const palBreedingObjs = require('./2024-01-29-pal-breeding-matrix.json');
const paldexJoined = [];
const errors = {};

require("fs")
  .readdirSync(paldexPath)
  .forEach(function (file) {
    const pal = require(`./paldex/${file}`);
    const returnPal = pal;
    pal.breeding = palBreedingObjs[pal.name];
    // TODO: Add a returnPalModel() function so it always returns the format we want it
    paldexJoined.push(pal);
  });
// Sort paldex before saving.
const paldexSorted = paldexJoined.sort((palA, palB) => {
  if (palA._id < palB._id) {
    return -1;
  }
});

const saveData = JSON.stringify(paldexSorted, null, 2);

console.log("Paldex length:", paldexSorted.length);
if (Object.keys(errors).length > 0) {
  console.log("errors", errors);
} else {
  console.log("No errors");
}
// Write JSON string to a file
fs.writeFile(
  `./${new Date().toJSON().slice(0, 10)}-paldex.json`,
  saveData,
  (error) => {
    error ? console.error(error) : null;
    console.log(`${new Date().toJSON().slice(0, 10)}-paldex.json saved.`);
  }
);
