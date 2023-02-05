const moves = require('../data/movesDropDown/scarletVioletMoves');
const checkMoves = require('../jsons/04-jsons/04-moves.json');

const check = () => {
    moves.forEach((move) => {
        const found = checkMoves.find((checkMove) => checkMove.name.english === move);
        found ? null : console.log(move);
    })
}
check();