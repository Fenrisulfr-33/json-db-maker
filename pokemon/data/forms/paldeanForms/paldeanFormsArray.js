const paldeanTauros = require("./paldean-tauros");
const paldeanTaurosBlaze = require("./paldean-tauros-blaze");
const paldeanTaurosAqua = require("./paldean-tauros-aqua");
const paldeanWooper = require("./paldean-wooper");
const walkingWake = require("./walking-wake");
const ironLeaves = require("./iron-leaves");

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
