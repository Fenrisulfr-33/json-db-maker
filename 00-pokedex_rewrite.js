const fs = require('fs');
// need to run 'npm install node-fetch@2.6.1
const fetch = require('node-fetch');
// data objects
const pokedex = require('./og-jsons/pokedex.json');

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

const _data_template_obj = { // this is from pokedex.json index 0
    "id": 1,
    "name": {
      "english": "Bulbasaur",
      "japanese": "\u30d5\u30b7\u30ae\u30c0\u30cd",
      "chinese": "\u5999\u86d9\u79cd\u5b50",
      "french": "Bulbizarre"
    },
    "type": [
      "Grass",
      "Poison"
    ],
    "base": {
      "HP": 45,
      "Attack": 49,
      "Defense": 49,
      "Sp. Attack": 65,
      "Sp. Defense": 65,
      "Speed": 45
    },
    "species": "Seed Pok\u00e9mon",
    "description": "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun\u2019s rays, the seed grows progressively larger.",
    "evolution": {
      "next": [
        [
          "2",
          "Level 16"
        ]
      ]
    },
    "profile": {
      "height": "0.7 m",
      "weight": "6.9 kg",
      "egg": [
        "Monster",
        "Grass"
      ],
      "ability": [
        [
          "Overgrow",
          "false"
        ],
        [
          "Chlorophyll",
          "true"
        ]
      ],
      "gender": "87.5:12.5"
    },
    "image": {},
    "sprite": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/001.png",
    "thumbnail": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/001.png",
    "hires": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/001.png"
    // change this to be './images/pokedex/hires/'001.png'
};

/**
 * MAIN FUNCTION
 * 
 *  This re writes any json data you input into a new template or form into an array, or object with keys mimicing id
 * @param {array} data - the JSON array indivdual object
 * @param {array} new_array - is the array you wish to store your new data in
 * @param {object} new_obj - is the object you wish to store your new data in
 */
const main_rewrite = (data, new_array, new_obj) => {
    
    const _templateObj = {
        _id: data.id,
        pokedexNumber: {
            bdsp: null,
            la: null
        },
        name: {
            // enlgish, spanish, and italian all have the same name
            english: data.name.english,
            spanish: data.name.english,
            italian: data.name.english,
            japanese: data.name.japanese,
            chinese: data.name.chinese,
            korean: "",
            german: "",
            french: data.name.french
        },
        type: data.type,
        abilities: {   // this has to do with forms
            1: "",
            2: "",
            h: ""
        },
        evolution: { // this needs work
            previous: null,
            current: null,
            next: null,
            final: null
        },
        species: data.species,
        height: {
            meters: data.profile.height.replace(" m", "")
        },
        weight: {
            kg: data.profile.weight.replace(" kg", "")
        },
        catchRate: null,
        eggGroups: data.profile.egg,
        genderRatio: {
            male: null,
            female: null
        },
        eggCycles: null,
        baseFriendship: null,
        baseExp: null,
        growthRate: "",
        baseStats: {
            hp: null,
            atk: null,
            def: null,
            spatk: null,
            spdef: null,
            spd: null
        },
        evs: {},
        moves: {
          gen_one: {
            rb: {
              levelUp: [],
              egg: [],
              machine: [],
              tutor: []
            },
            y: {
              levelUp: [],
              egg: [],
              machine: [],
              tutor: []
            }
          },
          gen_two: {
            gs: {
              levelUp: [],
              egg: [],
              machine: [],
              tutor: []
            },
            c: {
              levelUp: [],
              egg: [],
              machine: [],
              tutor: []
            }
          },
          gen_three: {
            rs: {
              levelUp: [],
              egg: [],
              machine: [],
              tutor: []
            },
            e: {
              levelUp: [],
              egg: [],
              machine: [],
              tutor: []
            },
            frlg: {
              levelUp: [],
              egg: [],
              machine: [],
              tutor: []
            }
          },
          gen_four: {
            dp: {
              levelUp: [],
              egg: [],
              machine: [],
              tutor: []
            },
            p: {
              levelUp: [],
              egg: [],
              machine: [],
              tutor: []
            },
            hgss: {
              levelUp: [],
              egg: [],
              machine: [],
              tutor: []
            }
          },
          gen_five: {
            bw: {
              levelUp: [],
              egg: [],
              machine: [],
              tutor: []
            },
            b2w2: {
              levelUp: [],
              egg: [],
              machine: [],
              tutor: []
            }
          },
          gen_six: {
            xy: {
              levelUp: [],
              egg: [],
              machine: [],
              tutor: []
            },
            oras: {
              levelUp: [],
              egg: [],
              machine: [],
              tutor: []
            }
          },
          gen_seven: {
            sm: {
              levelUp: [],
              egg: [],
              machine: [],
              tutor: []
            },
            usum: {
              levelUp: [],
              egg: [],
              machine: [],
              tutor: []
            },
            lelp: {
              levelUp: [],
              egg: [],
              machine: [],
              tutor: []
            }
          },
          gen_eight: {
            swsh: {
              levelUp: [],
              egg: [],
              machine: [],
              tutor: []
            },
            bdsp: {
              levelUp: [],
              egg: [],
              machine: [],
              tutor: []
            },
            la: {
              levelUp: [],
              egg: [],
              machine: [],
              tutor: []
            }
          }
        },
        pokedexEntries: {
            rb: null,
            y: null,
            g: null,
            s: null,
            c: null,
            rse: null,
            fr: null,
            lg: null,
            dpp: null,
            hg: null,
            ss: null,
            bw: null,
            b2w2: null,
            x: null,
            y: null,
            oras: null,
            lple: null,
            sw: null,
            sh: null,
            bd: null,
            sp: null,
            la: null
        },
        locations: {
            bdsp: []
        },
        nameOrigin: {},
        heldItem: null,
        sosCalling: {
            first: null
        }
    };

    // transfer over base stats
    // Had to add the if statments because not every object had base states
    if (data.base) {
        _templateObj.baseStats.hp = data.base.HP; // Hp base stat
        _templateObj.baseStats.atk = data.base.Attack; // Hp base stat
        _templateObj.baseStats.def = data.base.Defense; // Hp base stat
        _templateObj.baseStats.spatk = data.base["Sp. Attack"]; // Hp base stat
        _templateObj.baseStats.spdef = data.base["Sp. Defense"]; // Hp base stat
        _templateObj.baseStats.spd = data.base.Speed; // Hp base stat
    }       

    // If you want an array use this line belower
    new_array.push(_templateObj)
    // If you want and object use this line below
    // new_obj[data.id] = new_obj;
}

/**
 * NEW ARRAY OR OBJECT
 */
const array_rewritten = []; // This is our new array we will convert into json
const object_rewritten = {};

/**
 * PROCESS
 * 
 * This goes through every object in the data array and converts it into a new object
 */
pokedex.forEach((pokemon) => {
    main_rewrite(pokemon, array_rewritten, object_rewritten)
})

// convert JSON object to string
const data_array = JSON.stringify(array_rewritten, null, 2); // this makes it pretty
// HAVING ISSUES CONVERTING INTO JSON BECAUSE OF THE CIRCULAR ERROR
// const data_object = JSON.stringify(object_rewritten); 

// write JSON string to a file
fs.writeFile('./00-jsons/00-pokedex.json', data_array, (error) => {
    if (error) {
        throw err;
    }
    console.log("JSON data is saved.");
});

// write JSON string to a file
// fs.writeFile('00-pokedex-o.json', data_object, (error) => {
//     if (error) {
//         console.log(error);
//     }
//     console.log("JSON data is saved.");
// });