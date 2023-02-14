const fs = require("fs");
const tauros = require('./paldeanForms/tauros');
const wooper = require('./paldeanForms/wooper');
const slowpoke = require('./galarianForms/slowpoke');
const slowbro = require('./galarianForms/slowbro');
const slowking = require('./galarianForms/slowking');

function jsonFormatter(object, fileSaveURL){
    const json_object = JSON.stringify(object, null, 2); // this makes it pretty
    // write JSON string to a file
    fs.writeFile(fileSaveURL, json_object, (error) => {
        error ? console.log(error) : console.log("JSON data is saved.");
    });
}
jsonFormatter(tauros, './paldeanForms/tauros.json');
jsonFormatter(wooper, './paldeanForms/wooper.json');
jsonFormatter(slowpoke, './galarianForms/slowpoke.json');
jsonFormatter(slowbro, './galarianForms/slowbro.json');
jsonFormatter(slowking, './galarianForms/slowking.json');