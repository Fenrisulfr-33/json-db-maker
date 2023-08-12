const games = [
    { old: 'rb', new: 'red-blue' },
    { old: 'ye', new: 'yellow' },
    { old: 'g', new: 'gold' }, 
    { old: 's', new: 'silver' },
    { old: 'c', new: 'crystal' },
    { old: 'ru', new: 'ruby' },
    { old: 'sa', new: 'sapphire' },
    { old: 'rs', new: 'ruby-sapphire' },
    { old: 'e', new: 'emerald' },
    { old: 'rse', new: 'ruby-sapphire-emerald' },
    { old: 'fr', new: 'fire-red' },
    { old: 'lg', new: 'leaf-green' },
    { old: 'frlg', new: 'fire-red-leaf-green' },
    { old: 'd', new: 'diamond' },
    { old: 'pe', new: 'pearl' },
    { old: 'pl', new: 'platinum' },
    { old: 'dp', new: 'diamond-pearl' },
    { old: 'dpp', new: 'diamond-pearl-platinum' },
    { old: 'dpl', new: 'diamond-platinum' },
    { old: 'dpe', new: 'diamond-pearl' },
    { old: 'hg', new: 'heart-gold' }, 
    { old: 'ss', new: 'soul-silver' },
    { old: 'hgss', new: 'heart-gold-soul-silver' },
    { old: 'b', new: 'black' },
    { old: 'w', new: 'white' },
    { old: 'bw', new: 'black-white' },
    { old: 'b2w2', new: 'black-2-white-2' },
    { old: 'bwb2w2', new: 'black-white-black-2-white-2' },
    { old: 'x', new: 'x' },
    { old: 'y', new: 'y' },
    { old: 'xy', new: 'x-y' },
    { old: 'or', new: 'omega-ruby' },
    { old: 'as', new: 'alpha-sapphire' },
    { old: 'oras', new: 'omega-ruby-alpha-sapphire' },
    { old: 'xor', new: 'x-omega-ruby' },
    { old: 'yas', new: 'y-alpha-sapphire' },
    { old: 'sun', new: 'sun' },
    { old: 'mo', new: 'moon' },
    { old: 'us', new: 'ultra-sun' },
    { old: 'um', new: 'ultra-moon' },
    { old: 'sus', new: 'sun-ultra-sun' },
    { old: 'lgplge', new: 'lets-go-pikachu-eevee' },
    { old: 'sw', new: 'sword' },
    { old: 'sh', new: 'shield' },
    { old: 'shbdsp', new: 'shield-brilliant-diamond-shining-pearl' },
    { old: 'bd', new: 'brilliant-diamond' },
    { old: 'sp', new: 'shining-pearl' },
    { old: 'bdsp', new: 'brilliant-diamond-shining-pearl' },
    { old: 'la', new: 'legends-arceus' },
    { old: 'sc', new: 'scarlet' },
    { old: 'vi', new: 'violet' },
    { old: 'scarlet', new: 'scarlet' },
    { old: 'violet', new: 'violet' },
]

function changePokedexEntriesData(pokedexEntries, pokemonId, errors) {
    console.log(pokemonId);
    const returnEntries = {};
    for (const [form, values] of Object.entries(pokedexEntries)) {
        const formWords = form.split(" ");
        const joinForm = formWords.map((word) => word[0].toUpperCase() + word.substring(1));
        const joinedForm = joinForm.join(' ');
        returnEntries[joinedForm] = [];
        for (const [game, desc] of Object.entries(pokedexEntries[form])) {
            const foundGame = games.find((gameObj) => gameObj.old === game);
            if (foundGame){
                returnEntries[joinedForm].push({ game: foundGame.new, desc: desc})
            } else {
                // console.log(game);
                errors[game] = `pokedexEntry bad ${pokemonId}`
            }
        }
    }
    return returnEntries;
}

module.exports = {
    changePokedexEntriesData,
}