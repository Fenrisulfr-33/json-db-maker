const fs = require('fs');
const moves = require('./moves.json');

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

const _data_template_obj = {
        "accuracy": 100,
        "category": "物理",
        "cname": "拍击",
        "ename": "Pound",
        "id": 1,
        "jname": "はたく",
        "power": 40,
        "pp": 35,
        "type": "Normal"
}

/**
 * MAIN FUNCTION
 */
const main_rewrite = (data, new_array) => {
    // this is your new object with info you need
    const _templateObj = {
        _id: data.id, 
        name: {
            english: data.ename,
            japanese: data.jname,
            chinese: data.cname,
            korean: null,
            german: null,
            french: null, 
            italian: null, 
            spanish: null
        },
        type: data.type,
        category: null,
        contest: null,
        pp: data.pp,
        power: data.power,
        accuracy: data.accuracy,
        contact: null,
        generation: null,
        target: null,
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

const array_rewritten = [];

moves.forEach((move) => {
    main_rewrite(move, array_rewritten)
})

// convert JSON object to string
const data = JSON.stringify(array_rewritten, null, 2);

// write JSON string to a file
fs.writeFile('00-moves.json', data, (error) => {
    if (error) {
        throw err;
    }
    console.log("JSON data is saved.");
});

