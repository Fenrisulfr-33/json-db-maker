const saveFile = require("./helperFunctions/saveFile");
const movesPath = require("path").join(__dirname, "./pokemon-data/moves");
const movesFinal = [];
const errors = {};

require("fs")
  .readdirSync(movesPath)
  .forEach(function (file) {
    const move = require(`./pokemon-data/moves/${file}`);
    movesFinal.push(move);
  });

saveFile(
  movesFinal,
  `./pokemon-data/${new Date().toJSON().slice(0, 10)}-moves`,
  true,
  "Join Moves",
  errors
);
