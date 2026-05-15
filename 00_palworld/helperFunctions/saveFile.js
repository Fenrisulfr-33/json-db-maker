const fs = require("fs");

function saveFile(saveData, fileName) {
    const saveDataJson = JSON.stringify(saveData, null, 2);

    fs.writeFile(
        `${fileName}.json`,
        saveDataJson,
        (error) => {
            error ? console.error(error) : null;
            console.log(`${fileName}.json saved`);
        }
    );
}

module.exports = saveFile;