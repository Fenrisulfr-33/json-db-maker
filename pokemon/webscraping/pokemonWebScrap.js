const axios = require("axios");
const cheerio = require("cheerio");
// const pokedex = require("../07-jsons/07-pokedex.json");
const fs = require('fs')
const dex = require('../../data/scarlet_violet');
const newPokemonArray = []; // this will be the final array that gets converted to the new json object

/**
 * Create a function that has every paramter of something you can get on a pokedex page from DB
 * then when you want to gather info and can put in true or false for what you want.
 */
let index = 0;
const scrapePokemonData = async () => {
    if (index > dex.scviDex.length - 1) {
    // if (index > 2) {

        // sort the array by _id first
        // sort(a , b) a < b  sort a before b
        // sort(a, b) a > b sort a after a
        console.log('Sorting...')
        const sortedNewPokemonArray = newPokemonArray.sort((a, b) => {
            if(a._id < b._id){
                return -1;
            }
        });
        console.log('Sorted');
        const data_array = JSON.stringify(sortedNewPokemonArray, null, 2); // this makes it pretty
        // write JSON string to a file
        fs.writeFile('../../jsons/08-jsons/08-pokedex.json', data_array, (error) => {
            if (error) {
                console.log(error);
            }
            console.log("JSON data is saved.");
        });
        return;
    } else {    
        const pokemon = dex.scviDex[index].toLowerCase();

        let URL = `https://pokemondb.net/pokedex/${pokemon}`;

        const newPokedexObj = {
            name: {
                english: dex.scviDex[index] 
            },
            pokedexNumber: {},
            eggGroups: [],
            nameOrigin: {},
        },
        currentPokemonObj = false;
        axios(URL)
            .then(response =>  {
                const html = response.data;
                const $ = cheerio.load(html);
    
            const createNewPokedexObject = (obj, section, title, data) => {
                switch(title) {
                    case 'Scarlet': 
                        obj.pokedexEntries[section]['scarlet'] = data;
                        break;
                    case 'Violet': 
                        obj.pokedexEntries[section]['violet'] = data;
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
                    newPokedexObj["pokedexEntries"] = {};
                    newPokedexObj.pokedexEntries[pokemon] = {};
                    const listEntries = $(element).next().children('table').children('tbody').children('tr');
                    addDataToPokemonObject(listEntries, pokemon);
    
                } else {
                    newPokedexObj["pokedexEntries"] = {};
                    for (let index = 0; index < siblings.length; index++) {
                        const section = $(siblings[index]).text().toLowerCase();
                        newPokedexObj.pokedexEntries[section] = {};
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
                            if (currentPokemonObj){
                                currentPokemonObj.height = data;
                            } else {
                                newPokedexObj.height = data;
                            }
                        } else if (title === 'Weight') {
                            if (currentPokemonObj){
                                currentPokemonObj.weight = data;
                            } else {
                                newPokedexObj.weight = data;
                            }
                        } else if (title === 'Species') {
                            if (currentPokemonObj){
                                currentPokemonObj.species = data;
                            } else {
                                newPokedexObj.species = data;
                            }
                        } else if (title === 'National №') {
                            if (currentPokemonObj){
                                currentPokemonObj._id = Number(data);
                            } else {
                                newPokedexObj._id = Number(data);
                            }
                        } else if (title === 'Local №') {
                            // need to put edge cases for all games and figure out type
                            const format = data.slice(0, 3);
                            if (currentPokemonObj){
                                currentPokemonObj.pokedexNumber.scvi = Number(format);
                            } else {
                                newPokedexObj.pokedexNumber.scvi = Number(format);
                            }
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
                    const listEntries = $(element).next('table').children('tbody').children('tr');
                    listEntries.each((index, element) => {
                        const title = $(element).children('th').text();
                        const data = $(element).children('td').text();
                        if (data === '\u2014' || data === '\u000A\u2014\u000A' || data === '\u000A\u2014 ') { 
                        } else if (title === 'Growth Rate') {
                            if (currentPokemonObj){
                                currentPokemonObj.growthRate = data;
                            } else {
                                newPokedexObj.growthRate = data;
                            }
                        } else if (title === 'Base Friendship') {
                            let newData = data.replace(/[^0-9]/g, '');
                            if (currentPokemonObj){
                                currentPokemonObj.baseFriendship = Number(newData);
                            } else {
                                newPokedexObj.baseFriendship = Number(newData);
                            }
                        } else if (title === 'Catch rate') {
                            let newData = data.slice(0, 4);
                            newData = newData.replace(/[^0-9]/g, '');
                            if (currentPokemonObj){
                                currentPokemonObj.catchRate = Number(newData);
                            } else {
                                newPokedexObj.catchRate = Number(newData);
                            }
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
                        if ((title === 'Egg groups') && (index >= 809)) { // start at 809 grookey
                            if (data === 'Undiscovered') {
                                if (currentPokemonObj){
                                    currentPokemonObj.genderRatio = 'Genderless';
                                } else {
                                    newPokedexObj.genderRatio = 'Genderless';
                                }
                            } else {
                                if (data.includes(',')) {
                                    let newData = data.split(',');
                                    if (newData[0]) {
                                        newData[0] = newData[0].replace(/[^a-zA-z]/g, '');
                                        if (currentPokemonObj){
                                            currentPokemonObj.eggGroups.push(newData[0]);
                                        } else {
                                            newPokedexObj.eggGroups.push(newData[0]);
                                        }
                                    }
                                    if (newData[1]) {
                                        newData[1] = newData[1].replace(/[^a-zA-z]/g, '');
                                        if (currentPokemonObj){
                                            currentPokemonObj.eggGroups.push(newData[1]);
                                        } else {
                                            newPokedexObj.eggGroups.push(newData[1]);
                                        }
                                    }
                                } else {
                                    if (currentPokemonObj){
                                        currentPokemonObj.eggGroups.push(data);
                                    } else {
                                        newPokedexObj.eggGroups.push(data);
                                    }
                                }
                            }
                        }
                        if (title === 'Gender') {
                            if (data === 'Genderless') {
                                if (currentPokemonObj){
                                    currentPokemonObj.genderRatio = 'Genderless';
                                } else {
                                    newPokedexObj.genderRatio = 'Genderless';
                                }
                            } else if (data !== '—') {
                                let newData = data.split(',');
                                newData[0] = newData[0].replace(/[^0-9.]/g, '');
                                newData[1] = newData[1].replace(/[^0-9.]/g, '');
                                newData = newData.join(':');
                                if (currentPokemonObj){
                                    currentPokemonObj.genderRatio = newData;
                                } else {
                                    newPokedexObj.genderRatio = newData;
                                }
                            }
                        }
                        if ((title === 'Egg cycles') && (data !== '—')) {
                            let newData = data.slice(0, 3);
                            newData = newData.replace(/[^0-9]/g, '');
                            if (currentPokemonObj){
                                currentPokemonObj.eggCycles = Number(newData);
                            } else {
                                newPokedexObj.eggCycles = Number(newData);
                            }
                        }
                    });
                }
                
                if (heading.toLowerCase() === `where to find ${pokemon}`) {
                    const listEntries = $(element).next('div').children('table').children('tbody').children('tr');
                    listEntries.each((index, element) => {
                        const title = $(element).children('th').text();
                        const data = $(element).children('td').text();
                        if (title === 'ScarletViolet'){
                            if (currentPokemonObj){
                                currentPokemonObj.whereToFind = {
                                    ...currentPokemonObj.whereToFind,
                                    scarlet: data,
                                    violet: data,
                                };
                                currentPokemonObj.whereToFind
                            } else {
                                newPokedexObj.whereToFind = {
                                    scarlet: data,
                                    violet: data,
                                }
                            }
                        }
                    });
                }

                if (heading === `Other languages`) {
                    const listEntries = $(element).next('div').children('table').children('tbody').children('tr');
                    listEntries.each((index, element) => {
                        const title = $(element).children('th').text();
                        const data = $(element).children('td').text();
                        if (title === 'German') {
                            if (currentPokemonObj){
                                currentPokemonObj.name.german = data;
                            } else {
                                newPokedexObj.name.german = data;
                            }
                        }
                    });
                }

                if (heading === `Name origin`) {
                    const nameOrigin = $(element).next('dl');
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
                            if (currentPokemonObj){
                                currentPokemonObj.nameOrigin[descOne] = meaningOne;
                            } else {
                                newPokedexObj.nameOrigin[descOne] = meaningOne;
                            }
                        }
                        if (descTwo) {
                            if (currentPokemonObj){
                                currentPokemonObj.nameOrigin[descTwo] = meaningTwo;
                            } else {
                                newPokedexObj.nameOrigin[descTwo] = meaningTwo;
                            }
                        }
                        if (descThree) {
                            if (currentPokemonObj){
                                currentPokemonObj.nameOrigin[descThree] = meaningThree;
                            } else {
                                newPokedexObj.nameOrigin[descThree] = meaningThree;
                            }
                        }
                    }
                }
                
                if (heading === `Base Stats`) {
                    const listEntries = $(element).next('table').children('tbody').children('tr');
                    listEntries.each((index, element) => {
                        const title = $(element).children('th').text();
                        const data = $(element).children('td').text();
                    });
                }
            });
            newPokemonArray.push(newPokedexObj);
            index++
            console.log(`Done ${pokemon}`)
            scrapePokemonData();
        }).catch((error) => {
            console.log(error);
        })
    }
}

scrapePokemonData();