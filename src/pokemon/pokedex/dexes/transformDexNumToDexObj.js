const fs = require("fs");
const save = require("../../helpers/save.js");

const dexMapNumbers = require("./dexes_numbers/00_dex_map");
// const dexMapObjects = require('./dexes_objects/00_dex_map');

function transformDexNumToDexObj() {
  let start = 1; // Starting number for file naming

  // Iterate through each dex in the numbers map
  dexMapNumbers.forEach((value, key) => {
	let saveRoute = "./dexes_objects/"; // Where to save the new dexes
    console.log(`Transforming dex: ${key}`);

    const dexArray = value;
    const dexObject = [];

    dexArray.forEach((pokemonId, index) => {
      dexObject.push({
        dexNo: index + 1,
        pokemonId,
      });
    });

    if (isSingleDigit(start)) {
      saveRoute += `0${start}_${key}`;
    } else {
      saveRoute += `${start}_${key}`;
    }
    start++;

    // Save list, destination
    save(dexObject, saveRoute);
  });
}

function test(value, key, map) {
  console.log("----------------");
  console.log(`key = ${key}`);
  // console.log(`map.get('${key}') = ${value}`);
}

function isSingleDigit(number) {
  // Check if the number is greater than or equal to 0 AND less than or equal to 9
  return number >= 0 && number <= 9;
}

transformDexNumToDexObj();
