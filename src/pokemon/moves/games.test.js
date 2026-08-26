// const DEX_LENGTHS = require("../DEX_LENGTHS.js");
import DEX_LENGTHS from "../constants/DEX_LENGTHS.js";
import redBlueMoves from "./games/01-red-blue.json" with { type: "json" };
import legendsZaMoves from "./games/22-legends-za.json" with { type: "json" };

describe("Games", () => {
	test("Red & Blue moves matches the length of the dex", () => {
		const expectedLength = DEX_LENGTHS.POKEMON_DEX_RED_BLUE;
		const actualLength = redBlueMoves.length;
		expect(actualLength).toBe(expectedLength);
	});
	test("Legends ZA moves matches the length of the dex", () => {
		// const legendsZaMoves = require("./games/22-legends-za-moves.json");
		const expectedLength = DEX_LENGTHS.POKEMON_DEX_LEGEND_ZA + DEX_LENGTHS.POKEMON_DEX_MEGA_DIMENSION;
		const actualLength = legendsZaMoves.length;
		expect(actualLength).toBe(expectedLength);
	});
});
