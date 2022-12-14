const cheerio = require("cheerio");
const fs = require('fs')
const trainers = require('../data/bdsp_battle_tower_trainers');
const axios = require("axios");
/**
 * This web scrap gets the pokemon info by trainer to create a massive json document
 * 
 * this is a standard url
 * https://www.serebii.net/brilliantdiamondshiningpearl/battletower/singles/abbey.shtml
 */
const getAttacks = (string) => {
    //  'Attacks:Bullet PunchX-scissorRoostSwords Dance',
    const newString = string.slice(8).split('');
    let moveOne = '',
    moveTwo = '',
    moveThree = '',
    moveFour = '',
    counter = 0;
    newString.forEach((char, index) => {
        //do first word
        if (index === 0){ // skip
            moveOne += char;
        } else if (char === char.toUpperCase() && char !== ' ' && char !== '-'){
            // if letter is capped its a word
            if(newString[index - 1] === ' '){
                // keep going till next uppercase char
                if (counter === 0){
                    moveOne += char;
                } else if (counter === 1){
                    moveTwo += char;
                } else if (counter === 2){
                    moveThree += char;
                } else if (counter === 3){
                    moveFour += char;
                }
            } else {
                ++counter;
                if (counter === 0){
                    moveOne += char;
                } else if (counter === 1){
                    moveTwo += char;
                } else if (counter === 2){
                    moveThree += char;
                } else if (counter === 3){
                    moveFour += char;
                }
            }
        } else {
            if (counter === 0){
                moveOne += char;
            } else if (counter === 1){
                moveTwo += char;
            } else if (counter === 2){
                moveThree += char;
            } else if (counter === 3){
                moveFour += char;
            }
        }
    })
    return {
        one: moveOne,
        two: moveTwo,
        tre: moveThree,
        four: moveFour
    }
};

const getEvs = (string) => {
    const newString = string.slice(14).split(':');
    let hp = 0,
    atk = 0,
    def = 0,
    spAtk = 0,
    spDef = 0,
    spd = 0;
    const finalArray = [];
    newString.forEach((string, index) => {
        const testString = string.toLowerCase();
        if(/\d/.test(testString)){
            const numberArray = [];
            const stringArray = [];
            const arrayNew = testString.split('');
            arrayNew.shift(); // get rid of space
            arrayNew.forEach((char) => {
                if (Number(char) || char === '0'){
                    numberArray.push(char);
                } else {
                    if (char === '.'){
                        
                    } else {
                        stringArray.push(char);
                    }
                }
            });
            finalArray.push(numberArray.join(''));
            finalArray.push(stringArray.join(''));
        } else {
            finalArray.push(testString);
        }                                
    })
    finalArray.pop();
    finalArray.forEach((ev, index) => {
        if (index === 0 || index === 2 || index === 4){
            switch(ev){
                case 'hp':
                    hp = Number(finalArray[index + 1])
                    break;
                case 'atk':
                    atk = Number(finalArray[index + 1])
                    break;
                case 'def':
                    def = Number(finalArray[index + 1])
                    break;
                case 'satk':
                    spAtk = Number(finalArray[index + 1])
                    break;
                case 'sdef':
                    spDef = Number(finalArray[index + 1])
                    break;
                case 'spd':
                    spd = Number(finalArray[index + 1])
                    break;
            }
        }
    });
    return {
        hp,
        atk,
        def,
        spAtk,
        spDef,
        spd
    }
};

const newPokemonArray = [];
let index = 0;
const scrapePokemonData = async () => {
    if (index > trainers.singles.length - 1) { // 896 this means we are at calyrex even tho there are more now
        // convert JSON object to string
        const data_array = JSON.stringify(newPokemonArray, null, 2); // this makes it pretty
        // write JSON string to a file
        fs.writeFile('../07-jsons/bdsp-2.json', data_array, (error) => {
            if (error) {
                console.log(error);
            }
            console.log("JSON data is saved.");
        });
        return;
    } else {
        const currentTrainer = trainers.singles[index];
        currentTrainer.pokemonData = [];
        // https://www.serebii.net/brilliantdiamondshiningpearl/battletower/singles/roark.shtml
        let URL = `https://www.serebii.net/brilliantdiamondshiningpearl/battletower${currentTrainer.url}.shtml`;
        axios(URL)
            .then(response => {
                $ = cheerio.load(response.data),
                text = $.html(),
                headers = $('h3');
                headers.each((index, element) => {
                    const header = $(element).next() .next() .children('tbody') .children('tr') .children('td');
                    const team = [];
                    header.each((index, element) => {
                        const pokemon = $(element).children('table').children('tbody').children('tr');
                        pokemon.each((index, element) => {
                            const keys = $(element)
                            .children('td');
                            keys.each((index, element) => {
                                const values = $(element).text();
                                team.push(values);
                            }) 
                        })  
                    })
                    const abilty = team[3].slice(9),
                    heldItem = team[5].slice(10),
                    nature = team[6].slice(7),
                    pokemonOne = {
                        name: team[1],
                        abilty,
                        heldItem,
                        nature,
                        attacks: getAttacks(team[4]),
                        evs: getEvs(team[7]),
                    }, abilty2 = team[11].slice(9),
                    heldItem2 = team[13].slice(10),
                    nature2 = team[14].slice(7),
                    pokemonTwo = {
                        name: team[9],
                        abilty: abilty2, 
                        heldItem: heldItem2,               
                        nature: nature2,
                        moves: getAttacks(team[12]),
                        evs: getEvs(team[15]),
                    }, abilty3 = team[19].slice(9),
                    heldItem3 = team[21].slice(10),
                    nature3 = team[22].slice(7),
                    pokemonThree = {
                        name: team[17],
                        abilty: abilty3, 
                        heldItem: heldItem3,                      
                        nature: nature3,
                        moves: getAttacks(team[20]),
                        evs: getEvs(team[23]),
                    }
                    // console.log('One:', pokemonOne);
                    // console.log('Two:', pokemonTwo);
                    // console.log('Three:', pokemonThree);
                    const pokemonTeam = [pokemonOne, pokemonTwo, pokemonThree];
                    // console.log(`------`);
                    currentTrainer.pokemonData.push(pokemonTeam);  
                })
                newPokemonArray.push(currentTrainer);
                index++
                console.log(`Done ${index}`)
                scrapePokemonData();
        }).catch(error => {
            console.log(URL);
            console.log('something went wrong');
            // console.log(error.response);
        });
    }
}

scrapePokemonData();