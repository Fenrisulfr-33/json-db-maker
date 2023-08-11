const moves = require('../data/moves/00-dnt-moves.json');

const badMoves = [
    "PoisonPowder",
    "SolarBeam",
    "GrassWhistle",
    "SmokeScreen",
    "AncientPower",
    "DynamicPunch",
    "DragonBreath",
    "ThunderPunch",
    "BubbleBeam",
    'Sand-Attack',
    'Faint Attack', // Feint Attack
    "FeatherDance", // Feather Dance
    "ThunderShock",
    "DoubleSlap",
    "Softboiled",
    "SmellingSalt",
    "ExtremeSpeed",
    "Selfdestruct",
    "SonicBoom",
    "ViceGrip",
    'Hi Jump Kick',
    'Vise Grip',
    "Land's Wrath",
    "Nature's Madness",
    "Vice Grip",
];

const goodMoves = [
    "Poison Powder",
    "Solar Beam",
    "Grass Whistle",
    "Smokescreen",
    "Ancient Power",
    "Dynamic Punch",
    "Dragon Breath",
    "Thunder Punch",
    "Bubble Beam",
    'Sand Attack',
    'Feint Attack',
    "Feather Dance",
    "Thunder Shock",
    "Double Slap",
    "Soft-Boiled",
    "Smelling Salts",
    "Extreme Speed",
    "Self-Destruct",
    "Sonic Boom",
    "Vise Grip", // Vice Grips originally
    'Hi Jump Kick',
    'Vise Grip',
    "Land's Wrath", // Fixed database
    "Nature's Madness", // Fixed database
    'Vise Grip',
]

function replaceWrongMoveNames(pokemonMoves, errors) {
    const returnMoves = {};
    for (const [game, methodList] of Object.entries(pokemonMoves)) {
        returnMoves[game] = {};
        for (const [method, list] of Object.entries(pokemonMoves[game])) {
            if (typeof (list[0]) === typeof ({})) {
                const returnList = list.map((move) => {
                    const foundMove = moves.find((dbMove) => dbMove.name.english === move.name);
                    if (!foundMove) {
                        if (badMoves.includes(move.name)){
                            const replaceIndex = badMoves.indexOf(move.name);
                            return {
                                ...move,
                                name: goodMoves[replaceIndex],
                            }
                        }
                        errors[move.name] = "move error";
                    } else {
                        return move
                    }
                })
                returnMoves[game][method] = returnList;
            } else {
                // Must be an array
                const returnList = list.map((move) => {
                    const foundMove = moves.find((dbMove) => dbMove.name.english === move);
                    if (!foundMove) {
                        if (badMoves.includes(move)){
                            const replaceIndex = badMoves.indexOf(move);
                            return goodMoves[replaceIndex]
                        }
                        errors[move] = "bad";
                    } else {
                        return move
                    }
                })
                returnMoves[game][method] = returnList;
            }
        }
    }

    // return errors;
    return returnMoves;
}

module.exports = {
    replaceWrongMoveNames
}