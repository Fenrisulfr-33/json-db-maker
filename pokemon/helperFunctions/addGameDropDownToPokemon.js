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

function addGameDropDownToPokemon(pokemonMoves) {
    const gameDropDown = games.filter((game) => {
        if (pokemonMoves.hasOwnProperty(game.key)){
            return {
                field: game.title,
                key: game.key,
            }
        }
    });
    return gameDropDown;
}

module.exports = addGameDropDownToPokemon;