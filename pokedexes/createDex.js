const fs = require("fs");

const fileName = './swsh/IsleOfArmorDex.json',
obj = {},
createDex = () => {
    for (let i = 1; i <= 211; i++){
        obj[`${i}`] = {
            pokemon: 0,
            form: null,
        };
    }
};
createDex();
const created_dex = JSON.stringify(obj, null, 2); // this makes it pretty
// write JSON string to a file
fs.writeFile(fileName, created_dex, (error) => {
    error ? console.log(error) : console.log("JSON data is saved.");
});