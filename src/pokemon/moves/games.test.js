// const DEX_LENGTHS = require("../DEX_LENGTHS.js");
import DEX_LENGTHS from "../DEX_LENGTHS.js";
import legendsZaMoves from "./games/22-legends-za-moves.json" with { type: "json" };

describe("Games", () => {
	test("Legends ZA moves matches the length of the dex", () => {
		// const legendsZaMoves = require("./games/22-legends-za-moves.json");
		const expectedLength = DEX_LENGTHS.POKEMON_DEX_LEGEND_ZA + DEX_LENGTHS.POKEMON_DEX_MEGA_DIMENSION;
		const actualLength = legendsZaMoves.length;
		expect(actualLength).toBe(expectedLength);
	});
});
