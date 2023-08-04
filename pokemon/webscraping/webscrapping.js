const fs = require("fs");
const axios = require("axios");
const cheerio = require("cheerio");

const pokemonNames = require("../pokemon-data/pokemon-names.json");

const legendsArceusMovesJSON = [];
let i = 0;

const scrapeLegendsArceusMoves = async () => {

  if (i > pokemonNames.length - 1) {
    // if (i > 904) {

    // Create saveData in json format
    const saveData = JSON.stringify(legendsArceusMovesJSON, null, 2); // this makes it pretty
    // Write JSON string to a file
    fs.writeFile("./legends-arceus-moves.json", saveData, (error) => {
      error ? console.error(error) : null;
      console.log("JSON data is saved.");
    });
  } else {
    const legendsArceusMoves = {};
    const pokemon = pokemonNames[i];
    let hasMoves = true;

    axios(`https://pokemondb.net/pokedex/${pokemon}/moves/8`)
      .then((response) => {
        const html = response.data;
        const $ = cheerio.load(html);

        const moves = $("#tab-moves-20").find("h3");
        if (moves.length > 0) {
          moves.each((index, element) => {
            const moveType = $(element).text();

            if (moveType === "Moves learnt by level up") {
              legendsArceusMoves["level-up"] = [];
                // console.log("Level up moves >");

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
                legendsArceusMoves["level-up"].push(lvlUpMove);
              });
            } else if (moveType === "Move Tutor moves") {
              legendsArceusMoves["tutor"] = [];
              //   console.log("Move Tutor moves >");
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
                    legendsArceusMoves["tutor"].push($(element).text());
                  }
                });
              });
            }
          });
        }
        if (hasMoves){
            legendsArceusMovesJSON.push({
                id: i + 1,
                name: pokemon,
                ["legends-arceus"]: legendsArceusMoves,
              });
              console.log(`Done ${i + 1} - ${pokemon}`);
        } else {
            console.log(`Skipped ${i + 1} - ${pokemon}`);
        }


        i++;
        scrapeLegendsArceusMoves();
      })
      .catch((error) => {
        // console.log(error);
        console.log(`Pokemon: ${i + 1} - ${pokemon} does not contain Legends Arceus Data`);
        i++;
        scrapeLegendsArceusMoves();
      });
  }
};

scrapeLegendsArceusMoves();
