// Find pokemon that have the ability for the ability page
const pokemonThatHaveAbility = (pokemon) => {
  const pokemonList = {
    normal: [],
    hidden: [],
  };
  // Find all pokemon in the list and format their name, no repeats
  pokemon.forEach((mon) => {
    const formattedName = nameFormatter(mon.pokemon.name);
    if (mon.is_hidden) {
      if (!pokemonList.hidden.includes(formattedName)) {
        pokemonList.hidden.push(formattedName);
      }
    } else {
      if (!pokemonList.normal.includes(formattedName)) {
        pokemonList.normal.push(formattedName);
      }
    }
  });
  return pokemonList;
};

// Takes any format of name and remakes it for readable format
const nameFormatter = (name) => {
  // Split name by spaces
  const nameSplitSpaces = name.split(" ");
  // Join name with dashes
  const nameJoinSpaces = nameSplitSpaces.join("-");
  // Resplit name with spaces
  const nameSplit = nameJoinSpaces.split("-");

  const formattedNameSplit = nameSplit.map(
    (split) => split[0].toUpperCase() + split.substring(1)
  );
  return formattedNameSplit.length > 1
    ? formattedNameSplit.join(" ")
    : formattedNameSplit[0];
};

// Decephyer generation test into simple number
const generationDecephyer = (generation) => {
  switch (generation.name) {
    case "generation-x":
      return 10;
    case "generation-ix":
      return 9;
    case "generation-viii":
      return 8;
    case "generation-vii":
      return 7;
    case "generation-vi":
      return 6;
    case "generation-v":
      return 5;
    case "generation-iv":
      return 4;
    case "generation-iii":
      return 3;
    case "generation-ii":
      return 2;
    case "generation-i":
      return 1;
    default:
      console.log(generation.name);
  }
};

const effectEntry = (effect) => {
  if (effect.length > 0) {
    const foundEffect = effect.find((eff) => eff.language.name === "en");
    return {
      shortEffect: foundEffect.short_effect ? foundEffect.short_effect : "",
      full: foundEffect.effect ? foundEffect.effect : "",
    };
  } else {
    return {
      shortEffect: "",
      full: "",
    };
  }
};

const flavorTextEntry = (flavorText) => {
  const description = {};
  flavorText.forEach((flavor) => {
    if (flavor.language.name === "en") {
      description[flavor.version_group.name] = flavor.flavor_text;
    }
  });
  return description;
};

module.exports = {
  pokemonThatHaveAbility,
  nameFormatter,
  generationDecephyer,
  effectEntry,
  flavorTextEntry,
};
