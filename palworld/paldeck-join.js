const fs = require("fs");
const paldeckPath = require("path").join(__dirname, "./paldeck");
const palBreedingObjs = require('./2024-01-29-pal-breeding-matrix.json');
const paldeck = [];
const errors = {};
const saveFile = require('./helperFunctions/saveFile');

const { reformatPalObjectForJoin, reformatPalBreedingObjToArray} = require('./helperfunctions');

require("fs")
  .readdirSync(paldeckPath)
  .forEach(function (file) {
    const pal = require(`./paldeck/${file}`);
    pal.breeding = reformatPalBreedingObjToArray(palBreedingObjs[pal.name], pal.name);
    paldeck.push(reformatPalObjectForJoin(pal));
  });

const paldeckSorted = paldeck.sort((palA, palB) => {
  if (palA._id < palB._id) {
    return -1;
  }
});

saveFile(paldeckSorted, `./${new Date().toJSON().slice(0, 10)}-paldeck`)
// const saveData = JSON.stringify(paldeckSorted, null, 2);

// console.log("Paldeck length:", paldeckSorted.length);
// if (Object.keys(errors).length > 0) {
//   console.log("errors", errors);
// } else {
//   console.log("No errors");
// }
// // Write JSON string to a file
// fs.writeFile(
//   `./${new Date().toJSON().slice(0, 10)}-paldeck.json`,
//   saveData,
//   (error) => {
//     error ? console.error(error) : null;
//     console.log(`${new Date().toJSON().slice(0, 10)}-paldeck.json saved.`);
//   }
// );
