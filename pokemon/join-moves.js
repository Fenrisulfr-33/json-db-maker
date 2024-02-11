const fs = require("fs");
const movesPath = require("path").join(__dirname, "./pokemon-data/moves");
const movesFinal = [];
const errors = {};

require("fs")
    .readdirSync(movesPath)
    .forEach(function (file) {
        const move = require(`./pokemon-data/moves/${file}`);
        movesFinal.push(move);
    });

const movesFinalSorted = movesFinal.sort((moveA, moveB) => {
    if (moveA._id < moveB._id) {
        return -1;
    }
});

const movesFinalSortedJSON = JSON.stringify(movesFinalSorted, null, 2);

console.log(`Moves list length: ${movesFinalSorted.length}`);
console.log("Join Moves errors", errors);

fs.writeFile(`./pokemon-data/${new Date().toJSON().slice(0, 10)}-moves.json`, movesFinalSortedJSON, (error) => {
    error ? console.error(error) : null;
    console.log("Moves JSON data is saved.");
});
