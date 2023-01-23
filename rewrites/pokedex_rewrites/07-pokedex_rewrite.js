const e = require('express');
const dataFetcher = require('../dataFetcher'),
pokedex = require('../06-jsons/06-pokedex.json'),
swshDex = require('../pokedexes/swsh/SwShDex.json'),
ioaDex = require('../pokedexes/swsh/IsleOfArmorDex.json');


/**
 * MAIN FUNCTION
 * 
 *  This re writes any JSON data that already had a template you want to preserve and edit/update/or post to
 * @param {object} old_data - the JSON array indivdual object
 * @param {object} new_data - is the array you wish to store your new data in
 * @param {array} new_aray - is the object you wish to store your new data in
 */
const pokedexRewrite07 = (oldData, newData, newArray, errors, checkObj) => {
    // if sword and shield dex pokemon exists, add pokedexNumber swsh to oldData
    for (const [key, value] of Object.entries(swshDex)){
        if (oldData._id === value.pokemon){
            oldData.pokedexNumber['swsh'] = Number(key);
        }
    }
    // if island of armor dex pokemon exists, add pokedexNumber swsh to oldData
    for (const [key, value] of Object.entries(ioaDex)){
        if (oldData._id === value.pokemon){
            oldData.pokedexNumber['ioa'] = Number(key);
        }
    }
    // TODO: Add the rest of the dexes

    // Add a game object that has all the pokemon games for the gamedrop down
    oldData.gameDropDown = [];
    for (const [key, value] of Object.entries(oldData.moves)){
        for (const [keyTwo, valueTwo] of Object.entries(oldData.moves[key])){
            // check every type of move key and add that game
            // console.log(keyTwo.slice(0, 13));
            if (keyTwo.slice(0, 8) === 'red-blue'){
                if (!oldData.gameDropDown.includes('Red & Blue')){
                    oldData.gameDropDown.push('Red & Blue');
                }
            } else if (keyTwo.slice(0, 6) === 'yellow'){
                if (!oldData.gameDropDown.includes('Yellow')){
                    oldData.gameDropDown.push('Yellow');
                }
            } else if (keyTwo.slice(0, 11) === 'gold-silver'){
                if (!oldData.gameDropDown.includes('Gold & Silver')){
                    oldData.gameDropDown.push('Gold & Silver');
                }
            } else if (keyTwo.slice(0, 7) === 'crystal'){
                if (!oldData.gameDropDown.includes('Crystal')){
                    oldData.gameDropDown.push('Crystal');
                }
            } else if (keyTwo.slice(0, 13) === 'ruby-sapphire'){
                if (!oldData.gameDropDown.includes('Ruby & Sapphire')){
                    oldData.gameDropDown.push('Ruby & Sapphire');
                }
            } else if (keyTwo.slice(0, 7) === 'emerald'){
                if (!oldData.gameDropDown.includes('Emerald')){
                    oldData.gameDropDown.push('Emerald');
                }
            } else if (keyTwo.slice(0, 17) === 'firered-leafgreen'){
                if (!oldData.gameDropDown.includes('Fire Red & Leaf Green')){
                    oldData.gameDropDown.push('Fire Red & Leaf Green');
                }
            } else if (keyTwo.slice(0, 13) === 'diamond-pearl'){
                if (!oldData.gameDropDown.includes('Diamond & Pearl')){
                    oldData.gameDropDown.push('Diamond & Pearl');
                }
            } else if (keyTwo.slice(0, 8) === 'platinum'){
                if (!oldData.gameDropDown.includes('Platinum')){
                    oldData.gameDropDown.push('Platinum');
                }
            } else if (keyTwo.slice(0, 20) === 'heartgold-soulsilver'){
                if (!oldData.gameDropDown.includes('Heart Gold & Soul Silver')){
                    oldData.gameDropDown.push('Heart Gold & Soul Silver');
                }
            } else if (keyTwo.slice(0, 11) === 'black-white'){
                if (!oldData.gameDropDown.includes('Black & White')){
                    oldData.gameDropDown.push('Black & White');
                }
            } else if (keyTwo.slice(0, 2) === 'xd'){
                if (!oldData.gameDropDown.includes('Pokemon XD')){
                    oldData.gameDropDown.push('Pokemon XD');
                }
            } else if (keyTwo.slice(0, 9) === 'colosseum'){
                if (!oldData.gameDropDown.includes('Pokemon Colosseum')){
                    oldData.gameDropDown.push('Pokemon Colosseum');
                }
            }  else if (keyTwo.slice(0, 15) === 'black-2-white-2'){
                if (!oldData.gameDropDown.includes('Black 2 & White 2')){
                    oldData.gameDropDown.push('Black 2 & White 2');
                }
            } else if (keyTwo.slice(0, 3) === 'x-y'){
                if (!oldData.gameDropDown.includes('X & Y')){
                    oldData.gameDropDown.push('X & Y');
                }
            } else if (keyTwo.slice(0, 25) === 'omega-ruby-alpha-sapphire'){
                if (!oldData.gameDropDown.includes('Omega Ruby & Alpha Shappire')){
                    oldData.gameDropDown.push('Omega Ruby & Alpha Shappire');
                }
            } else if (keyTwo.slice(0, 8) === 'sun-moon'){
                if (!oldData.gameDropDown.includes('Sun & Moon')){
                    oldData.gameDropDown.push('Sun & Moon');
                }
            } else if (keyTwo.slice(0, 20) === 'ultra-sun-ultra-moon'){
                if (!oldData.gameDropDown.includes('Ultra Sn & Ultra Moon')){
                    oldData.gameDropDown.push('Ultra Sn & Ultra Moon');
                }
            } else if (keyTwo.slice(0, 29) === 'lets-go-pikachu-lets-go-eevee'){
                if (!oldData.gameDropDown.includes(`Let's Go Pikachu & Eevee`)){
                    oldData.gameDropDown.push(`Let's Go Pikachu & Eevee`);
                }
            } else if (keyTwo.slice(0, 12) === 'sword-shield'){
                if (!oldData.gameDropDown.includes('Sword & Shield')){
                    oldData.gameDropDown.push('Sword & Shield');
                }
            } 
                // TODO: Add BDSP and Legends Arceus
                else if (keyTwo.slice(0, 14) === 'scarlet-violet'){
                    if (!oldData.gameDropDown.includes('Scarlet & Violet')){
                        oldData.gameDropDown.push('Scarlet & Violet');
                    }
            } else {
                console.log(keyTwo)
            }
        }
    }
    return oldData;
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
    "../07-jsons/07-pokedex.json", // new file write
    pokedexRewrite07, // function passed in
    true, // returnObj = true, returnArray = false || Defaults to true
);