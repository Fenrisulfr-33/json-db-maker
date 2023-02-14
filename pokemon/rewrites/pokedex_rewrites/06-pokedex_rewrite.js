const dataFetcher = require('../dataFetcher')
const pokedex = require('../05-jsons/05-pokedex.json');

/**
 * MAIN FUNCTION
 * 
 *  This re writes any JSON data that already had a template you want to preserve and edit/update/or post to
 * @param {object} old_data - the JSON array indivdual object
 * @param {object} new_data - is the array you wish to store your new data in
 * @param {array} new_aray - is the object you wish to store your new data in
 */
const pokedexRewrite06 = (oldData, newData, newArray, errors, checkObj) => {
    // helper lists
    const gen8 = ['sword-shield-egg',],
    gen7 = ['sword-shield-egg', 'ultra-sun-ultra-moon-egg', 'sun-moon-egg'],
    gen6 = ['sword-shield-egg', 'ultra-sun-ultra-moon-egg', 'sun-moon-egg',  'x-y-egg', 'omega-ruby-alpha-sapphire-egg'],
    gen5 = ['sword-shield-egg', 'ultra-sun-ultra-moon-egg', 'sun-moon-egg',  'x-y-egg', 'omega-ruby-alpha-sapphire-egg', 'black-white-egg', 'black-2-white-2-egg'],
    gen4 = ['sword-shield-egg', 'ultra-sun-ultra-moon-egg', 'sun-moon-egg',  'x-y-egg', 'omega-ruby-alpha-sapphire-egg', 'black-white-egg', 'black-2-white-2-egg', 'heartgold-soulsilver-egg', 'diamond-pearl-egg', 'platinum'],
    gen3 = ['sword-shield-egg', 'ultra-sun-ultra-moon-egg', 'sun-moon-egg',  'x-y-egg', 'omega-ruby-alpha-sapphire-egg', 'black-white-egg', 'black-2-white-2-egg', 'heartgold-soulsilver-egg', 'diamond-pearl-egg', 'platinum', 'firered-leafgreen-egg', 'ruby-sapphire-egg', 'emerald-egg'],
    gen2 = ['sword-shield-egg', 'ultra-sun-ultra-moon-egg', 'sun-moon-egg',  'x-y-egg', 'omega-ruby-alpha-sapphire-egg', 'black-white-egg', 'black-2-white-2-egg', 'heartgold-soulsilver-egg', 'diamond-pearl-egg', 'platinum', 'firered-leafgreen-egg', 'ruby-sapphire-egg', 'emerald-egg', 'crystal-egg', 'gold-silver-egg'];
    /**
     * PURPOSE
     * 
     * This is designed to check a pokemons evolution number and find all other evoltuion numbers that match,
     *  Once one is found it needs to check if both pokemon share all the same egg moves,
     *  And whoeever has eggs moves the other does not transfer them,
     *      EG: If charmander has a bunch of eggmoves charizard does not, charizard needs to have those eggs moves for legality checks in making builds.
     * Problem,
     *  If two pokemon are in the same evolution but different generations you will add a bunch of uncessary data, so a check needs to be in place
     */
    // Check to see if it already exsists in the finishedEvolutions object, if it is skip
    if (checkObj[oldData.evolution.id]) { // exsists
        return [];// do nothing
    } else if (oldData.evolution.id === null) {
        return [oldData];
    }else {
        const group = [];
        const finishedGroup = [];
        // Loop through the entire pokedex looking for a matching evolution number
        // Remember the baby pokemon can come before the other pokemon
        pokedex.forEach((pokemon) => {
            // if matching number if found then add to array, it will be in order unless it says start is true
            if (oldData.evolution.id === pokemon.evolution.id && pokemon.evolution.start) {
                group.unshift(pokemon)
            } else if (oldData.evolution.id === pokemon.evolution.id) {
                group.push(pokemon)
            }
        })
        // Now that we have our group in order, add moves
        const eggPokemon = group[0];
        finishedGroup.push(eggPokemon);
        for (let i = 1; i < group.length; i++) {
            const pokemon = group[i],
                moves = eggPokemon.moves;
            for (const move in moves) {
                const currentMove = eggPokemon.moves[`${move}`];
                for (const property in currentMove) {

                    if (eggPokemon.generation === pokemon.generation) {
                        if (currentMove[property] === 'egg') {
                            // transfer all egg moves
                            if (pokemon.moves[move]) {
                                pokemon.moves[move][property] = 'egg';
                            } else {
                                pokemon.moves[move] = {};
                                pokemon.moves[move][property] = 'egg';
                            }
                        }
                    } else if (pokemon.generation === 8) {
                        if (gen8.includes(property)) {
                            if (pokemon.moves[move]) {
                                pokemon.moves[move][property] = 'egg';
                            } else {
                                pokemon.moves[move] = {};
                                pokemon.moves[move][property] = 'egg';
                            }
                        }
                    } else if (pokemon.generation === 7) {
                        if (gen7.includes(property)) {
                            if (pokemon.moves[move]) {
                                pokemon.moves[move][property] = 'egg';
                            } else {
                                pokemon.moves[move] = {};
                                pokemon.moves[move][property] = 'egg';
                            }
                        }
                    } else if (pokemon.generation === 6) {
                        if (gen6.includes(property)) {
                            if (pokemon.moves[move]) {
                                pokemon.moves[move][property] = 'egg';
                            } else {
                                pokemon.moves[move] = {};
                                pokemon.moves[move][property] = 'egg';
                            }
                        }
                    } else if (pokemon.generation === 5) {
                        if (gen5.includes(property)) {
                            if (pokemon.moves[move]) {
                                pokemon.moves[move][property] = 'egg';
                            } else {
                                pokemon.moves[move] = {};
                                pokemon.moves[move][property] = 'egg';
                            }
                        }
                    } else if (pokemon.generation === 4) {
                        if (gen4.includes(property)) {
                            if (pokemon.moves[move]) {
                                pokemon.moves[move][property] = 'egg';
                            } else {
                                pokemon.moves[move] = {};
                                pokemon.moves[move][property] = 'egg';
                            }
                        }
                    } else if (pokemon.generation === 3) {
                        if (gen3.includes(property)) {
                            if (pokemon.moves[move]) {
                                pokemon.moves[move][property] = 'egg';
                            } else {
                                pokemon.moves[move] = {};
                                pokemon.moves[move][property] = 'egg';
                            }
                        }
                    } else if (pokemon.generation === 2) {
                        if (gen2.includes(property)) {
                            if (pokemon.moves[move]) {
                                pokemon.moves[move][property] = 'egg';
                            } else {
                                pokemon.moves[move] = {};
                                pokemon.moves[move][property] = 'egg';
                            }
                        }
                    }
                }
            }
            finishedGroup.push(pokemon);
        }
        checkObj[oldData.evolution.id] = 'done';
        return finishedGroup; // return an array of data so all pokemon can get in
    }

}

/**
 * 
 * @param {*} dataURL = incoming api request
 * @param {*} lastNum = the last number of the api request
 * @param {*} oldData = previous version of json file
 * @param {*} fileSaveURL = new save write
 * @param {*} converterFunc = passed in function with changes
 */
dataFetcher(
    '', // no API needed
    897, // index to stop at - 1
    pokedex, // old data
    "../06-jsons/06-pokedex.json", // new file write
    pokedexRewrite06, // function passed in
    false, // returnObj = true, returnArray = false || Defaults to true
);