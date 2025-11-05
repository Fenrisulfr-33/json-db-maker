const { parseAbilities } = require("./webScrapePokemonData");

const formatHeading = require("./webScrapePokemonData").formatHeading; // Import the function you want to test

describe("formatHeading function", () => {
  test("Expects Pokédex data to format to pokedexData", () => {
    expect(formatHeading("Pokédex data")).toBe("pokedexData");
  });

  test("Expects Pok\u00E9dex data to format to pokedexData", () => {
    expect(formatHeading("Pok\u00E9dex data")).toBe("pokedexData");
  });

  test("Expects abilities string to format to abilities", () => {
    const testString = "1. Trace2. DownloadAnalytic (hidden ability)";
    expect(parseAbilities(testString)).toBe({
      one: "Trace",
      two: "Download",
      hidden: "Analytic",
    });
  });
});
