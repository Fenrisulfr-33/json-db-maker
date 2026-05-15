const fs = require("fs");
const paldex = require('./pals.json');
const { reformatPalObjectForSplit } = require('./helperfunctions');

const split = async (list, saveRoute) => {
    for (let i = 0; i < list.length; i++) {
        const item = list[i];
        saveFile(reformatPalObjectForSplit(item), saveRoute);
    }
    console.log("Done splitting");
    return;
};

const saveFile = (saveItem, saveRoute) => {
    // Create saveData in json format
    const saveData = JSON.stringify(saveItem, null, 2); // this makes it pretty
    // Write JSON string to a file
    fs.writeFile(
        `${saveRoute}/${saveItem._id}-${saveItem.name}.json`,
        saveData,
        (error) => {
            error ? console.error(error) : null;
        }
    );
    console.log(`Saved file at ${saveRoute}/${saveItem._id}-${saveItem.name}.json`)
};

// Run function
split(paldex, "./paldex");
