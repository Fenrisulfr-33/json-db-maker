const axios = require("axios");
const cheerio = require("cheerio");
const express = require("express");
const pokedex = require("./01-jsons/01-pokedex.json");
const fs = require('fs')

const PORT = 8000;
const app = express(); 

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

    if (index > 896) { // 896 this means we are at calyrex even tho there are more now
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
                    if (heading === "Pok\u00E9dex entries") {
                        getPokedexEntries(element);
                    }
                });
                /* End of code here */
                // console.log(JSON.stringify(newPokedexObj, undefined, 2));
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