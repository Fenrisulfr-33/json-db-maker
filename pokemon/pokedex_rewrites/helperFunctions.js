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
        pokemonList.hidden.push({name: formattedName, id: mon._id});
      }
    } else {
      if (!pokemonList.normal.includes(formattedName)) {
        pokemonList.normal.push({name: formattedName, id: mon._id});
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

const addNewMoves = (moves, checkObj, movesDB) => {
  const newMoves = {};
  moves.forEach((move) => {
    const foundMove = movesDB.find((dbMove) => {
      if (
        dbMove.name.english
          .toLowerCase()
          .replaceAll(" ", "-")
          .replace("'", "") === move.move.name
      ) {
        return dbMove.name.english;
      }
    });
    if (foundMove) {
      const {
        name: { english },
      } = foundMove;
      move.version_group_details.forEach((method_move) => {
        const { move_learn_method, version_group, level_learned_at } =
          method_move;
        const { name } = version_group;
        if (move_learn_method.name === "tutor") {
          if (newMoves[name]) {
            if (newMoves[name].tutor) {
              newMoves[name].tutor.push(english);
            } else {
              newMoves[name].tutor = [];
              newMoves[name].tutor.push(english);
            }
          } else {
            newMoves[name] = {};
            newMoves[name].tutor = [];
            newMoves[name].tutor.push(english);
          }
        } else if (move_learn_method.name === "egg") {
          if (newMoves[name]) {
            if (newMoves[name].egg) {
              newMoves[name].egg.push(english);
            } else {
              newMoves[name].egg = [];
              newMoves[name].egg.push(english);
            }
          } else {
            newMoves[name] = {};
            newMoves[name].egg = [];
            newMoves[name].egg.push(english);
          }
        } else if (move_learn_method.name === "machine") {
          if (newMoves[name]) {
            if (newMoves[name].machine) {
              newMoves[name].machine.push(english);
            } else {
              newMoves[name].machine = [];
              newMoves[name].machine.push(english);
            }
          } else {
            newMoves[name] = {};
            newMoves[name].machine = [];
            newMoves[name].machine.push(english);
          }
        } else if (move_learn_method.name === "level-up") {
          const lvlMove = { name: english, lvl: level_learned_at };
          const evoMove = { name: english, lvl: 1 };
          if (Number(level_learned_at) === 0) {
            if (newMoves[name]) {
              if (newMoves[name].evolution) {
                newMoves[name].evolution.push(english);
              } else {
                newMoves[name].evolution = [];
                newMoves[name].evolution.push(english);
              }
            } else {
              newMoves[name] = {};
              newMoves[name].evolution = [];
              newMoves[name].evolution.push(english);
            }

            if (newMoves[name]) {
              if (newMoves[name]["level-up"]) {
                newMoves[name]["level-up"].push(evoMove);
              } else {
                newMoves[name]["level-up"] = [];
                newMoves[name]["level-up"].push(evoMove);
              }
            } else {
              newMoves[name] = {};
              newMoves[name]["level-up"] = [];
              newMoves[name]["level-up"].push(evoMove);
            }
          } else {
            if (newMoves[name]) {
              if (newMoves[name]["level-up"]) {
                newMoves[name]["level-up"].push(lvlMove);
              } else {
                newMoves[name]["level-up"] = [];
                newMoves[name]["level-up"].push(lvlMove);
              }
            } else {
              newMoves[name] = {};
              newMoves[name]["level-up"] = [];
              newMoves[name]["level-up"].push(lvlMove);
            }
          }
        } else if (
          move_learn_method.name === "form-change" ||
          move_learn_method.name === "light-ball-egg" ||
          move_learn_method.name === "zygarde-cube" ||
          move_learn_method.name === "stadium-surfing-pikachu"
        ) {
          const specialName = {
            name: english,
            method: move_learn_method.name,
          };
          if (newMoves[name]) {
            if (newMoves[name]["special-moves"]) {
              newMoves[name]["special-moves"].push(specialName);
            } else {
              newMoves[name]["special-moves"] = [];
              newMoves[name]["special-moves"].push(specialName);
            }
          } else {
            newMoves[name] = {};
            newMoves[name]["special-moves"] = [];
            newMoves[name]["special-moves"].push(specialName);
          }
        } else {
          checkObj[move_learn_method.name] = "missed";
        }
      });
    } else {
      checkObj[move.move.name] = "not found";
    }
  });
  const finalMoves = sortLevelUpMoves(newMoves);
  return finalMoves;
};

const sortLevelUpMoves = (moves) => {
  for (const [key, value] of Object.entries(moves)) {
    for (const [keyTwo, valueTwo] of Object.entries(moves[key])) {
      if (keyTwo === "level-up") {
        const sortedLvl = moves[key][keyTwo].sort((a, b) => {
          if (a.lvl < b.lvl) {
            return -1;
          }
        });
        moves[key][keyTwo] = sortedLvl;
      }
    }
  }
  return moves;
};

const addAbilityObjectToPokemon = (pokemonAbilities, abilitesDB) => {
  const newAbilityObj = {};
  for (const [key, value] of Object.entries(pokemonAbilities)) {
    if (value === "") {
    } else {
      const formattedAbility = value.toLowerCase().replaceAll(" ", "-");
      const foundAbility = abilitesDB.find(
        (ability) =>
          ability.name.english.toLowerCase().replaceAll(" ", "-") ===
          formattedAbility
      );
      if (foundAbility) {
        newAbilityObj[key] = {
          name: foundAbility.name.english,
          id: foundAbility._id,
        };
      } else {
        console.log("Ability not found", value);
      }
    }
  }
  return newAbilityObj;
};

module.exports = {
  pokemonThatHaveAbility,
  nameFormatter,
  generationDecephyer,
  effectEntry,
  flavorTextEntry,
  addNewMoves,
  addAbilityObjectToPokemon,
};
