/**
 * If each object list 1 parent, then withing that object u could find the other parent through that list
 *
 * for desired child it would have to look for all
 */
const fs = require("fs");
const breedingList = require("./palworld-breeding.json");
const currentPaldex = require('./2024-01-29-paldex.json');
const errors = {};

const findPalInPaldexNyName = (paldex, findPalName) => {
  // return is the pals _id
  const foundPal = paldex.find((pal) => pal.name === findPalName);
  if (foundPal) {
    return foundPal._id;
  } else {
    console.log(findPalName, 'does not exist in Paldex')
  }
}

const convertBreedingExcelDocToFormattedJSON = (paldex) => {
  const convertedParentPalObj = {
    /*[parentName]: {
        parentId: null,
        bredWith: {
          [secondParentName]: {
            parentId: null,
            child: {
              childName: '',
              childId: null
            }
        }
      */
  };
  breedingList.forEach((obj) => {
    // get parent and set object key
    const parentPal = obj.FIELD1;
    const parentPalId = findPalInPaldexNyName(paldex, parentPal);
    // give parentPal the object field
    convertedParentPalObj[parentPal] = {
      parentId: parentPalId,
      bredWith: {}
    };

    // go through all remaining keys and add to object
    for (const key in obj) {
      // console.log(`${key}: ${obj[key]}`);
      if (key !== "FIELD1") {
        const secondParent = {
          parentId: findPalInPaldexNyName(paldex, key),
          child: {
            childName: obj[key],
            childId: findPalInPaldexNyName(paldex, obj[key])
          }
        };
        convertedParentPalObj[parentPal].bredWith[key] = secondParent
      }
    }
  });

  saveDataJSON(convertedParentPalObj, 'pal-breeding-matrix');
};

const saveDataJSON = (data, saveFile) => {
  const saveData = JSON.stringify(data, null, 2);
  // Write JSON string to a file
  fs.writeFile(
    `./${new Date().toJSON().slice(0, 10)}-${saveFile}.json`,
    saveData,
    (error) => {
      error ? console.error(error) : null;
      console.log(`${new Date().toJSON().slice(0, 10)}-${saveFile}.json saved.`);
    }
  );
}

convertBreedingExcelDocToFormattedJSON(currentPaldex);