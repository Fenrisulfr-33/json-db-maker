const axios = require("axios");
const cheerio = require("cheerio");
const pokedex = require("../01-jsons/01-pokedex.json");
const fs = require('fs')

/**
 * Go to the Pokedex entries if there is no h3 tag then grab all the game entries and log them into the pokemon object
 * 
 *  if there is an h3 tag, we need to create a new object and and title it by its name and then put the entries in it
 *  
 *  then check if there is another h3 tage and repeat step above, else cut out of the loop
 * 
 */
let index = 0; // 0 bulbasaur
const newPokemonArray = []; // this will be the final array that gets converted to the new json object

const scrapePokemonData = async () => {


    if (index > 897) { // 896 this means we are at calyrex even tho there are more now
        // convert JSON object to string
        const data_array = JSON.stringify(newPokemonArray, null, 2); // this makes it pretty

        // write JSON string to a file
        fs.writeFile('./02-jsons/02-pokedex.json', data_array, (error) => {
            if (error) {
                console.log(error);
            }
            console.log("JSON data is saved.");
        });
        return;
    } else {
        let pokemon = pokedex[index].name.english.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, '');

        if (index === 28) { pokemon += '-f' } // nidoran-f
        if (index === 31) { pokemon += '-m' } // nidoran-m
        if (index === 121) { pokemon = 'mr-mime'} // mr mime needs to be formatted mr-mime
        if (index === 249 ) { pokemon = 'ho-oh' } // ho oh to ho-oh
        if (index === 438 ) { pokemon = 'mime-jr' } // mime jr
        if (index === 473 ) { pokemon = 'porygon-z' } // porygon-z
        if (index === 668 ) { pokemon = 'flabebe' } // flabebe has accents in it
        if (index === 771 ) { pokemon = 'type-null' } // type: null
        if (index === 781 ) { pokemon = 'jangmo-o' } // type: null
        if (index === 782 ) { pokemon = 'hakamo-o' } // type: null
        if (index === 783 ) { pokemon = 'kommo-o' } // type: null
        if (index === 784 ) { pokemon = 'tapu-koko' } // type: null
        if (index === 785 ) { pokemon = 'tapu-lele' } // type: null
        if (index === 786 ) { pokemon = 'tapu-bulu' } // type: null
        if (index === 787 ) { pokemon = 'tapu-fini' } // type: null
        if (index === 865 ) { pokemon = 'mr-rime' } // type: null
    
        let URL = `https://pokemondb.net/pokedex/${pokemon}`;
    
        const currentPokemonObj = pokedex[index];
        const newPokedexObj = {};

        try {
            axios(URL)
                .then(response =>  {
                    const html = response.data;
                    // $(selector), [context], [root])
                    const $ = cheerio.load(html);
        
                const createNewPokedexObject = (obj, section, title, data) => {
                    switch(title) {
                        case 'RedBlue': 
                            obj[section]['rb'] = data;
                            break;
                        case 'Yellow': 
                            obj[section]['ye'] = data;
                            break;
                        case 'Silver': 
                            obj[section]['s'] = data;
                            break;
                        case 'Gold': 
                            obj[section]['g'] = data;
                            break;
                        case 'Crystal': 
                            obj[section]['c'] = data;
                            break;
                        case 'Ruby': 
                            obj[section]['ru'] = data;
                            break;
                        case 'Sapphire': 
                            obj[section]['sa'] = data;
                            break;
                        case 'RubySapphire': 
                            obj[section]['rs'] = data;
                            break;
                        case 'Emerald': 
                            obj[section]['e'] = data;
                            break;
                        case 'RubySapphireEmerald': 
                            obj[section]['rse'] = data;
                            break;
                        case 'FireRed': 
                            obj[section]['fr'] = data;
                            break;
                        case 'LeafGreen': 
                            obj[section]['lg'] = data;
                            break;
                        case 'FireRedLeafGreen': 
                            obj[section]['frlg'] = data;
                            break;
                        case 'Diamond': 
                            obj[section]['d'] = data;
                            break;
                        case 'Pearl': 
                            obj[section]['pe'] = data;
                            break;
                        case 'Platinum': 
                            obj[section]['pl'] = data;
                            break;
                        case 'DiamondPearl': 
                            obj[section]['dpe'] = data;
                            break;
                        case 'DiamondPlatinum': 
                            obj[section]['dpl'] = data;
                            break;
                        case 'DiamondPearlPlatinum': 
                            obj[section]['dpp'] = data;
                            break;
                        case 'HeartGold': 
                            obj[section]['hg'] = data;
                            break;
                        case 'SoulSilver': 
                            obj[section]['ss'] = data;
                            break;
                        case 'HeartGoldSoulSilver': 
                            obj[section]['hgss'] = data;
                            break;
                        case 'Black': 
                            obj[section]['b'] = data;
                            break;
                        case 'White': 
                            obj[section]['w'] = data;
                            break;
                        case 'BlackWhite': 
                            obj[section]['bw'] = data;
                            break;
                        case 'Black 2White 2': 
                            obj[section]['b2w2'] = data;
                            break;    
                        case 'BlackWhiteBlack 2White 2': 
                            obj[section]['bwb2w2'] = data;
                            break;                                
                        case 'X': 
                            obj[section]['x'] = data;
                            break;
                        case 'Y': 
                            obj[section]['y'] = data;
                            break;
                        case 'XY': 
                            obj[section]['xy'] = data;
                            break;
                        case 'XOmega Ruby': 
                            obj[section]['xor'] = data;
                            break;
                        case 'YAlpha Sapphire': 
                            obj[section]['yas'] = data;
                            break;
                        case 'Omega Ruby': 
                            obj[section]['or'] = data;
                            break;
                        case 'Alpha Sapphire': 
                            obj[section]['as'] = data;
                            break;
                        case 'Omega RubyAlpha Sapphire': 
                            obj[section]['oras'] = data;
                            break;
                        case 'Sun': 
                            obj[section]['sun'] = data;
                            break;
                        case 'Moon': 
                            obj[section]['mo'] = data;
                            break;
                        case 'Ultra Sun': 
                            obj[section]['us'] = data;
                            break;
                        case 'Ultra Moon': 
                            obj[section]['um'] = data;
                            break;
                        case 'SunUltra Sun': 
                            obj[section]['sus'] = data;
                            break;
                        case 'MoonUltra Moon': 
                            obj[section]['sus'] = data;
                            break;
                        case `Let's Go PikachuLet's Go Eevee`: 
                            obj[section]['lgplge'] = data;
                            break;
                        case 'Sword': 
                            obj[section]['sw'] = data;
                            break;
                        case 'Shield': 
                            obj[section]['sh'] = data;
                            break;
                        case 'ShieldBrilliant DiamondShining Pearl': 
                            obj[section]['shbdsp'] = data;
                            break;
                        case 'Brilliant Diamond': 
                            obj[section]['bd'] = data;
                            break;
                        case 'Shining Pearl': 
                            obj[section]['sp'] = data;
                            break;
                        case 'Brilliant DiamondShining Pearl': 
                            obj[section]['bdsp'] = data;
                            break;
                        case 'Legends: Arceus': 
                            obj[section]['la'] = data;
                            break;
                        default:
                            console.log(`You missed a case >>>>>>>>>>>>>> ${title}`)
                    }
                }
        
                /**
                 * This function takes the html table given to use and add it into a new object
                 * 
                 * @param {<table>} list 
                 * @param {obj_name} section 
                 */
                const addDataToPokemonObject = (list, section) => {
                    list.each((index, element) => {
                        const title = $(element).children('th').text();
                        const data = $(element).children('td').text(); 
                        createNewPokedexObject(newPokedexObj, section, title, data);                    
                    });
                }
        
                /**
                 * 
                 * @param {<>} element 
                 */
                const getPokedexEntries = (element) => {
                    const siblings = $(element).siblings('h3'); // if this comes back with nothing there is no h3 on the whole page
                    if ($(siblings).text() === '') {
                        newPokedexObj[pokemon] = {};
                        const listEntries = $(element).next().children('table').children('tbody').children('tr');
                        addDataToPokemonObject(listEntries, pokemon);
        
                    } else {
                        for (let index = 0; index < siblings.length; index++) {
                            const section = $(siblings[index]).text().toLowerCase();
                            newPokedexObj[section] = {};
                            const listEntries = $(siblings[index]).next().children('table').children('tbody').children('tr');
                            addDataToPokemonObject(listEntries, section);
                        }
                    }
                }
        
                /* Implement code here */
                const headings = $('h2');      
                headings.each((index, element) => {
                    const heading = $(element).text();
                    /**
                     * Pokedex entries
                     * 
                     *  Potientally all games
                     * 
                     */
                    if (heading === "Pok\u00E9dex entries") {
                        getPokedexEntries(element);
                    }

                    /**
                     * Pokedex data
                     * 
                     *  National number - Not needed
                     *  Type - not needed
                     *  Species - Could be used in the future, but not needed
                     *  Height
                     *  Weight
                     *  Abilities
                     *  Local No.
                     * 
                     */
                    if (heading === `Pok\u00E9dex data`) {
                        const listEntries = $(element).next('table').children('tbody').children('tr');
                        listEntries.each((index, element) => {
                            const title = $(element).children('th').text();
                            const data = $(element).children('td').text();
                            if (title === 'Height') {
                                currentPokemonObj.height = data;
                            }
                            if (title === 'Weight') {
                                currentPokemonObj.weight = data;
                            }
                        })

                    }
                    
                    /**
                     * Training section
                     * 
                     *  EV yield
                     *  Catch rate
                     *  Base friendhip
                     *  Base exp.
                     *  Growth rate
                     */
                    if (heading === `Training`) {

                        /* Creates a uppercase hex number with at least length digits from a given number */
                        function fixedHex(number, length) {
                            var str = number.toString(16).toUpperCase();
                            while (str.length < length)
                                str = "0" + str;
                            return str;
                        }

                        /* Creates a unicode literal based on the string */
                        function unicodeLiteral(str) {
                            var i;
                            var result = "";
                            for (i = 0; i < str.length; ++i) {
                                /* You should probably replace this by an isASCII test */
                                if (str.charCodeAt(i) > 126 || str.charCodeAt(i) < 32)
                                    result += "\\u" + fixedHex(str.charCodeAt(i), 4);
                                else
                                    result += str[i];
                            }

                            return result;
                        }


                        const listEntries = $(element).next('table').children('tbody').children('tr');
                        listEntries.each((index, element) => {
                            const title = $(element).children('th').text();
                            const data = $(element).children('td').text();
                            // console.log(`...${unicodeLiteral(data)}...`) // check for unicode literals
                            if (data === '\u2014' || data === '\u000A\u2014\u000A' || data === '\u000A\u2014 ') { 
                                // console.log('gotcha');
                            } else if (title === 'Growth Rate') {
                                currentPokemonObj.growthRate = data;
                            } else if (title === 'Base Friendship') {
                                let newData = data.replace(/[^0-9]/g, '');
                                currentPokemonObj.baseFriendship = Number(newData);
                            } else if (title === 'Catch rate') {
                                let newData = data.slice(0, 4);
                                newData = newData.replace(/[^0-9]/g, '');
                                currentPokemonObj.catchRate = Number(newData);
                            }
                        });
                    }

                    /**
                     * Breeding section
                     * 
                     *  Egg groups
                     *  Gender
                     *  Egg cycles
                     */
                    if (heading === `Breeding`) {
                        const listEntries = $(element).next('table').children('tbody').children('tr');
                        listEntries.each((index, element) => {
                            const title = $(element).children('th').text();
                            const data = $(element).children('td').text();
                            /*  */
                            if ((title === 'Egg groups') && (index >= 809)) { // start at 809 grookey
                                if (data === 'Undiscovered') {
                                    currentPokemonObj.genderRatio = 'Genderless';
                                } else {
                                    if (data.includes(',')) {
                                        let newData = data.split(',');
                                        if (newData[0]) {
                                            newData[0] = newData[0].replace(/[^a-zA-z]/g, '');
                                            currentPokemonObj.eggGroups.push(newData[0]);
                                        }
                                        if (newData[1]) {
                                            newData[1] = newData[1].replace(/[^a-zA-z]/g, '');
                                            currentPokemonObj.eggGroups.push(newData[1]);
                                        }
                                    } else {
                                        currentPokemonObj.eggGroups.push(data);
                                    }
                                }
                            }
                            if (title === 'Gender') {
                                if (data === 'Genderless') {
                                    currentPokemonObj.genderRatio = 'Genderless';
                                } else if (data !== '—') {
                                    let newData = data.split(',');
                                    newData[0] = newData[0].replace(/[^0-9.]/g, '');
                                    newData[1] = newData[1].replace(/[^0-9.]/g, '');
                                    newData = newData.join(':');
                                    currentPokemonObj.genderRatio = newData;
                                }
                            }
                            if ((title === 'Egg cycles') && (data !== '—')) {
                                let newData = data.slice(0, 3);
                                newData = newData.replace(/[^0-9]/g, '');
                                currentPokemonObj.eggCycles = Number(newData);
                            }
                        });
                    }
                    
                    if (heading.toLowerCase() === `where to find ${pokemon}`) {
                        
                    }

                    /**
                     * Other languages
                     */
                    if (heading === `Other languages`) {
                        const listEntries = $(element).next('div').children('table').children('tbody').children('tr');
                        listEntries.each((index, element) => {
                            const title = $(element).children('th').text();
                            const data = $(element).children('td').text();
                            if (title === 'German') {
                                currentPokemonObj.name.german = data;
                            }
                        });
                    }

                    /**
                     * Other languages
                     */
                    if (heading === `Name origin`) {
                        const nameOrigin = $(element).next('dl');
                        // if name orgin doesnt exist dont do antyhing
                        if (nameOrigin) {
                            const desc = $(nameOrigin).children('dt');
                            const meanings = $(nameOrigin).children('dd');
                            const descOne = $(desc[0]).text();
                            const descTwo = $(desc[1]).text();
                            const descThree = $(desc[2]).text(); // might not exsist
                            const meaningOne = $(meanings[0]).text();
                            const meaningTwo = $(meanings[1]).text();
                            const meaningThree = $(meanings[2]).text();
                            if (descOne) {
                                currentPokemonObj.nameOrigin[descOne] = meaningOne;
                            }
                            if (descTwo) {
                                currentPokemonObj.nameOrigin[descTwo] = meaningTwo;
                            }
                            if (descThree) {
                                currentPokemonObj.nameOrigin[descThree] = meaningThree;
                            }
                        }
                    }
                    // End code here
                });

                /**
                 * Code cleanup
                 * 
                 *  This is meant to better structure the exsisting JSON file
                 *  After this run make a new 03 file for future updates
                 */
                delete currentPokemonObj.pokedexNumber.bdsp;
                delete currentPokemonObj.pokedexNumber.la;
                delete currentPokemonObj.evolution;
                delete currentPokemonObj.sosCalling;
                if (index >= 809) {
                    delete currentPokemonObj.moves.gen_one;
                    delete currentPokemonObj.moves.gen_two;
                    delete currentPokemonObj.moves.gen_three;
                    delete currentPokemonObj.moves.gen_four;
                    delete currentPokemonObj.moves.gen_five;
                    delete currentPokemonObj.moves.gen_six;
                    delete currentPokemonObj.moves.gen_seven;
                } else if (index >= 721) {
                    delete currentPokemonObj.moves.gen_one;
                    delete currentPokemonObj.moves.gen_two;
                    delete currentPokemonObj.moves.gen_three;
                    delete currentPokemonObj.moves.gen_four;
                    delete currentPokemonObj.moves.gen_five;
                    delete currentPokemonObj.moves.gen_six;
                } else if (index >= 649) {
                    delete currentPokemonObj.moves.gen_one;
                    delete currentPokemonObj.moves.gen_two;
                    delete currentPokemonObj.moves.gen_three;
                    delete currentPokemonObj.moves.gen_four;
                    delete currentPokemonObj.moves.gen_five;
                } else if (index >= 493) {
                    delete currentPokemonObj.moves.gen_one;
                    delete currentPokemonObj.moves.gen_two;
                    delete currentPokemonObj.moves.gen_three;
                    delete currentPokemonObj.moves.gen_four;
                } else if (index >= 386) {
                    delete currentPokemonObj.moves.gen_one;
                    delete currentPokemonObj.moves.gen_two;
                    delete currentPokemonObj.moves.gen_three;
                } else if (index >= 251) {
                    delete currentPokemonObj.moves.gen_one;
                    delete currentPokemonObj.moves.gen_two;
                } else if (index >= 151) {
                    delete currentPokemonObj.moves.gen_one;
                }

                currentPokemonObj.pokedexEntries = newPokedexObj;
                newPokemonArray.push(currentPokemonObj);
                index++
                console.log(`Done ${pokemon}`)
                scrapePokemonData();
            })
        } catch (error) {
            console.error();
        }
    }
}

scrapePokemonData();

// app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`));