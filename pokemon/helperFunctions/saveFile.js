const fs = require("fs");

const saveFile = (data, fileName, sorted, listName, errors) => {
  let dataJSON = data;
  if (sorted) {
    dataJSON = data.sort((a, b) => {
      if (a._id < b._id) {
        return -1;
      }
    });
  }
  const saveData = JSON.stringify(dataJSON, null, 2);
  console.log(`${listName} length: ${dataJSON.length}`);
  console.log(`${listName} join errors: ${errors}`);

  fs.writeFile(`${fileName}.json`, saveData, (error) => {
    error ? console.error(error) : null;
    console.log(`${fileName}.json saved.`);
  });
};

module.exports = saveFile;
