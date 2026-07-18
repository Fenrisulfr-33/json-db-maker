import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import axios from "axios";
import cheerio from "cheerio";
import readJson from "../../genericFunctions/files/readJson.js";
import { gamesToScrape } from './gamesToScrape.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pokemonNames = readJson("./pokemonDatabaseURLNames.json", import.meta.url);

// Let's Go Pikachu & Eevee expose a different (smaller, game-specific) move
// pool than every other game, so pokemondb renders bespoke lists for them
// instead of the usual tutor/special tables.
const LETS_GO_TAB = "#tab-moves-17";

const LETS_GO_TUTOR_MOVES = {
	pikachu: ["Floaty Fall", "Splishy Splash", "Zippy Zap"],
	eevee: [
		"Baddy Bad",
		"Bouncy Bubble",
		"Buzzy Buzz",
		"Freezy Frost",
		"Glitzy Glow",
		"Sappy Seed",
		"Sizzly Slide",
		"Sparkly Swirl",
	],
};

const LETS_GO_SPECIAL_MOVES = {
	pikachu: ["Pika Papow"],
	eevee: ["Veevee Volley"],
};

/**
 * Each h3 heading on a pokemondb moves page becomes one of these keys.
 * A handler receives the parsed row list plus enough context to decide
 * whether the section is present at all, and returns the (possibly
 * unchanged) moves object.
 */
const MOVE_TYPE_HANDLERS = {
	"Moves learnt by level up": (ctx) => {
		ctx.returnMovesObject["level-up"] = [];
		if ($textAfter(ctx).includes("does not")) {
			ctx.hasMoves.value = false;
		}
		return getData(ctx.$, resolveMoveList(ctx), "lvl", ctx.returnMovesObject);
	},
	"Move Tutor moves": (ctx) => {
		const letsGoMoves = ctx.tab === LETS_GO_TAB && LETS_GO_TUTOR_MOVES[ctx.pokemon];
		if (letsGoMoves) {
			ctx.returnMovesObject["tutor"] = letsGoMoves;
			return ctx.returnMovesObject;
		}
		ctx.returnMovesObject["tutor"] = [];
		return getData(ctx.$, resolveMoveList(ctx), "basic", ctx.returnMovesObject, "tutor");
	},
	"Moves learnt on evolution": (ctx) => {
		ctx.returnMovesObject["evolution"] = [];
		return getData(ctx.$, resolveMoveList(ctx), "basic", ctx.returnMovesObject, "evolution");
	},
	"Egg moves": (ctx) => {
		if ($textAfter(ctx).includes("does not")) return ctx.returnMovesObject;
		ctx.returnMovesObject["egg"] = [];
		return getData(ctx.$, resolveMoveList(ctx), "basic", ctx.returnMovesObject, "egg");
	},
	"Moves learnt by TM": (ctx) => {
		if ($textAfter(ctx).includes("cannot")) return ctx.returnMovesObject;
		ctx.returnMovesObject["technical-machine"] = [];
		return getData(ctx.$, resolveMoveList(ctx), "tm", ctx.returnMovesObject);
	},
	"Moves learnt by HM": (ctx) => {
		if ($textAfter(ctx).includes("does not")) return ctx.returnMovesObject;
		ctx.returnMovesObject["hidden-machine"] = [];
		return getData(ctx.$, resolveMoveList(ctx), "hm", ctx.returnMovesObject);
	},
	"Moves learnt by TR": (ctx) => {
		if ($textAfter(ctx).includes("cannot")) return ctx.returnMovesObject;
		ctx.returnMovesObject["technical-record"] = [];
		return getData(ctx.$, resolveMoveList(ctx), "record", ctx.returnMovesObject);
	},
	"Special moves": (ctx) => {
		const letsGoMoves = ctx.tab === LETS_GO_TAB && LETS_GO_SPECIAL_MOVES[ctx.pokemon];
		if (letsGoMoves) {
			ctx.returnMovesObject["special-moves"] = letsGoMoves;
			return ctx.returnMovesObject;
		}
		ctx.returnMovesObject["special"] = [];
		return getData(ctx.$, resolveMoveList(ctx), "method", ctx.returnMovesObject, "special");
	},
	"Pre-evolution moves": (ctx) => {
		ctx.returnMovesObject["pre-evolution"] = [];
		return getData(ctx.$, resolveMoveList(ctx), "method", ctx.returnMovesObject, "pre-evolution");
	},
	"Transfer-only moves": (ctx) => {
		ctx.returnMovesObject["transfer-only"] = [];
		return getData(ctx.$, resolveMoveList(ctx), "method", ctx.returnMovesObject, "transfer-only");
	},
	"Moves learnt by reminder": (ctx) => {
		ctx.returnMovesObject["reminder"] = [];
		return getData(ctx.$, resolveMoveList(ctx), "basic", ctx.returnMovesObject, "reminder");
	},
};

// Text of the paragraph right after a heading, used to detect the
// "This Pokémon does not/cannot learn any ___ moves" notices.
const $textAfter = (ctx) => ctx.$(ctx.element).next().text();

// Some sections render as sub-tabs (multiple game versions sharing one
// heading); pick whichever row list is actually populated.
const resolveMoveList = (ctx) => (getTabCheck(ctx.$, ctx.element) ? ctx.firstTab : ctx.moves);

const trailingDashes = (dexNo) => "-".repeat(Math.max(5 - String(dexNo).length, 1));
const logDone = (dexNo, pokemon) => console.log(`---Done: ${dexNo} ${trailingDashes(dexNo)} ${pokemon}`);
const logSkipped = (dexNo, pokemon) => console.log(`Skipped: ${dexNo} ${trailingDashes(dexNo)} ${pokemon}`);
const logNoPageData = (dexNo, pokemon) =>
	console.log(`-------- ${dexNo} ${trailingDashes(dexNo)} ${pokemon} - Does not have page data.`);

const scrapePokemonMoves = async (tab, gameName, generation, startingPoint, pokedexLength) => {
	const errors = {};
	const pokemonMoves = [];

	for (let i = startingPoint; i < pokedexLength; i++) {
		const pokemon = pokemonNames[i];
		const dexNo = i + 1;

		try {
			const response = await axios(`https://pokemondb.net/pokedex/${pokemon}/moves/${generation}`);
			const $ = cheerio.load(response.data);
			const moveHeadings = $(tab).find("h3");
			const hasMoves = { value: true };
			let returnMovesObject = {};

			moveHeadings.each((index, element) => {
				const moveType = $(element).text();

				const firstTab = $(element)
					.next()
					.next()
					.children("div")
					.next()
					.children("div")
					.children("div")
					.children("table:first")
					.children("tbody")
					.children("tr");

				const moves = $(element).next().next().children("table").children("tbody").children("tr");

				const handler = MOVE_TYPE_HANDLERS[moveType];
				if (!handler) {
					errors[moveType] = "Move type not found.";
					return;
				}

				returnMovesObject = handler({ $, element, firstTab, moves, tab, pokemon, returnMovesObject, hasMoves });
			});

			if (hasMoves.value) {
				pokemonMoves.push({ id: dexNo, name: pokemon, [gameName]: returnMovesObject });
				logDone(dexNo, pokemon);
			} else {
				logSkipped(dexNo, pokemon);
			}
		} catch (error) {
			logNoPageData(dexNo, pokemon);
		}
	}

	console.log("Errors", errors);
	const saveData = JSON.stringify(pokemonMoves, null, 2);
	fs.writeFile(path.join(__dirname, `${gameName}-moves.json`), saveData, (error) => {
		if (error) {
			console.error(error);
			return;
		}
		console.log("JSON data is saved.");
	});
};

const main = async (games) => {
	for (const game of games) {
		await scrapePokemonMoves(game.tabName, game.gameName, game.generation, game.startingPoint, game.pokedexLength);
	}
};

const getTabCheck = ($, element) => {
	const tabCheck = $(element).next().next().children("table").children("tbody").children("tr").length;
	const returnBoolean = tabCheck === 0 ? true : false;
	// console.log('isTabs ? ', returnBoolean);
	return returnBoolean;
};

const getData = ($, list, tableType, returnObj, objKey) => {
	list.each((index, element) => {
		const rowData = $(element).children("td");

		if (tableType === "lvl") {
			const lvlUpMove = {};
			rowData.each((index, element) => {
				if (index === 0) {
					lvlUpMove.lvl = $(element).text();
				} else if (index === 1) {
					lvlUpMove.name = $(element).text();
				}
			});
			returnObj["level-up"].push(lvlUpMove);
		} else if (tableType === "tm") {
			const tmMove = {};
			rowData.each((index, element) => {
				if (index === 0) {
					tmMove.tm = parseInt($(element).text());
				} else if (index === 1) {
					tmMove.name = $(element).text();
				}
			});
			returnObj["technical-machine"].push(tmMove);
		} else if (tableType === "hm") {
			const hmMove = {};
			rowData.each((index, element) => {
				if (index === 0) {
					hmMove.hm = parseInt($(element).text());
				} else if (index === 1) {
					hmMove.name = $(element).text();
				}
			});
			returnObj["hidden-machine"].push(hmMove);
		} else if (tableType === "record") {
			const trMove = {};
			rowData.each((index, element) => {
				if (index === 0) {
					trMove.tr = parseInt($(element).text());
				} else if (index === 1) {
					trMove.name = $(element).text();
				}
			});
			returnObj["technical-record"].push(trMove);
		} else if (tableType === "method") {
			const methodMove = {};
			rowData.each((index, element) => {
				if (index === 0) {
					methodMove.name = $(element).text();
				} else if (index === 5) {
					methodMove.method = $(element).text();
				}
			});
			returnObj[objKey].push(methodMove);
		} else if (tableType === "basic") {
			rowData.each((index, element) => {
				if (index === 0) {
					returnObj[objKey].push($(element).text());
				}
			});
		}
	});
	return returnObj;
};

main(gamesToScrape);