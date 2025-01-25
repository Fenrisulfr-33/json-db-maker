const evoIdList = require("./evoltuionIdAssignment.json");
const saveFile = require("../helperFunctions/saveFile");
const errors = {};

console.log(Array.isArray(evoIdList));

const evoIdListNew = evoIdList.map((evo) => {
  if (evo.evolution !== null && evo.evolution > 47) {
    evo.evolution++;
  }
  return evo;
});

saveFile(evoIdListNew, `./evoIdList.json`, false, "Evolution Id List", errors);
