const dataFetcher = require("./dataFetcher");
const abilities = require("./abilities_jsons/00-dnt-abilities.json");
const {
  pokemonThatHaveAbility,
  generationDecephyer,
  effectEntry,
  flavorTextEntry,
} = require("./helperFunctions");

const abilityRewrite01 = (oldData, newData, checkObj) => {
  if (oldData?._id) {
    const found = newData.names.find((name) => name.language.name === "en");
    oldData.name.english = found.name;

    oldData.pokemonWithAbility = pokemonThatHaveAbility(newData.pokemon);
    oldData.generation = generationDecephyer(newData.generation);
    newData.flavor_text_entries
      ? (oldData.description = flavorTextEntry(newData.flavor_text_entries))
      : null;

    if (oldData.effect.full === "" || oldData.effect.shortEffect === '') {
      oldData.effect = newData.effect_entries
        ? effectEntry(newData.effect_entries)
        : "";
    }

    return oldData;
  } else {
    const found = newData.names.find((name) => name.language.name === "en");
    return {
      _id: newData.id,
      name: {
        english: found.name,
      },
      generation: generationDecephyer(newData.generation),
      effect:newData.effect_entries
      ? effectEntry(newData.effect_entries)
      : "",
      description: newData.flavor_text_entries
        ? flavorTextEntry(newData.flavor_text_entries)
        : {},
      pokemonWithAbility: pokemonThatHaveAbility(newData.pokemon),
    };
  }
};

dataFetcher(
  "https://pokeapi.co/api/v2/ability", // '' no API needed : https://pokeapi.co/api/v2/ability
  297, // index to stop at - 1
  abilities, // old data
  "./abilities_jsons/01-abilities.json", // new file write
  abilityRewrite01, // function passed in
  true // returnObj = true, returnArray = false || Defaults to true
);
