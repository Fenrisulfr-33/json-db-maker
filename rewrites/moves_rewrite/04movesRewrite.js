const fs = require('fs');
const moves = require("../../jsons/04-jsons/04-moves.json");
const final = [];
let index = 0;

const fetcher = async () => {
    try {
        if (index > 899) { // current highest move available is 900, so 899
            const data_array = JSON.stringify(final, null, 2); // this makes it pretty
            fs.writeFile('../../jsons/05-jsons/05-moves.json', data_array, (error) => {
               error ? console.log(error) : console.log("JSON data is saved.");
            });
            return;
        }
        const movesArray = moves[index].name.english.replaceAll('-', ' ').split(" ");
        const joinArray = [];
        let finalWord = '';
        if (movesArray.length > 1){
            movesArray.forEach((move) => {
                const newName = move[0].toUpperCase() + move.substring(1);
                joinArray.push(newName);
            });
            finalWord = joinArray.join(" ");
        } else {
            finalWord = moves[index].name.english;
        }

        final.push(finalWord);
        index++
        console.log(`-----Done ${index}-----`)
        fetcher();
    } catch (error) {
        console.log(error);
    }
}
fetcher();