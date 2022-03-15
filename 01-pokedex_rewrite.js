const fs = require('fs');
const fetch = require('node-fetch');
// data objects
const pokedex = require('./00-jsons/00-pokedex.json');
/* const moves = require('./00-jsons/00-moves.json') 
Once the moves JSON file was updated from the og moves to 00 moves to 01 moves, use this to re write the pokedex so you can get all moves*/
const moves = require('./01-jsons/01-moves.json')

/**
 * ------------------- READ THIS PART ----------------------------
 * 
 * This is the second step up from 00-pokedex_rewrite.
 *  So now that we have succesffuly built our new array of object gathering some data
 *  now we are ready to refine that data and possible create new feild where we see fit
 *  
 * THIS USES AND API FETCHER
 *  The example for this object is in poke_api/poke-1.json
 *  
 * As you can see there is alot of data here so we need to write alot of helper functions to help up convert this data
 * 
 * The first thing I am going to work on is the abilities
 *  For now I just want the ability name, but in the future when I update an ability JSON file
 *  I will link the two together to give me a number for the ability that correlates
 *  But not every pokemon has 3 ablities so how will we sort the data....
 * 
 * STAY TUNED
 */

/* ------------------ THIS IS OUR TEMPLATE FROM BEFORE ------------------------ */

// const temp = [ pokedex[0], pokedex[1], pokedex[2] ] // use this as your test
const final = [];
const _template = {
    "_id": 1,
    "pokedexNumber": {
      "bdsp": null,
      "la": null
    },
    "name": {
      "english": "Bulbasaur",
      "spanish": "Bulbasaur",
      "italian": "Bulbasaur",
      "japanese": "フシギダネ",
      "chinese": "妙蛙种子",
      "korean": "",
      "german": "",
      "french": "Bulbizarre"
    },
    "type": [
      "Grass",
      "Poison"
    ],
    "abilities": {
      "1": "",
      "2": "",
      "h": ""
    },
    "evolution": {
      "previous": null,
      "current": null,
      "next": null,
      "final": null
    },
    "species": "Seed Pokémon",
    "height": {
      "meters": "0.7"
    },
    "weight": {
      "kg": "6.9"
    },
    "catchRate": null,
    "eggGroups": [
      "Monster",
      "Grass"
    ],
    "genderRatio": {
      "male": null,
      "female": null
    },
    "eggCycles": null,
    "baseFriendship": null,
    "baseExp": null,
    "growthRate": "",
    "baseStats": {
      "hp": 45,
      "atk": 49,
      "def": 49,
      "spatk": 65,
      "spd": 45
    },
    "evs": {},
    "moves": { // this got expanded upon in the 00-pokdex upgrade to have all games by gen and then game matchup
      "bdsp": {
        "levelUp": [],
        "eggMoves": [],
        "tms": {
          "bdsp": []
        }
      }
    },
    "pokedexEntries": { // owkring on finding an api for dex entries
      "rb": null,
      "y": null,
      "g": null,
      "s": null,
      "c": null,
      "rse": null,
      "fr": null,
      "lg": null,
      "dpp": null,
      "hg": null,
      "ss": null,
      "bw": null,
      "b2w2": null,
      "x": null,
      "oras": null,
      "lgplge": null,
      "sw": null,
      "sh": null,
      "bd": null,
      "sp": null,
      "la": null
    },
    "locations": {
      "bdsp": []
    },
    "nameOrigin": {},
    "heldItem": null,
    "sosCalling": {
      "first": null
    }
}

/**
 * API INFORMATION FETCHER
 * 
 *      I know what you are thinking, theres alrady and api for my data? why am I even using this?
 *      Well..... for starters
 *          1. Not all Apis have everything YOU want
 *          2. Sometimes data can be scatttered all over the api, maybe there are refrences to other urls etc...
 *          3. Maybe you just think your better, *Cough* just because you have an api doesnt mean u did it perfect *Cough*
 *          4. Some apis become out of date with information and you want to give it a face life
 *          5. They are smarter then you and you don't understand why they did things, but hey it works for them, and you are stil learning.
 *          6. BECAUSE WHY THE FUCK NOT!! This is fun if you ask me
 * 
 *      This specific fetcher when trying to fetch all the pokemon info is almost 10,000 plus lines per fetch
 *      ...so because of that we need to figure out what we want ahead of time.
 *      You can gather all the information but if you want to console log something, be specific bc it wont load
 *      original_JSONs/api-poke-1.json shows the raw data for an entire fetch
 */
let index = 0;
const fetcher = async () => {
    const POKE_API_URL = 'https://pokeapi.co/api/v2/';
    try {
        if (index > 897) {
            // convert JSON object to string
            const data_array = JSON.stringify(final, null, 2); // this makes it pretty

            // write JSON string to a file
            fs.writeFile('./01-jsons/01-pokedex.json', data_array, (error) => {
                if (error) {
                    console.log(error);
                }
                console.log("JSON data is saved.");
            });
            return;
        }
        const response = await fetch(`${POKE_API_URL}pokemon/${index+1}`);
        const data = await response.json();
        _main_rewrite(pokedex[index], data, final);
        index++
        console.log(`-----Done ${index}-----`)
        fetcher();
    } catch (error) {
        console.log(error);
    }
}
fetcher();

/**
 * MAIN FUNCTION
 * 
 *  This re writes any JSON data that already had a template you want to preserve and edit/update/or post to
 * @param {object} old_data - the JSON array indivdual object
 * @param {object} new_data - is the array you wish to store your new data in
 * @param {array} new_aray - is the object you wish to store your new data in
 */
const _main_rewrite = (old_data, new_data, new_array) => {   
    // abilities come up first
    new_data.abilities.forEach((ability) => {
        const string = ability.ability.name;
        if (ability.slot === 1) {
            old_data.abilities["1"] = string.charAt(0).toUpperCase() + string.slice(1);
        }
        if (ability.slot === 2) {
            old_data.abilities["2"] = string.charAt(0).toUpperCase() + string.slice(1);
        }
        if (ability.slot === 3) {
            old_data.abilities["h"] = string.charAt(0).toUpperCase() + string.slice(1);
        }
    })
    old_data.baseExp = new_data.base_experience; // get base exp
    // this is for evs
    new_data.stats.forEach((stat) => {
        if (stat.effort > 0) {
            if (stat.stat.name === "attack") {old_data.evs["atk"] = stat.effort}
            if (stat.stat.name === "defense") {old_data.evs["def"] = stat.effort}
            if (stat.stat.name === "special-attack") {old_data.evs["spatk"] = stat.effort}
            if (stat.stat.name === "special-defense") {old_data.evs["spdef"] = stat.effort}
            if (stat.stat.name === "speed") {old_data.evs["spd"] = stat.effort}
        }
    })

    if (old_data._id >= 810) { // this is because I was missing base Stats after 810
        old_data.baseStats.hp = new_data.stats[0].base_stat;
        old_data.baseStats.atk = new_data.stats[1].base_stat;
        old_data.baseStats.def = new_data.stats[2].base_stat;
        old_data.baseStats.spatk = new_data.stats[3].base_stat;
        old_data.baseStats.spdef = new_data.stats[4].base_stat;
        old_data.baseStats.spd = new_data.stats[5].base_stat;
    }

    const _moveConverter = (game, method, level, id) => {
        let gen = ''
        let goTo = '';
        let group = '';
        if (game === 'red-blue' || game === 'yellow') {
            gen = 'gen_one';
            if (game === 'red-blue') { goTo = 'rb'};
            if (game === 'yellow') { goTo = 'y'};
        } else if (game === 'gold-silver' || game === 'crystal') {
            gen = 'gen_two';
            if (game === 'gold-silver') { goTo = 'gs'};
            if (game === 'crystal') { goTo = 'c'};
        }  else if (game === 'ruby-sapphire' || game === 'emerald' || game === 'firered-leafgreen') {
            gen = 'gen_three';
            if (game === 'ruby-sapphire') { goTo = 'rs'};
            if (game === 'emerald') { goTo = 'e'}; 
            if (game === 'firered-leafgreen') { goTo = 'frlg'};
        }  else if (game === 'diamond-pearl' || game === 'platinum' || game === 'heartgold-soulsilver') {
            gen = 'gen_four';
            if (game === 'diamond-pearl') { goTo = 'dp'};
            if (game === 'platinum') { goTo = 'p'};
            if (game === 'heartgold-soulsilver') { goTo = 'hgss'};
        }  else if (game === 'black-white' || game === 'black-2-white-2') {
            gen = 'gen_five';
            if (game === 'black-white') { goTo = 'bw'};
            if (game === 'black-2-white-2') { goTo = 'b2w2'};
        }  else if (game === 'x-y' || game === 'omega-ruby-alpha-sapphire') {
            gen = 'gen_six';
            if (game === 'x-y') { goTo = 'xy'};
            if (game === 'omega-ruby-alpha-sapphire') { goTo = 'oras'};
        }  else if (game === 'sun-moon' || game === 'ultra-sun-ultra-moon' || game === 'lets-go-pikachu-lets-go-eevee') {
            gen = 'gen_seven';
            if (game === 'sun-moon') { goTo = 'sm'};
            if (game === 'ultra-sun-ultra-moon') { goTo = 'usum'};
            if (game === 'lets-go-pikachu-lets-go-eevee') { goTo = 'lelp'};
        }  else if (game === 'sword-shield') {
            gen = 'gen_eight';
            if (game === 'sword-shield') { goTo = 'swsh'};
        } 

        if (method === 'machine') { group = 'machine' };
        if (method === 'egg') { group = 'egg' };
        if (method === 'tutor') { group = 'tutor' };
        if (method === 'level-up') { group = 'levelUp' };
        // Log Errors
        if (gen === '' || group === '') {
            console.log('Method of move: ', method);
            console.log('Game it was meant to be sent too: ', game);
            return;
        };

        if (group === 'levelUp') {
            old_data.moves[gen][goTo][group].push({
                level: level,
                id: id
            })
        } else {
            old_data.moves[gen][goTo][group].push(id) // I wanted a simple array I can sort through later
        }
    }

    new_data.moves.forEach((move) => {
        move.version_group_details.forEach((version) => {
            const game_name = version.version_group.name;
            if (game_name === 'xd' || game_name === 'colosseum') return; // leave because I do not care about this games
            const move_name = move.move.name.replace('-', ' ').replace('-', ' ').replace("'", ''); // some moves have two '-'
            const move_method = version.move_learn_method.name; // move method coming from the api
            const level = version.level_learned_at; // the level learnt at for level up moves
            // find the move in the data base and return the _id
            const found = moves.find(({ name }) => { 
                const move = name.english.toLowerCase().replace('-', ' ').replace('-', ' ').replace("'", '');
                return move === move_name;
            });
            if (found) {
                _moveConverter(game_name, move_method, level, found._id)
            } else { // if the move is not found due to a string mismatch or not uploaded in the moves.json, show here
                console.log('Not found move name:', move_name);
                return;
            }
        })
    });

    new_array.push(old_data) // send your new data into the final product
}