const fs = require("fs");
const axios = require("axios");
const cheerio = require("cheerio");
const pokemonNames = require("../pokemon-data/pokemon-names-man-edit.json");

const pokemonMovesJSON = [];
const errors = {};
let i = 0;

const scrapePokemonMoves = async (tab, gameSave, fileSave) => {
  if (i > pokemonNames.length - 1) {
    // if (i > 904) {
    console.log("Errors", errors);
    // Create saveData in json format
    const saveData = JSON.stringify(pokemonMovesJSON, null, 2); // this makes it pretty
    // Write JSON string to a file
    fs.writeFile(fileSave, saveData, (error) => {
      error ? console.error(error) : null;
      console.log("JSON data is saved.");
    });
  } else {
    const returnMovesObject = {};
    const pokemon = pokemonNames[i];
    let hasMoves = true;

    axios(`https://pokemondb.net/pokedex/${pokemon}/moves/8`)
      .then((response) => {
        const html = response.data;
        const $ = cheerio.load(html);

        /**
         * For Gen 8 the tabs are as follows
         *
         * tab-moves-20 === Legends Arceus
         * tab-moves-19 === BDSP
         * tab-moves-18 === Sword & Shield
         */
        const moves = $(tab).find("h3");

        if (moves.length > 0) {
          moves.each((index, element) => {
            const moveType = $(element).text();

            if (moveType === "Moves learnt by level up") {
              returnMovesObject["level-up"] = [];

              const hasMovesCheck = $(element).next();
              if (hasMovesCheck.text().includes("does not")) {
                hasMoves = false;
              }

              const lvlMoves = $(element)
                .next()
                .next()
                .children("table")
                .children("tbody")
                .children("tr");

              lvlMoves.each((index, element) => {
                const rowData = $(element).children("td");
                const lvlUpMove = {};
                rowData.each((index, element) => {
                  if (index === 0) {
                    lvlUpMove.lvl = $(element).text();
                  } else if (index === 1) {
                    lvlUpMove.name = $(element).text();
                  }
                });
                returnMovesObject["level-up"].push(lvlUpMove);
              });
            } else if (moveType === "Move Tutor moves") {
              returnMovesObject["tutor"] = [];

              const tutorMoves = $(element)
                .next()
                .next()
                .children("table")
                .children("tbody")
                .children("tr");

              tutorMoves.each((index, element) => {
                const rowData = $(element).children("td");
                rowData.each((index, element) => {
                  if (index === 0) {
                    returnMovesObject["tutor"].push($(element).text());
                  }
                });
              });
            } else if (moveType === "Moves learnt on evolution") {
              returnMovesObject["evolution"] = [];

              const evoMoves = $(element)
                .next()
                .next()
                .children("table")
                .children("tbody")
                .children("tr");

              evoMoves.each((index, element) => {
                const rowData = $(element).children("td");
                rowData.each((index, element) => {
                  if (index === 0) {
                    returnMovesObject["evolution"].push($(element).text());
                  }
                });
              });
            } else if (moveType === "Egg moves") {
              returnMovesObject["egg"] = [];

              const eggMoves = $(element)
                .next()
                .next()
                .children("table")
                .children("tbody")
                .children("tr");

              eggMoves.each((index, element) => {
                const rowData = $(element).children("td");
                rowData.each((index, element) => {
                  if (index === 0) {
                    returnMovesObject["egg"].push($(element).text());
                  }
                });
              });
            } else if (moveType === "Moves learnt by TM") {
              returnMovesObject["technical-machine"] = [];

              const tmMoves = $(element)
                .next()
                .next()
                .children("table")
                .children("tbody")
                .children("tr");

              tmMoves.each((index, element) => {
                const rowData = $(element).children("td");
                const tmMove = {};
                rowData.each((index, element) => {
                  if (index === 0) {
                    tmMove.tm = parseInt($(element).text());
                  } else if (index === 1) {
                    tmMove.name = $(element).text();
                  }
                });

                returnMovesObject["technical-machine"].push(tmMove);
              });
            } else {
              errors[moveType] = "Move type not found.";
            }
          });
        }

        if (hasMoves) {
          pokemonMovesJSON.push({
            id: i + 1,
            name: pokemon,
            [gameSave]: returnMovesObject,
          });
          console.log(`Done ${i + 1} - ${pokemon}`);
        } else {
          console.log(`Skipped ${i + 1} - ${pokemon}`);
        }

        i++;
        scrapePokemonMoves(tab, gameSave, fileSave);
      })
      .catch((error) => {
        // console.log(error);
        console.log(`Pokemon: ${i + 1} - ${pokemon} Does not have page data.`);
        i++;
        scrapePokemonMoves(tab, gameSave, fileSave);
      });
  }
};

// scrapePokemonMoves(
//   "#tab-moves-20",
//   "legends-arceus",
//   "./legends-arceus-moves.json"
// );
scrapePokemonMoves(
  "#tab-moves-19",
  "brilliant-diamond-shining-pearl",
  "./bdsp-moves.json"
);
// scrapePokemonMoves(
//   "#tab-moves-18",
//   "sword-shield",
//   "./sword-shield-moves.json"
// );

