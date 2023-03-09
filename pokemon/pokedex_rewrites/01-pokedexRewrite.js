const dataFetcher = require("./dataFetcher");
const pokedex = require("./pokedex_jsons/00-dnt-pokedex.json");
const moves = require("./moves_jsons/00-dnt-moves.json");
const scarlet_violet_dex = require("../pokedexes/scarlet-violet-dex");
const isle_of_armor_dex = require('../pokedexes/isle-of-armor-dex');
const crown_tundra_dex = require('../pokedexes/crown-tundra-dex');
const abilities = require("./abilities_jsons/01-abilities.json");
const { addNewMoves, addAbilityObjectToPokemon } = require("./helperFunctions");
/**
 * MAIN FUNCTION
 *
 *  This re writes any JSON data that already had a template you want to preserve and edit/update/or post to
 * @param {object} oldData - the JSON array indivdual object
 * @param {object} newData - is the object getting passed into the new array
 * @param {object} checkObj - use this to store and info you want to see at the end of the conversion
 */
const pokedexRewrite01 = (oldData, newData, checkObj) => {
  // adding dex numbers to pokemon
  if (scarlet_violet_dex.includes(oldData._id)) {
    scarlet_violet_dex.find((num, index) => {
      if (num === oldData._id) {
        oldData.pokedexNumber.scvi = index + 1;
      }
    });
  }
  if (crown_tundra_dex.includes(oldData._id)) {
    crown_tundra_dex.find((num, index) => {
      if (num === oldData._id) {
        oldData.pokedexNumber.ct = index + 1;
      }
    });
  }
  if (isle_of_armor_dex.includes(oldData._id)) {
    isle_of_armor_dex.find((num, index) => {
      if (num === oldData._id) {
        oldData.pokedexNumber.ct = index + 1;
      }
    });
  }
  if (sword_shield_dex.includes(oldData._id)) {
    sword_shield_dex.find((num, index) => {
      if (num === oldData._id) {
        oldData.pokedexNumber.ct = index + 1;
      }
    });
  }

  const newEggGroupsFormat = [];
  newEggGroupsFormat.push(oldData.eggGroups[0]);
  oldData.eggGroups[1] ? newEggGroupsFormat.push(oldData.eggGroups[1]) : null;

  return {
    ...oldData,
    eggGroups: newEggGroupsFormat,
    abilities: addAbilityObjectToPokemon(oldData.abilities, abilities),
    moves: addNewMoves(newData.moves, checkObj, moves),
  };
};

/**
 * Data Fetcher Function
 *
 * @param {*} dataURL = incoming api request
 * @param {*} lastNum = the last number of the api request
 * @param {*} oldData = previous version of json file
 * @param {*} fileSaveURL = new save write
 * @param {*} converterFunc = passed in function with changes
 */
dataFetcher(
  "https://pokeapi.co/api/v2/pokemon", // '' no API needed : https://pokeapi.co/api/v2/pokemon
  1007, // index to stop at - 1 1008 + 5 forms
  pokedex, // old data
  "./pokedex_jsons/01-pokedex.json", // new file write
  pokedexRewrite01 // function passed in
);
