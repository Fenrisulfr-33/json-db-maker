import readJson from "../../genericFunctions/files/readJson.js";
import { saveDataJSON } from './helperfunctions.js';

const paldeck = readJson("./2024-02-02-paldeck.json", import.meta.url);

const palDropdownList = paldeck.map((pal) => {
  return {
    name: pal.name,
    id: pal._id,
  };
});

saveDataJSON(palDropdownList, 'palDropdownList');