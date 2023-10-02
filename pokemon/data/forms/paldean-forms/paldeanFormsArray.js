const paldeanTauros = require("./128.1-tauros");
const paldeanTaurosBlaze = require("./128.2-tauros-blaze");
const paldeanTaurosAqua = require("./paldean-tauros-aqua");
const paldeanWooper = require("./194.1-wooper");
const walkingWake = require("./1009-walking-wake");
const ironLeaves = require("./1010-iron-leaves");

const paldeanFormsArray = [
  paldeanTauros,
  paldeanTaurosBlaze,
  paldeanTaurosAqua,
  paldeanWooper,
  walkingWake,
  ironLeaves,
];

const taurosTab = [
  { id: 128, name: "Tauros" },
  { id: 128.1, name: "Combat Breed" },
  { id: 128.2, name: "Blaze Breed" },
  { id: 128.3, name: "Aqua Breed" },
];

const wooperTab = [
  { id: 194, name: "Wooper" },
  { id: 194.1, name: "Paldean Wooper" },
];

const paldeanFormTabs = [
  {
    id: 128,
    formTab: taurosTab
  },
  {
    id: 128.1,
    formTab: taurosTab
  },
  {
    id: 128.2,
    formTab: taurosTab
  },
  {
    id: 128.3,
    formTab: taurosTab
  },
  {
    id: 194,
    formTab: wooperTab
  },
  {
    id: 194.1,
    formTab: wooperTab
  },
];

module.exports = {
  paldeanFormsArray,
  paldeanFormTabs,
};
