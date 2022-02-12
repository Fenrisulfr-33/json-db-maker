const fs = require('fs');
const fetch = require('node-fetch');
const moves = require('./00-jsons/00-moves.json');

/**
 * PURPOSE
 *  The purpose of this file is to take exsisting JSON objects, and extract or mutate the data into a different JSON file
 * 
 * WHY?
 *  Lets say you have 898 pokemon objects but you want to create a mongoDB and you want better data modeling
 *  Simply use this file to move data around and add new data into arrays or nested objects to better suit your needs.
 *  Would you rather go object by object for 898 objects, just to change 'id' to '_id'
 * 
 * EXAMPLE
 *  insert object
 *  output object
 * 
 * FUTURE GOALS
 *  insert API request to if you are missing data and another API has that data you can call that data when making the new object
 *      and insert data that was not previously obtained. Lets say you want the french or korean name, or abilities but, your current
 *      object doesnt contain it. Use the pokeapi and sort through there data and take what information you were missing.
 */


/**
 * ------------------- READ THIS PART ----------------------------
 * 
 * This is how the data is coming in, this will help you better understand how to take it apart
 * I got this by console logging pokedex[0], then copy and pasted it into a temp variable
 * 
 *      You can use this tempalte to test the function with one object into another before running the entires code
 * 
 *      Run:
 *      main_rewrite(_data_template_obj, _templateObj, array_rewritten);
 *      console.log(_templateObj);
 *      
 *      It will show you if everything is working as planned and you can make edits to the main_rewrite
 */

const _data_template_obj =     {
    "_id": null,
    "name": {
      "english": null,
      "japanese": null,
      "chinese": null,
      "korean": null,
      "german": null,
      "french": null,
      "italian": null,
      "spanish": null
    },
    "type": null,
    "category": null,
    "contest": null,
    "pp": null,
    "power": null,
    "accuracy": null,
    "contact": null,
    "generation": null,
    "target": null,
    "effects": [],
    "changes": [],
    "zMoveEffects": [],
    "descriptions": {
      "la": null,
      "bdsp": null,
      "smusumlgplge": null,
      "xyoras": null,
      "bwb2w2": null,
      "dpphgss": null,
      "frlg": null,
      "rse": null,
      "gsc": null,
      "rbyg": null
    }
}

const final = [];
let index = 0;
const fetcher = async () => {
    const POKE_API_URL = 'https://pokeapi.co/api/v2/';
    try {
        if (index > 825) { // current highest move available is 826, so 825
            // convert JSON object to string
            const data_array = JSON.stringify(final, null, 2); // this makes it pretty

            // write JSON string to a file
            fs.writeFile('./01-jsons/01-moves.json', data_array, (error) => {
                if (error) {
                    console.log(error);
                }
                console.log("JSON data is saved.");
            });
            return;
        }
        const response = await fetch(`${POKE_API_URL}move/${index+1}`);
        const data = await response.json();
        if (index + 1 > 590) { // for some reason 7 ar missing after 590
            _new_rewrite(data, final)
        } else {
            _main_rewrite(moves[index], data, final);
        }
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
 */
const _main_rewrite = (old_data, new_data, new_array) => {  
    if (new_data.contest_type) {
        old_data.contest = new_data.contest_type.name.charAt(0).toUpperCase() + new_data.contest_type.name.slice(1);
    }
    if (new_data.damage_class) {
        old_data.category = new_data.damage_class.name.charAt(0).toUpperCase() + new_data.damage_class.name.slice(1);
    }
    if (new_data.generation) {
        let generation = null;
        let gen = new_data.generation.name;
        if (gen === 'generation-viii') {generation = '8'}
        if (gen === 'generation-vii') {generation = '7'}
        if (gen === 'generation-vi') {generation = '6'}
        if (gen === 'generation-v') {generation = '5'}
        if (gen === 'generation-iv') {generation = '4'}
        if (gen === 'generation-iii') {generation = '3'}
        if (gen === 'generation-ii') {generation = '2'}
        if (gen === 'generation-i') {generation = '1'}
        old_data.generation = generation;
    }
    // update languages
    old_data.name.korean = new_data.names[1].name;
    old_data.name.german = new_data.names[5].name;
    old_data.name.french = new_data.names[4].name; 
    old_data.name.italian = new_data.names[7].name;
    old_data.name.spanish = new_data.names[6].name;
    old_data.target = new_data.target.name.charAt(0).toUpperCase() + new_data.target.name.slice(1);
    old_data.contact = new_data.damage_class.name === 'Status' ? 'No' : null;

    new_array.push(old_data)
}

const _new_rewrite = (data, new_array) => {
    // this is your new object with info you need
    const contact = data.damage_class.name === 'status' ? 'No' : null;
    let contest = null;
    let category = null;
    let generation = null;
    if (data.contest_type) {
        contest = data.contest_type.name;
    }
    if (data.damage_class) {
        category = data.damage_class.name;
    }
    if (data.generation) {
        let gen = data.generation.name;
        if (gen === 'generation-viii') {generation = '8'};
        if (gen === 'generation-vii') {generation = '7'};
        if (gen === 'generation-vi') {generation = '6'};
        if (gen === 'generation-v') {generation = '5'};
        if (gen === 'generation-iv') {generation = '4'};
        if (gen === 'generation-iii') {generation = '3'};
        if (gen === 'generation-ii') {generation = '2'};
        if (gen === 'generation-i') {generation = '1'};
    };

    const _templateObj = {
        _id: data.id, 
        name: {
            english: data.name.charAt(0).toUpperCase() + data.name.slice(1),
            japanese: data.names[0].name,
            chinese: data.names[2].name,
            korean: data.names[1].name,
            german: data.names[5].name,
            french: data.names[4].name, 
            italian: data.names[7].name, 
            spanish: data.names[6].name
        },
        type: data.type.name.charAt(0).toUpperCase() + data.type.name.slice(1),
        category: category.charAt(0).toUpperCase() + category.slice(1),
        contest: contest,
        pp: data.pp,
        power: data.power,
        accuracy: data.accuracy,
        contact: contact,
        generation: generation,
        target: data.target.name.charAt(0).toUpperCase() + data.target.name.slice(1),
        effects: [],
        changes: [],
        zMoveEffects: [],
        descriptions: {
            la: null,
            bdsp: null,
            smusumlgplge: null,
            xyoras: null, 
            bwb2w2: null, 
            dpphgss: null, 
            frlg: null, 
            rse: null, 
            gsc: null, 
            rbyg: null
        }
    }   

    new_array.push(_templateObj)
}