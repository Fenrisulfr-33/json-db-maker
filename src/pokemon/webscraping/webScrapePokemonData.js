const axios = require("axios");
const cheerio = require("cheerio");
// const pokedex = require("../07-jsons/07-pokedex.json");
const fs = require("fs");
// const dex = require("../../data/scarlet_violet");
// const newPokemonArray = []; // this will be the final array that gets converted to the new json object

const pokemonDatabaseURLNames = require("./pokemonDatabaseURLNames.json");

function isSame(str1, str2) {
	return str1.toLowerCase() === str2.toLowerCase();
}

function createBasePokedexObject(name) {
	return {
		name: {
			english: { name },
		},
		pokedexNumber: {},
		eggGroups: [],
		nameOrigin: {},
		pokedexEntries: {},
	};
}

function createPokemonDataEntry(name) {
	return {
		_id: null,
		key: null,
		name: {
			english: name,
		},
		pokedexNumber: {},
		type: {},
		abilities: {},
		baseStats: {},
		info: {
			height: null,
			weight: null,
		},
		gender: {
			male: null,
			female: null,
			genderless: null,
		},
		evolution: null,
		generation: null,
		evs: {},
		eggGroups: [],
		species: null,
		catchRate: null,
		baseFriendship: null,
		baseExp: null,
		growthRate: null,
	};
}

function toNumberSafe(str) {
	const num = Number(String(str).replace(/[^0-9.-]+/g, ""));
	return isNaN(num) ? null : num;
}

async function fetchHtml(url) {
	const response = await axios.get(url);
	return cheerio.load(response.data);
}

function sortById(arr) {
	return arr.sort((a, b) => a._id < b._id);
}

function sorting(arr) {
	console.log("Sorting...");
	const sortedArray = sortById(arr);
	console.log("Sorted.");
	return sortedArray;
}

async function testFunction() {
	const url = `https://pokemondb.net/pokedex/porygon`;
	const $ = await fetchHtml(url);
	const pokedexObj = createPokemonDataEntry(`Porygon`);

	const headings = getHeadings($);
	console.log("Headings found: ", headings.length);
	headings.each((index, element) => {
		const heading = getHeadingText($, element);

		console.log("Processing heading: ", heading);

		// process heading
		if (isSame(heading, `pokedexData`)) {
			const listEntries = getListEntries($, element);
			listEntries.each((index, element) => {
				const title = $(element).children("th").text();
				const data = $(element).children("td").text();
				processPokedexData(pokedexObj, title, data);
			});
		} else if (isSame(heading, `training`)) {
			console.log("Processing Training Data");
			const listEntries = getListEntries($, element);
			listEntries.each((index, element) => {
				const title = $(element).children("th").text();
				const data = $(element).children("td").text();
				// printTitleAndData(title, data);
				processTrainingData(pokedexObj, title, data);
			});
		} else {
			console.log(`Skipping heading: ${heading}`);
			return false;
		}

		// return false; // for testing only process first heading
	});

	fs.writeFileSync("./testFile.json", JSON.stringify(pokedexObj, null, 2));
	console.log(`All data saved to testFile.json`);
}

function processPokemonScrape($, pokedexObj) {
	const headings = getHeadings($);
	headings.each((index, element) => {
		const heading = getHeadingText($, element);

		console.log("Processing heading: ", heading);
		// process heading
		if (isSame(heading, `pokedexData`)) {
			const listEntries = getListEntries($, element);
			listEntries.each((index, element) => {
				const title = $(element).children("th").text();
				const data = $(element).children("td").text();
				pokedexObj = processPokedexData(pokedexObj, title, data);
			});
		}

		return false; // for testing only process first heading
	});
	fs.writeFileSync("./testFile.json", JSON.stringify(pokedexObj, null, 2));
	console.log(`All data saved to testFile.json`);
}

async function scrapeOnePokemon(pokemonName) {
	const url = `https://pokemondb.net/pokedex/${pokemonName}`;
	const $ = await fetchHtml(url);
	const pokedexObj = createBasePokedexObject(pokemonName);

	processPokemonScrape($, pokedexObj);

	return pokedexObj; // Placeholder for actual scraping logic
}

async function scrapeAll(outFilePath) {
	const results = [];
	for (const name of pokemonDatabaseURLNames) {
		try {
			const cleanedName = name.toLowerCase();
			console.log(`Scraping data for ${cleanedName}...`);
			const data = await scrapeOnePokemon(cleanedName);
			results.push(data);
			console.log(`Finished scraping data for ${cleanedName}.`);
		} catch (error) {
			console.error(`Error scraping data for ${name}:`, error.getMessage());
		}
	}
	const sortedResults = sorting(results);
	fs.writeFileSync(outFilePath, JSON.stringify(sortedResults, null, 2));
	console.log(`All data saved to ${outFilePath}`);
}

function formatHeading(heading) {
	switch (heading) {
		case "Pokédex entries":
			return "pokedexEntries";
		case "Pokédex data":
			return "pokedexData";
		case "Training":
			return "training";
		case "Breeding":
			return "breeding";
		case "Where to find":
			return "whereToFind";
		case "Other languages":
			return "otherLanguages";
		case "Name origin":
			return "nameOrigin";
		case "Base Stats":
			return "baseStats";
		default:
			return null;
	}
}

// function addDataToPokemonObject(list, section) {
//   list.each((index, element) => {
//     const title = $(element).children("th").text();
//     const data = $(element).children("td").text();
//     updatePokemonObject(newPokedexObj, section, title, data);
//   });
// }

// function updatePokemonObject(obj, section, title, data) {
//   switch (title) {
//     case "Scarlet":
//       obj.pokedexEntries[section]["scarlet"] = data;
//       break;
//     case "Violet":
//       obj.pokedexEntries[section]["violet"] = data;
//       break;
//     default:
//       console.log(`You missed a case >>>>>>>>>>>>>> ${title}`);
//   }
// }

// const getPokedexEntries = (element) => {
//   const siblings = $(element).siblings("h3"); // if this comes back with nothing there is no h3 on the whole page
//   if ($(siblings).text() === "") {
//     newPokedexObj["pokedexEntries"] = {};
//     newPokedexObj.pokedexEntries[pokemon] = {};
//     const listEntries = $(element)
//       .next()
//       .children("table")
//       .children("tbody")
//       .children("tr");
//     addDataToPokemonObject(listEntries, pokemon);
//   } else {
//     newPokedexObj["pokedexEntries"] = {};
//     for (let index = 0; index < siblings.length; index++) {
//       const section = $(siblings[index]).text().toLowerCase();
//       newPokedexObj.pokedexEntries[section] = {};
//       const listEntries = $(siblings[index])
//         .next()
//         .children("table")
//         .children("tbody")
//         .children("tr");
//       addDataToPokemonObject(listEntries, section);
//     }
//   }
// };

function getHeadings($) {
	return $("h2");
}

function getHeadingText($, element) {
	const heading = $(element).text();
	return formatHeading(heading);
}

// function loopThroughHeadings(headings) {
//   headings.each((index, element) => {
//     const heading = getHeadingText(element);
//     // process heading
//   });
// }

// function getPokedexDataTable(element) {
//   return $(element).next("table");
// }

// function processHeading(heading, element) {
//   if (isSame(getHeadingText(heading), `pokedexData`)) {
//     getPokedexEntries(element);
//   }
// }

// function getNextTable(element) {
//   return $(element).next("table");
// }

function getListEntries($, element) {
	return $(element).next("table").children("tbody").children("tr");
}

// function loopThroughListEntries(listEntries, currentPokemonObj, newPokedexObj) {
//   listEntries.each((index, element) => {
//     const title = $(element).children("th").text();
//     const data = $(element).children("td").text();
//     // process title and data
//     console.log("Title: ", title, "Data: ", data);
//   });
// }

// function getPokedexData(element, pokemonObj) {
//   const listEntries = getListEntries(element);
//   loopThroughListEntries(listEntries, currentPokemonObj, newPokedexObj);
// }

/**
 *  Pokedex data
 *
 *  National number
 *  Type
 *  Species
 *  Height
 *  Weight
 *  Abilities
 *  Local No.
 *
 */

function processPokedexData(pokemonObj, title, data) {
	if (title === `National №`) {
		// process national number
		pokemonObj._id = toNumberSafe(data);
	} else if (title === `Type`) {
		//  process type
		addTypes(data, pokemonObj);
	} else if (title === `Species`) {
		// process species
		pokemonObj.species = data;
	} else if (title === `Height`) {
		//  process height
		pokemonObj.height = cleanUpHeightWeight(data);
	} else if (title === `Weight`) {
		// process weight
		pokemonObj.weight = cleanUpHeightWeight(data);
	} else if (title === `Abilities`) {
		// process abilities
		pokemonObj.abilities = parseAbilities(data);
	} else if (title === `Local №`) {
		// process local number
	} else {
		//
		console.log(`You missed a case >>>>>>>>>>>>>> ${title}`);
	}
	return pokemonObj;
}

function cleanUpType(str) {
	return str.replace(/[\n\r\t]/g, "");
}

function addTypes(data, pokemonObj) {
	const types = data.split(" ");
	for (i = 0; i < types.length; i++) {
		pokemonObj.type[`${typeKey(i)}`] = cleanUpType(types[i]);
	}
}

function cleanUpHeightWeight(str) {
	return str
		.replace(/\s+/g, " ") // Replace multiple/irregular whitespace with a single space
		.replace(/[\u2018\u2019\u201A\u201B]/g, "'") // Replace curly single quotes with straight single quote
		.replace(/[\u201C\u201D\u201E\u201F]/g, '"') // Replace curly double quotes with straight double quote
		.replace(/\u00A0/g, " ") // Replace non-breaking spaces with regular spaces
		.replace(/′/g, "'") // Replace prime symbol with straight single quote
		.replace(/″/g, '"') // Replace double prime symbol with straight double quote
		.trim(); // Remove leading/trailing whitespace
}

function typeKey(i) {
	switch (i) {
		case 0:
			return "one";
		case 1:
			return "two";
	}
}

function cleanUpAbility(data) {
	return [
		...data.matchAll(/\d+\.\s*([A-Z][a-zA-Z]*(?:\s+[A-Z][a-zA-Z]*)*)/g),
	].map((match) => splitCamelCase(match[1]).trim());
}

function abilityKey(i) {
	switch (i) {
		case 1:
			return "one";
		case 2:
			return "two";
		case 3:
			return "hidden";
	}
}

// DEMO
function parseAbilities(str) {
	const abilities = {};
	const numberLabels = ["one", "two", "three", "four", "five"]; // Expandable if needed

	// Extract numbered abilities (1. Something)
	const numberMatches = [...str.matchAll(/(\d+\.)\s*([A-Za-z]+)/g)];
	// console.log("Number Matches: ", numberMatches);

	numberMatches.forEach((m, i) => {
		// console.log("Match: ", m);
		// console.log("Index: ", i);
		// console.log("Label: ", numberLabels[i]);
		const raw = m[2];
		const splitWords = splitCamelCase(raw).split(" ");
		// console.log("Split Words: ", splitWords);
		abilities[numberLabels[i]] = splitWords[0]; // First word only (e.g., "Download")
		// console.log("Added ability: ", abilities[numberLabels[i]]);
	});

	// Check for hidden ability
	if (str.includes("(hidden ability)")) {
		const lastMatch = numberMatches[numberMatches.length - 1];
		const endOfLast = lastMatch.index + lastMatch[0].length;
		const remainder = str.slice(endOfLast);

		const hiddenMatch = remainder.match(/[A-Z][a-z]+/g); // Find capitalized words
		if (hiddenMatch && hiddenMatch.length > 0) {
			const hiddenWord = hiddenMatch[hiddenMatch.length - 1]; // Last word is hidden
			abilities.hidden = splitCamelCase(hiddenWord).trim();
		}
	}

	return abilities;
}

// Splits camelCase or PascalCase into space-separated words
function splitCamelCase(str) {
	return str.replace(/([a-z])([A-Z])/g, "$1 $2");
}

/**
 * Training
 *
 * EV yield
 * Catch rate
 * Base Friendship
 * Base exp.
 * Growth rate
 */

function processTrainingData(pokemonObj, title, data) {
	switch (title) {
		case "EV yield":
			pokemonObj.evs = determineEvValues(data);
			break;
		case "Catch rate":
			pokemonObj.catchRate = cleanUpCatchRate(data);
			break;
		case "Base Friendship":
			pokemonObj.baseFriendship = cleanUpBaseFriendship(data);
			break;
		case "Base Exp.":
			pokemonObj.baseExp = cleanUpBaseExp(data);
			break;
		case "Growth Rate":
			pokemonObj.growthRate = data;
			break;
		default:
			console.log(`You missed a case >>>>>>>>>>>>>> ${title}`);
	}
}

function cleanUpCatchRate(data) {
	return parseInt(data.match(/\d+/)[0], 10);
}

function cleanUpBaseFriendship(data) {
	let newData = data.replace(/[^0-9]/g, "");
	return Number(newData);
}

function cleanUpBaseExp(data) {
	let newData = data.replace(/[^0-9]/g, "");
	return Number(newData);
}

function splitEvData(data) {
	return data.split(", ");
}

function getOnlyNumbers(str) {
	return str.replace(/[^0-9]/g, "");
}

function getOnlyLetters(str) {
	return str.replace(/[^a-zA-Z]/g, "");
}

function determineEvValues(data) {
	const evValues = {};
	const evs = splitEvData(data);

	for (let i = 0; i < evs.length; i++) {
		const ev = evs[i];
		// process each ev
		const evValue = getOnlyNumbers(ev);
		const evStat = getOnlyLetters(ev).toLowerCase();
		const evKey = parseEvString(evStat);
		evValues[evKey] = Number(evValue);
	}
	return evValues;
}

function parseEvString(evString) {
	if (evString === "hp") {
		return "hp";
	} else if (evString === "attack") {
		return "atk";
	} else if (evString === "defense") {
		return "def";
	} else if (evString === "spatk") {
		return "spatk";
	} else if (evString === "spdef") {
		return "spdef";
	} else if (evString === "speed") {
		return "spd";
	} else {
		console.log("Unknown EV string: ", evString);
		return evString;
	}
}

/**
 * Scrape one pokemon data from pokemondb.net
 *
 * 1. Get the html from the page
 * 2. Load the html into cheerio
 * 3. Create a new pokedex object
 * 4. add data to the pokedex object
 * 5. return the pokedex object
 *
 * @param {string} pokemon
 */

/**
 * Create a function that has every paramter of something you can get on a pokedex page from DB
 * then when you want to gather info and can put in true or false for what you want.
 */
// let index = 0;
// const scrapePokemonData = async () => {
/**
 * For loop through all pokemon in the dex
 * For each pokemon get the following data
 *
 *  Pokedex entries
 *  Pokedex data
 * Training
 * Breeding
 * Where to find
 * Other languages
 * Name origin
 * Base Stats
 *
 */

// if (index > dex.scviDex.length - 1) {
// if (index > 2) {

// sort the array by _id first
// sort(a , b) a < b  sort a before b
// sort(a, b) a > b sort a after a
// console.log("Sorting...");
// const sortedNewPokemonArray = newPokemonArray.sort((a, b) => {
//   if (a._id < b._id) {
//     return -1;
//   }
// });
// console.log("Sorted");

//   const sortedNewPokemonArray = sorting(newPokemonArray);

//   const data_array = JSON.stringify(sortedNewPokemonArray, null, 2); // this makes it pretty
//   // write JSON string to a file
//   fs.writeFile(
//     "../../jsons/08-jsons/08-pokedex.json",
//     data_array,
//     (error) => {
//       if (error) {
//         console.log(error);
//       }
//       console.log("JSON data is saved.");
//     }
//   );
//   return;
// } else {
//   const pokemon = dex.scviDex[index].toLowerCase();

//   let URL = `https://pokemondb.net/pokedex/${pokemon}`;

// const newPokedexObj = {
//     name: {
//       english: dex.scviDex[index],
//     },
//     pokedexNumber: {},
//     eggGroups: [],
//     nameOrigin: {},
//   },

// const newPokedexObj = createBasePokedexObject(
//   dex.scviDex[index].toLowerCase
// );

// const currentPokemonObj = false;

// axios(URL)
//   .then((response) => {
//     const html = response.data;
//     const $ = cheerio.load(html);

//     const createNewPokedexObject = (obj, section, title, data) => {
//       switch (title) {
//         case "Scarlet":
//           obj.pokedexEntries[section]["scarlet"] = data;
//           break;
//         case "Violet":
//           obj.pokedexEntries[section]["violet"] = data;
//           break;
//         default:
//           console.log(`You missed a case >>>>>>>>>>>>>> ${title}`);
//       }
//     };

/**
 * This function takes the html table given to use and add it into a new object
 *
 * @param {<table>} list
 * @param {obj_name} section
 */
// const addDataToPokemonObject = (list, section) => {
//   list.each((index, element) => {
//     const title = $(element).children("th").text();
//     const data = $(element).children("td").text();
//     createNewPokedexObject(newPokedexObj, section, title, data);
//   });
// };

/**
 *
 * @param {<>} element
 */
//       const getPokedexEntries = (element) => {
//         const siblings = $(element).siblings("h3"); // if this comes back with nothing there is no h3 on the whole page
//         if ($(siblings).text() === "") {
//           newPokedexObj["pokedexEntries"] = {};
//           newPokedexObj.pokedexEntries[pokemon] = {};
//           const listEntries = $(element)
//             .next()
//             .children("table")
//             .children("tbody")
//             .children("tr");
//           addDataToPokemonObject(listEntries, pokemon);
//         } else {
//           newPokedexObj["pokedexEntries"] = {};
//           for (let index = 0; index < siblings.length; index++) {
//             const section = $(siblings[index]).text().toLowerCase();
//             newPokedexObj.pokedexEntries[section] = {};
//             const listEntries = $(siblings[index])
//               .next()
//               .children("table")
//               .children("tbody")
//               .children("tr");
//             addDataToPokemonObject(listEntries, section);
//           }
//         }
//       };

//       const headings = $("h2");
//       headings.each((index, element) => {
//         const heading = $(element).text();
//         /**
//          * Pokedex entries
//          *
//          *  Potientally all games
//          *
//          */
//         if (heading === "Pok\u00E9dex entries") {
//           getPokedexEntries(element);
//         }

//         /**

//         if (isSame(formatHeading(heading), `Pokédex data`)) {
//         }

//         /**
//          * Training section
//          *
//          *  EV yield
//          *  Catch rate
//          *  Base friendhip
//          *  Base exp.
//          *  Growth rate
//          */
// if (heading === `Training`) {
//   const listEntries = $(element)
//     .next("table")
//     .children("tbody")
//     .children("tr");
//   listEntries.each((index, element) => {
//     const title = $(element).children("th").text();
//     const data = $(element).children("td").text();
//     if (
//       data === "\u2014" ||
//       data === "\u000A\u2014\u000A" ||
//       data === "\u000A\u2014 "
//     ) {
//     } else if (title === "Growth Rate") {
//       if (currentPokemonObj) {
//         currentPokemonObj.growthRate = data;
//       } else {
//         newPokedexObj.growthRate = data;
//       }
//     } else if (title === "Base Friendship") {
//       let newData = data.replace(/[^0-9]/g, "");
//       if (currentPokemonObj) {
//         currentPokemonObj.baseFriendship = Number(newData);
//       } else {
//         newPokedexObj.baseFriendship = Number(newData);
//       }
//     } else if (title === "Catch rate") {
//       let newData = data.slice(0, 4);
//       newData = newData.replace(/[^0-9]/g, "");
//       if (currentPokemonObj) {
//         currentPokemonObj.catchRate = Number(newData);
//       } else {
//         newPokedexObj.catchRate = Number(newData);
//       }
//     }
//   });
// }

//         /**
//          * Breeding section
//          *
//          *  Egg groups
//          *  Gender
//          *  Egg cycles
//          */
//         // if (heading === `Breeding`) {
//         //   const listEntries = $(element)
//         //     .next("table")
//         //     .children("tbody")
//         //     .children("tr");
//         //   listEntries.each((index, element) => {
//         //     const title = $(element).children("th").text();
//         //     const data = $(element).children("td").text();
//         //     if (title === "Egg groups" && index >= 809) {
//         //       // start at 809 grookey
//         //       if (data === "Undiscovered") {
//         //         if (currentPokemonObj) {
//         //           currentPokemonObj.genderRatio = "Genderless";
//         //         } else {
//         //           newPokedexObj.genderRatio = "Genderless";
//         //         }
//         //       } else {
//         //         if (data.includes(",")) {
//         //           let newData = data.split(",");
//         //           if (newData[0]) {
//         //             newData[0] = newData[0].replace(/[^a-zA-z]/g, "");
//         //             if (currentPokemonObj) {
//         //               currentPokemonObj.eggGroups.push(newData[0]);
//         //             } else {
//         //               newPokedexObj.eggGroups.push(newData[0]);
//         //             }
//         //           }
//         //           if (newData[1]) {
//         //             newData[1] = newData[1].replace(/[^a-zA-z]/g, "");
//         //             if (currentPokemonObj) {
//         //               currentPokemonObj.eggGroups.push(newData[1]);
//         //             } else {
//         //               newPokedexObj.eggGroups.push(newData[1]);
//         //             }
//         //           }
//         //         } else {
//         //           if (currentPokemonObj) {
//         //             currentPokemonObj.eggGroups.push(data);
//         //           } else {
//         //             newPokedexObj.eggGroups.push(data);
//         //           }
//         //         }
//         //       }
//         //     }
//         //     if (title === "Gender") {
//         //       if (data === "Genderless") {
//         //         if (currentPokemonObj) {
//         //           currentPokemonObj.genderRatio = "Genderless";
//         //         } else {
//         //           newPokedexObj.genderRatio = "Genderless";
//         //         }
//         //       } else if (data !== "—") {
//         //         let newData = data.split(",");
//         //         newData[0] = newData[0].replace(/[^0-9.]/g, "");
//         //         newData[1] = newData[1].replace(/[^0-9.]/g, "");
//         //         newData = newData.join(":");
//         //         if (currentPokemonObj) {
//         //           currentPokemonObj.genderRatio = newData;
//         //         } else {
//         //           newPokedexObj.genderRatio = newData;
//         //         }
//         //       }
//         //     }
//         //     if (title === "Egg cycles" && data !== "—") {
//         //       let newData = data.slice(0, 3);
//         //       newData = newData.replace(/[^0-9]/g, "");
//         //       if (currentPokemonObj) {
//         //         currentPokemonObj.eggCycles = Number(newData);
//         //       } else {
//         //         newPokedexObj.eggCycles = Number(newData);
//         //       }
//         //     }
//         //   });
//         // }

//         // if (heading.toLowerCase() === `where to find ${pokemon}`) {
//         //   const listEntries = $(element)
//         //     .next("div")
//         //     .children("table")
//         //     .children("tbody")
//         //     .children("tr");
//         //   listEntries.each((index, element) => {
//         //     const title = $(element).children("th").text();
//         //     const data = $(element).children("td").text();
//         //     if (title === "ScarletViolet") {
//         //       if (currentPokemonObj) {
//         //         currentPokemonObj.whereToFind = {
//         //           ...currentPokemonObj.whereToFind,
//         //           scarlet: data,
//         //           violet: data,
//         //         };
//         //         currentPokemonObj.whereToFind;
//         //       } else {
//         //         newPokedexObj.whereToFind = {
//         //           scarlet: data,
//         //           violet: data,
//         //         };
//         //       }
//         //     }
//         //   });
//         // }

//         // if (heading === `Other languages`) {
//         //   const listEntries = $(element)
//         //     .next("div")
//         //     .children("table")
//         //     .children("tbody")
//         //     .children("tr");
//         //   listEntries.each((index, element) => {
//         //     const title = $(element).children("th").text();
//         //     const data = $(element).children("td").text();
//         //     if (title === "German") {
//         //       if (currentPokemonObj) {
//         //         currentPokemonObj.name.german = data;
//         //       } else {
//         //         newPokedexObj.name.german = data;
//         //       }
//         //     }
//         //   });
//         // }

//         // if (heading === `Name origin`) {
//         //   const nameOrigin = $(element).next("dl");
//         //   if (nameOrigin) {
//         //     const desc = $(nameOrigin).children("dt");
//         //     const meanings = $(nameOrigin).children("dd");
//         //     const descOne = $(desc[0]).text();
//         //     const descTwo = $(desc[1]).text();
//         //     const descThree = $(desc[2]).text(); // might not exsist
//         //     const meaningOne = $(meanings[0]).text();
//         //     const meaningTwo = $(meanings[1]).text();
//         //     const meaningThree = $(meanings[2]).text();
//         //     if (descOne) {
//         //       if (currentPokemonObj) {
//         //         currentPokemonObj.nameOrigin[descOne] = meaningOne;
//         //       } else {
//         //         newPokedexObj.nameOrigin[descOne] = meaningOne;
//         //       }
//         //     }
//         //     if (descTwo) {
//         //       if (currentPokemonObj) {
//         //         currentPokemonObj.nameOrigin[descTwo] = meaningTwo;
//         //       } else {
//         //         newPokedexObj.nameOrigin[descTwo] = meaningTwo;
//         //       }
//         //     }
//         //     if (descThree) {
//         //       if (currentPokemonObj) {
//         //         currentPokemonObj.nameOrigin[descThree] = meaningThree;
//         //       } else {
//         //         newPokedexObj.nameOrigin[descThree] = meaningThree;
//         //       }
//         //     }
//         //   }
//         // }

//         // if (heading === `Base Stats`) {
//         //   const listEntries = $(element)
//         //     .next("table")
//         //     .children("tbody")
//         //     .children("tr");
//         //   listEntries.each((index, element) => {
//         //     const title = $(element).children("th").text();
//         //     const data = $(element).children("td").text();
//         //   });
//         // }
//       });
//       newPokemonArray.push(newPokedexObj);
//       index++;
//       console.log(`Done ${pokemon}`);
//       scrapePokemonData();
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }
// };

// scrapePokemonData();

function printTitleAndData(title, data) {
	console.log("Title: ", title, "\nData: ", data);
}

testFunction();

module.exports = {
	formatHeading,
	parseAbilities,
};
