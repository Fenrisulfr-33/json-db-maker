import redBlueMoves from "../moves/games/01-red-blue.json" with { type: "json" };
import yellowMoves from "../moves/games/02-yellow.json" with { type: "json" };
import goldSilverMoves from "../moves/games/03-gold-silver.json" with { type: "json" };
import crystalMoves from "../moves/games/04-crystal.json" with { type: "json" };
import rubySapphireMoves from "../moves/games/05-ruby-sapphire.json" with { type: "json" };
import fireRedLeafGreenMoves from "../moves/games/06-fire-red-leaf-green.json" with { type: "json" };
import emeraldMoves from "../moves/games/07-emerald.json" with { type: "json" };
import diamondPearlMoves from "../moves/games/08-diamond-pearl.json" with { type: "json" };
import platinumMoves from "../moves/games/09-platinum.json" with { type: "json" };
import heartGoldSoulSilverMoves from "../moves/games/10-heart-gold-soul-silver.json" with { type: "json" };
import blackWhiteMoves from "../moves/games/11-black-white.json" with { type: "json" };
import black2White2Moves from "../moves/games/12-black-2-white-2.json" with { type: "json" };
import xyMoves from "../moves/games/13-x-y.json" with { type: "json" };
// TODO: add x & y form moves
import omegaRubyAlphaSapphireMoves from "../moves/games/14-omega-ruby-alpha-sapphire.json" with { type: "json" };
// TODO: add omega ruby & alpha sapphire form moves
import sunMoonMoves from "../moves/games/15-sun-moon.json" with { type: "json" };
// TODO: add sun and moon form moves
import ultraSunUltraMoonMoves from "../moves/games/16-ultra-sun-ultra-moon.json" with { type: "json" };
// TODO: add ultra sun & ultra moon form moves
import letsGoPikachuEeveeMoves from "../moves/games/17-lets-go-pikachu-eevee.json" with { type: "json" };
import swordShieldMoves from "../moves/games/18-sword-shield.json" with { type: "json" };
// TODO: add sword & shield form moves
import brilliantDiamondShiningPearlMoves from "../moves/games/19-brilliant-diamond-shining-pearl.json" with { type: "json" };
import legendsArceusMoves from "../moves/games/20-legends-arceus.json" with { type: "json" };
import scarletVioletMoves from "../moves/games/21-scarlet-violet.json" with { type: "json" };
// TODO: scarlet-violet form moves used to be merged in from moves/forms/scarlet-violet-moves.json,
// which only exists under the legacy top-level /pokemon folder now, not under src/. Not merged in
// until that data is migrated - see conversation with Claude on 2026-08-24.
const concatScarletViolet = scarletVioletMoves;

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

export { createGameDropDown, addMovesToPokemon };