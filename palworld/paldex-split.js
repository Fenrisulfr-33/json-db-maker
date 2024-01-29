const fs = require("fs");
const paldex = require('./pals.json');

const split = async (list, saveRoute) => {
    for (let i = 0; i < list.length; i++) {
        const item = list[i];
        let saveDoc = null;
        delete item.wiki;
        delete item.imageWiki;
        delete item.key;
        delete item.image;
        saveDoc = item;
        saveDoc._id = item.id;
        delete saveDoc.id;
        const newDoc = {
            _id: saveDoc._id,
            name: saveDoc.name,
            types: saveDoc.types,
            suitability: saveDoc.suitability,
            drops: saveDoc.drops,
            aura: saveDoc.aura,
            description: saveDoc.description,
            skills: saveDoc.skills,

        }
        saveFile(newDoc, saveRoute);

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
