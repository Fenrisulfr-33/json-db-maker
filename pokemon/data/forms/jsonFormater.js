const fs = require("fs");

const slowpoke = require('./galarianForms/slowpoke');
const slowbro = require('./galarianForms/slowbro');
const slowking = require('./galarianForms/slowking');
const zigzagoon = require('./galarianForms/zigzagoon');
const linoone = require('./galarianForms/linoone');
const articuno = require('./galarianForms/articuno');
const moltres = require('./galarianForms/moltres');
const zapdos = require('./galarianForms/zapdos');
const corsola = require('./galarianForms/corsola');
const darumaka = require('./galarianForms/darumaka');
const darmanitan = require('./galarianForms/darmanitan');

const tauros = require('./paldeanForms/tauros');
const taurosBlaze = require('./paldeanForms/tauros-blaze');
const taurosAqua = require('./paldeanForms/tauros-aqua');
const wooper = require('./paldeanForms/wooper');

function jsonFormatter(object, fileSaveURL){
    const json_object = JSON.stringify(object, null, 2); // this makes it pretty
    // write JSON string to a file
    fs.writeFile(fileSaveURL, json_object, (error) => {
        error ? console.log(error) : console.log("JSON data is saved.");
    });
}
jsonFormatter(slowpoke, './galarianForms/slowpoke.json');
jsonFormatter(slowbro, './galarianForms/slowbro.json');
jsonFormatter(slowking, './galarianForms/slowking.json');
jsonFormatter(zigzagoon, './galarianForms/zigzagoon.json');
jsonFormatter(linoone, './galarianForms/linoone.json');
jsonFormatter(articuno, './galarianForms/articuno.json');
jsonFormatter(zapdos, './galarianForms/zapdos.json');
jsonFormatter(moltres, './galarianForms/moltres.json');
jsonFormatter(corsola, './galarianForms/corsola.json');
jsonFormatter(darumaka, './galarianForms/darumaka.json');
jsonFormatter(darmanitan, './galarianForms/darmanitan.json');

jsonFormatter(tauros, './paldeanForms/tauros.json');
jsonFormatter(taurosBlaze, './paldeanForms/taurosBlaze.json');
jsonFormatter(taurosAqua, './paldeanForms/taurosAqua.json');
jsonFormatter(wooper, './paldeanForms/wooper.json');
