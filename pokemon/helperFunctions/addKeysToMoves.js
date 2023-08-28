const fs = require("fs");
const moves = require("../data/moves/00-dnt-moves.json");

function addKeysToMoves() {

  const movesWithKey = moves.map((move) => {
    const newDescription = {};
    if (move.description && Object.keys(move.description).length > 0){
        for (const [key, value] of Object.entries(move.description)) {
          const newValue = value.replaceAll("\n", " ");
          newDescription[key] = newValue;
        }
    }
    const newEffect = {};
    if (move.effect && Object.keys(move.effect).length > 0){
        for (const [key, value] of Object.entries(move.effect)) {
          const newValue = value.replaceAll("\n", " ");
          newEffect[key] = newValue;
        }
    }
    const key = move.name.english.replaceAll(' ', '-').replaceAll("'", '').toLowerCase();

    return {
      _id: move._id,
      key: key,
      name: move.name,
      type: move.type,
      category: move.category,
      contest: move.contest,
      pp: move.pp,
      power: move.power,
      accuracy: move.accuracy,
      contact: move.contact,
      generation: move.generation,
      target: move.target,
      changes: move.changes,
      description: newDescription,
      effect: newEffect,
      priority: move.priority,
    };
  });

  const saveData = JSON.stringify(movesWithKey, null, 2); // this makes it pretty
  // Write JSON string to a file
  fs.writeFile("./new-moves.json", saveData, (error) => {
    error ? console.error(error) : null;
    console.log("JSON data is saved.");
  });
}

addKeysToMoves()