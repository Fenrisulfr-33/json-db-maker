const save = require("../../helpers/save.js");
const dexMapNumbers = require("./dexes_numbers/00_dex_map");

const pokemonObjModel = {
	_id: null, // list id variable
	nationalId: null, // national dex number
}

const dexObjModel = {
	dexNo: null,
	pokemonId: null,
}

function transformDexNumToDexObj() {
	let index = 1; // Starting number for file naming

	// Iterate through each dex in the numbers map
	dexMapNumbers.forEach((value, key) => {
		const dexArray = value;
		const dexObject = [];

		dexArray.forEach((pokemonId, index) => {
			dexObject.push({
				dexNo: index + 1,
				pokemonId,
			});
		});

		// Determine save route
		const saveRoute = getSaveRoute(index, key);
		// Increment index for next file
		index++;

		// Save list, destination
		save(dexObject, saveRoute);
	});
}

/**
 * Checks if a number is a single digit (0-9)
 * 
 * @param {Integer} number 
 * @returns {Boolean} true if single digit, false otherwise
 */
function isSingleDigit(number) {
	return number >= 0 && number <= 9;
}

/**
 * Get the save route for a given index and key
 * 
 * @param {Integer} index 
 * @param {String} key 
 * @returns {String} save route
 */
function getSaveRoute(index, key) {
	let saveRoute = "./dexes_objects/"; // Folder to save files

	// Format file name based on index
	if (isSingleDigit(index)) {
		saveRoute += `0${index}_${key}`;
	} else {
		saveRoute += `${index}_${key}`;
	}

	return saveRoute;
}


transformDexNumToDexObj();
