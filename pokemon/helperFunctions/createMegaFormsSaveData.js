const fs = require("fs");
const pokedex = require("../03-pokedex.json");
const { addMovesToForms } = require('../helperFunctions/addMovesToForms');
const { megaGengar } = require('../data/forms/mega-forms/mega-gengar');


const megaPokemon = [
  megaGengar,
];

function createMegaFormsSaveData(){
  const saveMegaForms = [];

  megaPokemon.forEach((megaForm) => {
    const foundPokemon = pokedex.find((pokemon) => pokemon._id === Math.floor(megaForm._id))
    if (foundPokemon){
        saveMegaForms.push(addMovesToForms(foundPokemon, megaForm));
    }
  })

  saveJsonData('./test.json', saveMegaForms);
};
// This function saves the .json docs after the loop has passed through an entire folder.
const saveJsonData = (saveRoute, array) => {
  const saveJson = JSON.stringify(array, null, 2); // this makes it pretty
  fs.writeFile(saveRoute, saveJson, (error) => {
    if (error) {
      console.log(error);
    }
    console.log("JSON data is saved.");
  });
  return;
};
// Run main function.
createMegaFormsSaveData();