const saveFile = require("./helperFunctions/saveFile");
const abilityPath = require("path").join(__dirname, "./pokemon-data/abilities");
const abilitiesFinal = [];
const errors = {};

const addPokemonThatCanHaveAbility = require('./helperFunctions/addPokemonThatCanHaveAbility')

require("fs")
  .readdirSync(abilityPath)
  .forEach(function (file) {
    const ability = require(`./pokemon-data/abilities/${file}`);
    const returnAbility = addPokemonThatCanHaveAbility(ability);
    abilitiesFinal.push(returnAbility);
  });

saveFile(
  abilitiesFinal,
  `./pokemon-data/${new Date().toJSON().slice(0, 10)}-abilities`,
  true,
  "Join Abilities",
  errors
);
