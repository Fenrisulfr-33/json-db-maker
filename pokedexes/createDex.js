const fs = require("fs");

const obj = {};
for (let i = 1; i <= 400; i++){
    obj[`${i}`] = 0;
}
const created_dex = JSON.stringify(obj, null, 2); // this makes it pretty

// write JSON string to a file
fs.writeFile('./SwShDex.json', created_dex, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("JSON data is saved.");
});