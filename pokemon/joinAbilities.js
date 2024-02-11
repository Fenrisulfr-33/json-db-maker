const fs = require("fs");
const abilityPath = require("path").join(__dirname, "./pokemon-data/abilities");
const joinArray = [];
const errors = {};

require("fs")
  .readdirSync(abilityPath)
  .forEach(function (file) {
    const item = require(`./pokemon-data/abilities/${file}`);
    joinArray.push(item);
  });

const listSorted = joinArray.sort((itemA, itemB) => {
  if (itemA._id < itemB._id) {
    return -1;
  }
});

const saveData = JSON.stringify(listSorted, null, 2);

console.log("Pokedex length:", listSorted.length);
console.log("errors", errors);
// Write JSON string to a file
fs.writeFile(`./pokemon-data/${new Date().toJSON().slice(0,10)}-abilities.json`, saveData, (error) => {
  error ? console.error(error) : null;
  console.log("JSON data is saved.");
});
