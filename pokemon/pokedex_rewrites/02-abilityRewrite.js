const dataFetcher = require("./dataFetcher");
const abilities = require("./abilities_jsons/01-abilities.json");
const pokedex = require('./finalPokedex/final-pokedex.json');
const {
    pokemonThatHaveAbility,
    generationDecephyer,
    effectEntry,
    flavorTextEntry,
  } = require("./helperFunctions");

const abilityRewrite02 = (oldData, newData, checkObj) => {
    const normal = [];
    const hidden = [];
    oldData.pokemonWithAbility.normal.forEach((pokemon) => {
        const found = pokedex.find((mon) => mon.name.english === pokemon);
        if (found) {
            normal.push({name: found.name.english, id: found._id});
        } else {
            console.log(pokemon);
        }
    });
    oldData.pokemonWithAbility.hidden.forEach((pokemon) => {
        const found = pokedex.find((mon) => mon.name.english === pokemon);
        if (found) {
            hidden.push({name: found.name.english, id: found._id});
        } else {
            console.log(pokemon);
        }
    });
    oldData.pokemonWithAbility.normal = normal;
    oldData.pokemonWithAbility.hidden = hidden;

    for (const [key, value] of Object.entries(oldData.description)){
        const newValue = value.replaceAll('\n', ' ');
        oldData.description[key] = newValue;
    }
    
    return oldData;
};

dataFetcher(
  "", // '' no API needed : https://pokeapi.co/api/v2/ability
  297, // index to stop at - 1
  abilities, // old data
  "./abilities_jsons/02-abilities.json", // new file write
  abilityRewrite02, // function passed in
  true // returnObj = true, returnArray = false || Defaults to true
);
