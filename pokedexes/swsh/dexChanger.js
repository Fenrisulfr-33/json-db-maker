const fs = require("fs");
const swSh = require('./SwShDex.json');

const dexSize = Object.keys(swSh).length;
const galarian = [52, 77, 78, 79, 80, 83, 110, 122, 144, 145, 146, 199, 222, 263, 264, 554, 555, 562, 618];

const obj = {};
for (let i = 1; i <= dexSize; i++){
    const form = galarian.includes(swSh[`${i}`]) ? 'galarian' : null;
    obj[`${i}`] = {
        pokemon: swSh[`${i}`],
        form: form,
    };
}
const created_dex = JSON.stringify(obj, null, 2); // this makes it pretty

// write JSON string to a file
fs.writeFile('./SwShDex-final.json', created_dex, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("JSON data is saved.");
});