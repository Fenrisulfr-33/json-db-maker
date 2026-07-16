import readJson from "../../genericFunctions/files/readJson.js";
import { saveDataJSON } from './helperfunctions.js';

const breedingList = readJson("./palworld-breeding.json", import.meta.url);
const paldeck = readJson('./2024-02-02-paldeck.json', import.meta.url);

const findPalInPaldeckByName = (paldex, findPalName) => {
  const foundPal = paldex.find((pal) => pal.name === findPalName);
  if (foundPal) {
    return foundPal._id;
  } else {
    console.log(findPalName, 'does not exist in Paldeck')
  }
}

const convertBreedingExcelDocToFormattedJSON = (paldeck) => {
  const returnList = breedingList.map((obj) => {
    const parentPal = obj.FIELD1;
    const parentPalId = findPalInPaldeckByName(paldeck, parentPal);
    const breedParent = {
      _id: parentPalId,
      parentPal,
      bredWith: [],
    };
    for (const key in obj) {
      if (key !== "FIELD1") {
        const secondParent = {
          parentName: key,
          parentId: findPalInPaldeckByName(paldeck, key),
          child: {
            childName: obj[key],
            childId: findPalInPaldeckByName(paldeck, obj[key])
          }
        };
        breedParent.bredWith.push(secondParent);
       
      }
    }
    return breedParent;
  });
  saveDataJSON(returnList, 'pal-breeding-list');
};

convertBreedingExcelDocToFormattedJSON(paldeck);