const redBlueMoves = require("../moves/games/red-blue-moves.json");
// const red_blue_moves = require("../moves/games/red-blue-moves.json");
const yellowMoves = require("../moves/games/yellow-moves.json");
const goldSilverMoves = require('../moves/games/gold-silver-moves.json');
const crystalMoves = require('../moves/games/crystal-moves.json');
const rubySapphireMoves = require('../moves/games/ruby-sapphire-moves.json');
const emeraldMoves = require('../moves/games/emerald-moves.json');
const fireRedLeafGreenMoves = require('../moves/games/firered-leafgreen-moves.json');
const diamondPearlMoves = require('../moves/games/diamond-pearl-moves.json');
const platinumMoves = require('../moves/games/platinum-moves.json');
const heartGoldSoulSilverMoves = require('../moves/games/heartgold-soulsilver-moves.json');
const blackWhiteMoves = require('../moves/games/black-white-moves.json');
const black2White2Moves = require('../moves/games/black-2-white-2-moves.json');
const xyMoves = require('../moves/games/xy-moves.json');
// TODO: add x & y form moves
const omegaRubyAlphaSapphireMoves = require('../moves/games/omega-ruby-alpha-sapphire-moves.json');
// TODO: add omega ruby & alpha sapphire form moves
const sunMoonMoves = require('../moves/games/sun-moon-moves.json');
// TODO: add sun and moon form moves
const ultraSunUltraMoonMoves = require('../moves/games/ultra-sun-ultra-moon-moves.json');
// TODO: add ultra sun & ultra moon form moves
const letsGoPikachuEeveeMoves = require('../moves/games/lets-go-pikcahu-eevee-moves.json');
const swordShieldMoves = require('../moves/games/sword-shield-moves.json');
// TODO: add sword & shield form moves
const brilliantDiamondShiningPearlMoves = require('../moves/games/brilliant-diamond-shining-pearl-moves.json');
const legendsArceusMoves = require('../moves/games/legends-arceus-moves.json');
const scarletVioletMoves = require('../moves/games/scarlet-violet-moves.json');
const scarletVioletFormsMoves = require('../moves/forms/scarlet-violet-moves.json');
const concatScarletViolet = scarletVioletMoves.concat(scarletVioletFormsMoves);

const games = [
    { key: 'scarlet-violet', title: 'Scarlet & Violet' },
    { key: 'legends-arceus', title: 'Legends Arceus' },
    { key: 'brilliant-diamond-shining-pearl', title: 'Brilliant Diamond & Shining Pearl' },
    { key: 'sword-shield', title: 'Sword & Shield' },
    { key: 'lets-go-pikachu-eevee', title: "Let's Go Pikachu & Eevee" },
    { key: 'ultra-sun-ultra-moon', title: 'Ultra Sun & Ultra Moon' },
    { key: 'sun-moon', title: 'Sun & Moon' },
    { key: 'omega-ruby-alpha-sapphire', title: 'Omega Ruby & Alpha Sapphire' },
    { key: 'x-y', title: 'X & Y' },
    { key: 'black-2-white-2', title: 'Black 2 & White 2' },
    { key: 'black-white', title: 'Black & White' },
    { key: 'heart-gold-soul-silver', title: 'Heart Gold & Soul Silver' },
    { key: 'platinum', title: 'Platinum' },
    { key: 'diamond-pearl', title: 'Diamond & Pearl' },
    { key: 'emerald', title: 'Emerald' },
    { key: 'fire-red-leaf-green', title: 'Fire Red & Leaf Green' },
    { key: 'ruby-sapphire', title: 'Ruby & Sapphire' },
    { key: 'crystal', title: 'Crystal' },
    { key: 'gold-silver', title: 'Gold & Silver' },
    { key: 'yellow', title: 'Yellow' },
    { key: 'red-blue', title: 'Red & Blue' },
];

function createGameDropDown(pokemonMoves) {
    const gameDropDown = games.filter((game) => {
        if (pokemonMoves.hasOwnProperty(game.key)){
            // return {
            //     field: game.title,
            //     key: game.key,
            // }
			return game;
        }
    });
    return gameDropDown;
}



const movesByGame = [
	{ moves: redBlueMoves, key: 'red-blue', length: 151 },
	{ moves: yellowMoves, key: 'yellow', length: 151 },
	{ moves: goldSilverMoves, key: 'gold-silver', length: 251 },
	{ moves: crystalMoves, key: 'crystal', length: 251 },
	{ moves: rubySapphireMoves, key: 'ruby-sapphire', length: 386 },
	{ moves: emeraldMoves, key: 'emerald', length: 386 },
	{ moves: fireRedLeafGreenMoves, key: 'firered-leafgreen', length: 386 },
	{ moves: diamondPearlMoves, key: 'diamond-pearl', length: 493 },
	{ moves: platinumMoves, key: 'platinum', length: 493 },
	{ moves: heartGoldSoulSilverMoves, key: 'heart-gold-soul-silver', length: 493 },
	{ moves: blackWhiteMoves, key: 'black-white', length: 649 },
	{ moves: black2White2Moves, key: 'black-2-white-2', length: 649 },
	{ moves: xyMoves, key: 'x-y', length: 721 },
	{ moves: omegaRubyAlphaSapphireMoves, key: 'omega-ruby-alpha-sapphire', length: 721 },
	{ moves: sunMoonMoves, key: 'sun-moon', length: 809 },
	{ moves: ultraSunUltraMoonMoves, key: 'ultra-sun-ultra-moon', length: 809 },
	{ moves: letsGoPikachuEeveeMoves, key: 'lets-go-pikachu-eevee', length: 809 },
	{ moves: swordShieldMoves, key: 'sword-shield', length: 905 },
	{ moves: brilliantDiamondShiningPearlMoves, key: 'brilliant-diamond-shining-pearl', length: 905 },
	{ moves: legendsArceusMoves, key: 'legends-arceus', length: 905 },
	{ moves: concatScarletViolet, key: 'scarlet-violet', length: 1025 },
]

const assignMoves = (moves, pokemonId, returnMoves, game, length) => {
	if (Math.floor(pokemonId) <= length) {
		const foundMoves = moves.find((pokemon) => pokemon.id === pokemonId);
		if (foundMoves) {
			returnMoves[game] = foundMoves[game];
		}
	}
	return returnMoves;
}

function addMovesToPokemon(pokemonId, pokemonMoves) {
	let returnMoves = { ...pokemonMoves };
	movesByGame.forEach((game) => {
		returnMoves = assignMoves(game.moves, pokemonId, returnMoves, game.key, game.length)
	});
	return returnMoves;
}

function addPokedexNumbersToPokemon(pokemon) {
	// For the pokemon given loop through the dexes_objects and add
	// its pokedex number to the pokemon object
}

module.exports = { createGameDropDown, addMovesToPokemon };