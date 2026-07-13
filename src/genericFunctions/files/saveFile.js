const fs = require("fs");

function saveFile(data, fileName) {
    const saveDataJson = JSON.stringify(data, null, 2);

    fs.writeFile(
        `${fileName}.json`,
        saveDataJson,
        (error) => {
            error ? console.error(error) : null;
            console.log(`${fileName} saved`);
        }
    );
}

module.exports = saveFile;