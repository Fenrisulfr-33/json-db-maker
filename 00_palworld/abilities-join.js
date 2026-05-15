const abilitiesPath = require("path").join(__dirname, "./abilities");
const returnAbilities = [];
const saveFile = require('./helperFunctions/saveFile');

require("fs")
  .readdirSync(abilitiesPath)
  .forEach(function (file) {
    const ability = require(`./abilities/${file}`);
    returnAbilities.push(ability);
  });

const abilitiesSorted = returnAbilities.sort((abilityA, abilityB) => {
  if (abilityA._id < abilityB._id) {
    return -1;
  }
});

saveFile(abilitiesSorted, `${new Date().toJSON().slice(0, 10)}-abilities`);
