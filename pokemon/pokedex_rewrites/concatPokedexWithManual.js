const fs = require("fs");
const pokedex = require("./pokedex_jsons/01-pokedex.json");
const manualFormsArray = require("../data/forms/manualFormsArray");

const concatPokedexWithMaunal = () => {
  const mergedArray = pokedex.concat(manualFormsArray);
  const sortedArray = mergedArray.sort((a, b) => {
    if (a._id < b._id) {
      return -1;
    }
  });

  // convert JSON object to string
  const data_array = JSON.stringify(sortedArray, null, 2); // this makes it pretty
  // write JSON string to a file
  fs.writeFile("./finalPokedex/final-pokedex.json", data_array, (error) => {
    error ? console.log(error) : console.log("JSON data is saved.");
  });
  return;
};
concatPokedexWithMaunal();