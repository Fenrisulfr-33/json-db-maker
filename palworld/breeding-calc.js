/**
 * If each object list 1 parent, then withing that object u could find the other parent through that list
 *
 * for desired child it would have to look for all
 */
const fs = require("fs");
const breedingList = require("./palworld-breeding.json");
const paldex = require('./2024-01-29-paldex.json');
const errors = {};

const convertBreedingExcelDocToFormattedJSON = () => {
  const convertedParentPalObj = {};
  breedingList.forEach((obj) => {
    // get parent and set object key
    const parentPal = obj.FIELD1;
    // give parentPal the object field
    convertedParentPalObj[parentPal] = {};
    // go through all remaining keys and add to object
    for (const key in obj) {
      console.log(`${key}: ${obj[key]}`);
      key === "FIELD1"
        ? null
        : (convertedParentPalObj[parentPal][key] = obj[key]);
    }
  });

  const saveData = JSON.stringify(convertedParentPalObj, null, 2);
  // Write JSON string to a file
  fs.writeFile(
    `./${new Date().toJSON().slice(0, 10)}-pal-breeding-matrix.json`,
    saveData,
    (error) => {
      error ? console.error(error) : null;
      console.log(`${new Date().toJSON().slice(0, 10)}-pal-breeding-matrix.json saved.`);
    }
  );
};

convertBreedingExcelDocToFormattedJSON();