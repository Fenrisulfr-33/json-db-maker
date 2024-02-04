const paldeck = require("./2024-02-02-paldeck.json");
const { saveDataJSON } = require('./helperfunctions');

const palDropdownList = paldeck.map((pal) => {
  return {
    name: pal.name,
    id: pal._id,
  };
});

saveDataJSON(palDropdownList, 'palDropdownList');