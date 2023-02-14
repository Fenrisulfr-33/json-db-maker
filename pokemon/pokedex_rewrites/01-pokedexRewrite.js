const dataFetcher = require("./dataFetcher");
const pokedex = require("./pokedex_jsons/00-dnt-pokedex.json");
const movesDB = require("./moves_jsons/00-dnt-moves.json");
const scarlet_violet_dex = require("../pokemon/pokedexes/scarlet-violet-dex");
/**
 * MAIN FUNCTION
 *
 *  This re writes any JSON data that already had a template you want to preserve and edit/update/or post to
 * @param {object} oldData - the JSON array indivdual object
 * @param {object} newData - is the object getting passed into the new array
 * @param {object} checkObj - use this to store and info you want to see at the end of the conversion
 */
const pokedexRewrite01 = (oldData, newData, checkObj) => {
  const newMoves = {};
  const addNewMoves = (moves, checkObj) => {
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
  };

  const sortLevelUpMoves = () => {
    for (const [key, value] of Object.entries(newMoves)) {
      for (const [keyTwo, valueTwo] of Object.entries(newMoves[key])) {
        if (keyTwo === "level-up") {
          const sortedLvl = newMoves[key][keyTwo].sort((a, b) => {
            if (a.lvl < b.lvl) {
              return -1;
            }
          });
          newMoves[key][keyTwo] = sortedLvl;
        }
      }
    }
  };
  /**
   * Redo moves for all pokemon from pokeAPI
   *
   * moves format
   * moves:{
   *    "red-blue": {
   *        "level-up": [
   *            {name: '', lvl: 0}
   *        ],
   *        ""
   *    }
   * }
   */
    
// SOMETHING IS WRONG HERE POKEMON DATA NOT ACCURACTE with sword and sheild specifically

  // if (manuallyWrittenPokemon.includes(oldData._id)) {
  //   return oldData;
  // } else
   if (scarlet_violet_dex.includes(oldData._id)) {
    // adding dex numbers to pokemon
    scarlet_violet_dex.find((num, index) => {
      if (num === oldData._id) {
        oldData.pokedexNumber.scvi = index + 1;
      }
    });
    addNewMoves(newData.moves, checkObj);
    sortLevelUpMoves();
    return {
      ...oldData,
      moves: newMoves,
    };
  } else {
    addNewMoves(newData.moves, checkObj);
    sortLevelUpMoves();
    return {
      ...oldData,
      moves: newMoves,
    };
  }
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
