const dntMoves = require('./00-dnt-moves.json');
const redBlueMoves = require('./01-red-blue-moves.json');
const yellowMoves = require('./01-yellow-moves.json');
const goldSilverMoves = require('./02-gold-silver-moves.json');
const scarletVioletMoves = require('./09-scarlet-violet-moves.json');
const scarletVioletOneMoves = require('./09.1-scarlet-violet-moves.json');
const scarletVioletFormsMoves = require('./09-scarlet-violet-forms-moves.json');
const scarletVioletTwoMoves = require('./09.2-scarlet-violet-moves.json');


const checkInfo = () => {
    console.log('dnt-moves length:', dntMoves.length);
    console.log('red-blue-moves length:', redBlueMoves.length);


    console.log('scarlet-violet-moves length:', scarletVioletMoves.length);
    console.log('scarlet-violet-1-moves length:', scarletVioletOneMoves.length);
    console.log('scarlet-violet-forms-moves length:', scarletVioletFormsMoves.length);
    console.log('scarlet-violet-2-moves length:', scarletVioletTwoMoves.length);
}

checkInfo();
