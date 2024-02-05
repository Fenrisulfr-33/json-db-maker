const fs = require("fs");
const paldeck = require("./2024-02-02-paldeck.json");
const { convertStringToLowercaseJoined } = require("./helperfunctions");

const getAbilitiesFromPals = async (list, saveRoute) => {
  for (let i = 0; i < list.length; i++) {
    const pal = list[i];
    saveFile(
      {
        _id: pal._id,
        key: convertStringToLowercaseJoined(pal.ability.name),
        name: pal.ability.name,
        desc: pal.ability.description,
        palsThatHave: [
          {
            id: pal._id,
            palName: pal.name,
          },
        ],
      },
      saveRoute
    );
  }
  console.log("Done splitting");
  return;
};

const saveFile = (saveItem, saveRoute) => {
  // Create saveData in json format
  const saveData = JSON.stringify(saveItem, null, 2); // this makes it pretty
  // Write JSON string to a file
  fs.writeFile(
    `${saveRoute}/${saveItem._id}-${saveItem.key}.json`,
    saveData,
    (error) => {
      error ? console.error(error) : null;
    }
  );
  console.log(
    `Saved file at ${saveRoute}/${saveItem._id}-${saveItem.key}.json`
  );
};

// Run function
getAbilitiesFromPals(paldeck, "./abilities");
