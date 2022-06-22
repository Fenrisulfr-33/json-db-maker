const { data } = require('cheerio/lib/api/attributes');
const fs = require('fs');
const fetch = require('node-fetch');
const moves = require('../01-jsons/01-moves.json');

const final = [];
let index = 0;
const fetcher = async () => {
    const POKE_API_URL = 'https://pokeapi.co/api/v2/';
    try {
        if (index > 825) { // current highest move available is 826, so 825
            // convert JSON object to string
            const data_array = JSON.stringify(final, null, 2); // this makes it pretty

            // write JSON string to a file
            fs.writeFile('../02-jsons/02-moves.json', data_array, (error) => {
                if (error) {
                    console.log(error);
                }
                console.log("JSON data is saved.");
            });
            return;
        }
        const response = await fetch(`${POKE_API_URL}move/${index+1}`);
        const data = await response.json();
        _main_rewrite(moves[index], data, final);
        console.log(`-----Done ${index}-----`)
        index++
        fetcher();
    } catch (error) {
        console.log(error);
    }
}
fetcher();


/**
 * MAIN FUNCTION
 */
const _main_rewrite = (old_data, new_data, new_array) => {  
    delete old_data.descriptions;
    delete old_data.effects;
    delete old_data.zMoveEffects;
    old_data.description = {};
    old_data.effect = {};
    old_data.priority = 0;
    const flavorTest = new_data.flavor_text_entries; // []

    flavorTest.forEach((text) => {
        // {
        //     "flavor_text": "きょうりょくな　サイコパワーで　こうげき。\nあいてが　さいごに　つかった　わざの\nＰＰを　３だけ　へらす。",
        //     "language": {
        //       "name": "ja-Hrkt",
        //       "url": "https://pokeapi.co/api/v2/language/1/"
        //     },
        //     "version_group": {
        //       "name": "sword-shield",
        //       "url": "https://pokeapi.co/api/v2/version-group/20/"
        //     }
        //   },
        if (text.language.name === 'en') {
            const game = text.version_group.name;
            old_data.description[game] = text.flavor_text;
        }
    });

    // add priority
    if (new_data.priority) { old_data.priority = new_data.priority}

    // replace target
    if (new_data.target) { old_data.target = new_data.target.name }

    const effectEntries = new_data.effect_entries; // []
    effectEntries.forEach((effect) => {
        // {
        //     "effect": "If the user is a ghost: user pays half its max HP to place a curse on the target, damaging it for 1/4 its max HP every turn.\nOtherwise: Lowers the user's Speed by one stage, and raises its Attack and Defense by one stage each.\n\nThe curse effect is passed on by baton pass.\n\nThis move cannot be copied by mirror move.",
        //     "language": {
        //       "name": "en",
        //       "url": "https://pokeapi.co/api/v2/language/9/"
        //     },
        //     "short_effect": "Ghosts pay half their max HP to hurt the target every turn.  Others decrease Speed but raise Attack and Defense."
        //   }
        if (effect.language.name === 'en') {
            old_data.effect= {
                full: effect.effect,
                shortEffect: effect.short_effect,
            }
        }
    });

    new_array.push(old_data)
}