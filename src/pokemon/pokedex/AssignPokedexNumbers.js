import readJson from '../../genericFunctions/files/readJson.js';

// Configuration: maps file names to game identifiers
const DEX_CONFIG = [
	{ file: '01-red-blue-yellow', games: ['red-blue', 'yellow'] },
	{ file: '02-gold-silver-crystal', games: ['gold-silver', 'crystal'] },
	{ file: '03-ruby-sapphire-emerald', games: ['ruby-sapphire', 'emerald'] },
	{ file: '04-firered-leafgreen', games: ['firered-leafgreen'] },
	{ file: '05-diamond-pearl', games: ['diamond-pearl'] },
	{ file: '06-platinum', games: ['platinum'] },
	{ file: '07-heartgold-soulsilver', games: ['heartgold-soulsilver'] },
	{ file: '08-black-white', games: ['black-white'] },
	{ file: '09-black2-white2', games: ['black-2-white-2'] },
	{ file: '10-xy-central', games: ['x-y-central'] },
	{ file: '11-xy-coastal', games: ['x-y-coastal'] },
	{ file: '12-xy-mountain', games: ['x-y-mountain'] },
	{ file: '13-omega-ruby-alpha-sapphire', games: ['omega-ruby-alpha-sapphire'] },
	{ file: '14-sun-moon-alola', games: ['sun-moon'] },
	{ file: '15-sun-moon-melemele', games: ['sun-moon-melemele'] },
	{ file: '16-sun-moon-akala', games: ['sun-moon-akala'] },
	{ file: '17-sun-moon-ulaula', games: ['sun-moon-ulaula'] },
	{ file: '18-sun-moon-poni', games: ['sun-moon-poni'] },
	{ file: '19-ultra-sun-ultra-moon-alola', games: ['ultra-sun-ultra-moon'] },
	{ file: '20-ultra-sun-ultra-moon-melemele', games: ['ultra-sun-ultra-moon-melemele'] },
	{ file: '21-ultra-sun-ultra-moon-akala', games: ['ultra-sun-ultra-moon-akala'] },
	{ file: '22-ultra-sun-ultra-moon-ulaula', games: ['ultra-sun-ultra-moon-ulaula'] },
	{ file: '23-ultra-sun-ultra-moon-poni', games: ['ultra-sun-ultra-moon-poni'] },
	{ file: '24-lets-go-pikachu-lets-go-eevee', games: ['lets-go-pikachu-eevee'] },
	{ file: '25-sword-shield', games: ['sword-shield'] },
	{ file: '26-isle-of-armor', games: ['isle-of-armor'] },
	{ file: '27-crown-tundra', games: ['crown-tundra'] },
	{ file: '28-legends-arceus', games: ['legends-arceus'] },
	{ file: '29-scarlet-violet', games: ['scarlet-violet'] },
	{ file: '30-teal-mask', games: ['the-teal-mask'] },
	{ file: '31-indigo-disk', games: ['the-indigo-disk'] },
];

function assignPokemonPokedexNumbers(pokemon) {
	const existingNumbers = pokemon.pokedexNumber || {};
	const newNumbers = createPokedexNumberMap(pokemon, existingNumbers);

	delete pokemon.pokedexNumber

	return {
		...pokemon,
		pokedexNumber: newNumbers
	}
}

// Load and structure all pokedexes once
const pokedexesByGame = DEX_CONFIG.flatMap(({ file, games }) => {
	const dex = readJson(`./dexes/dexes_objects/${file}.json`, import.meta.url);
	return games.map(game => ({ game, dex }));
});

function findPokemonInDex(pokemon, dex) {
	return dex.find(p => p.pokemonId === pokemon._id);
}

function createPokedexNumberMap(pokemon, existingNumbers = {}) {
	const result = { ...existingNumbers };

	for (const { game, dex } of pokedexesByGame) {
		// Only add if this game doesn't already have a pokedex number
		if (!result[game]) {
			const entry = findPokemonInDex(pokemon, dex);
			if (entry) {
				result[game] = entry.dexNo;
			}
		} else {
			const entry = findPokemonInDex(pokemon, dex);
			if (entry && result[game] !== entry.dexNo) {
				result[game] = entry.dexNo;
			}
		}
	}
	return result;
}


export default assignPokemonPokedexNumbers;