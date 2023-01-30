const { add } = require('cheerio/lib/api/traversing');
const dataFetcher = require('../../dataFetcher'),
pokedex = require('../../jsons/09-jsons/09-pokedex.json');

/**
 * Pokedex Overhaul 
 *  is designed to go through all exsisting data and find any issues
 *      - pokemon does not contain all the keys
 *      - pokemon is missing info
 *      - pokemon info is not compatible with current frontend format
 *  "_id": 23,
    "pokedexNumber": {},
    "name": {
      "english": "Ekans",
      "spanish": "Ekans",
      "italian": "Ekans",
      "japanese": "アーボ",
      "chinese": "阿柏蛇",
      "korean": "",
      "german": "Rettan",
      "french": "Abo"
    },
    "type": {
      "0": "Poison"
    },
    "abilities": {
      "1": "Intimidate",
      "2": "Shed-skin",
      "h": "Unnerve"
    },
    "species": "Snake Pokémon",
    "height": "2.0 m (6′07″)",
    "weight": "6.9 kg (15.2 lbs)",
    "catchRate": 255,
    "eggGroups": {
      "0": "Field",
      "1": "Dragon"
    },
    "genderRatio": "50:50",
    "eggCycles": 20,
    "baseFriendship": 50,
    "baseExp": 58,
    "growthRate": "Medium Fast",
    "baseStats": {
      "hp": 0,
      "atk": 0,
      "def": 0,
      "spatk": 0,
      "spdef": 0,
      "spd": 0
    },
    "evs": {},
    "pokedexEntries": {},
    "nameOrigin": {},
    "heldItem": null,
    "moves": {},
    "evolution": {
      "id": 9,
      "start": null
    },
    "generation": 1,
    "gameDropDown": []
  },
 */
const pokedexOverhaul = (oldData, newData, newArray, errors, checkObj) => {
    const addToCheckObj = (name, error) => {
        if (checkObj[name]){
            checkObj[name][error] = 'error';
        } else {
            checkObj[name] = {};
            checkObj[name][error] = 'error';
        }
    }, name = oldData.name.english;
    // fix and add all keys

    // pokedexNumber = {};
    if (!oldData.pokedexNumber) { 
        oldData.pokedexNumber = {};
    };
    // add types
    if (!oldData.type){
        oldData.type = {
            "0": '',
            "1": '',
        }
    }
    // add ablities
    if (!oldData.abilities){
        oldData.abilities = {
            "1": "",
            "2": "",
            "h": ""
        }
    }
    // add species
    if (!oldData.species){
        oldData.species = '';
    }
    // delete held item until we gather more data
    if (oldData.heldItem === null){
        delete oldData.heldItem;
    }
    // info object creation
    if (!oldData.height && !oldData.weight){
        oldData.height = "";
        oldData.weight = "";
        oldData.info = {
            height: oldData.height,
            weight: oldData.weight,
        }
        delete oldData.height;
        delete oldData.weight
    } else {
        oldData.info = {
            height: oldData.height,
            weight: oldData.weight,
        }
        delete oldData.height;
        delete oldData.weight
    }
    // change gender object
    // "genderRatio": "75:25",
    if (oldData.genderRatio === "Genderless"){
        oldData.gender = {
            male: '',
            female: '',
            genderless: true,
        }
        delete oldData.genderRatio;
    } else if (oldData.genderRatio){
       const genderRatio = oldData.genderRatio.split(':');
       oldData.gender = {
            male: `${genderRatio[0]}%`,
            female: `${genderRatio[1]}%`,
            genderless: false,
        }   
        delete oldData.genderRatio;
    } else {
        oldData.gender = {
            male: '',
            female: '',
            genderless: false,
        }
    }
    // baseStats
    if (!oldData.baseStats){
        oldData.baseStats = {
            hp: 0,
            atk: 0,
            def: 0,
            spatk: 0,
            spdef: 0,
            spd: 0
        }
    }
    // evs
    if (!oldData.evs){
        oldData.evs = {};
    }
    // evolution
    if(!oldData.evolution){
        oldData.evolution = 0
    } else {
        const evoNumber = oldData.evolution.id;
        delete oldData.evolution;
        oldData.evolution = evoNumber;
    }
    // eggGroups
    if (!oldData.eggGroups){
        addToCheckObj(name, 'eggGroups');
        oldData.eggGroups = {};
    }
    // catch rate
    if( oldData.catchRate === 0) {

    } else if (!oldData.catchRate){
        addToCheckObj(name, 'catchRate');
        oldData.catchRate = null;
    }
    // baseFrienship
    if (oldData.baseFriendship === 0) {

    } else if (!oldData.baseFriendship){
        addToCheckObj(name, 'baseFriendship');
        oldData.baseFriendship = null;
    }
    // growthRate
    if (!oldData.growthRate){
        addToCheckObj(name, 'growthRate');
        oldData.growthRate = null;
    }
    // eggCycles
    if (!oldData.eggCycles){
        addToCheckObj(name, 'eggCycles');
        oldData.eggCycles = null;
    }
    // nameOrigin
    if (!oldData.nameOrigin){
        addToCheckObj(name, 'nameOrigin');
        oldData.nameOrigin = {}
    }
    // pokedexEntries 
    if (!oldData.pokedexEntries){
        addToCheckObj(name, 'pokedexEntries');
        oldData.pokedexEntries = {};
    }
    // moves - everyone should have moves, even the legends arceus have scvi moves
    if (!oldData.moves){
        addToCheckObj(name, 'moves');
        oldData.moves = {};
    }
    // gamedropdown 
    if (!oldData.gameDropDown){
        addToCheckObj(name, 'gameDropDown');
        oldData.gameDropDown = [];
    }

    if(oldData.gameDropDown.length > 0){
        const newSortedArray = [],
        { gameDropDown } = oldData;
        gameDropDown.includes('Pokemon XD') ? newSortedArray.unshift({game:'Pokemon XD',query:'xd'}) : null;
        gameDropDown.includes('Pokemon Colosseum') ? newSortedArray.unshift({game:'Pokemon Colosseum',query:'colosseum'}) : null;
        gameDropDown.includes('Red & Blue') ? newSortedArray.unshift({game: 'Red & Blue',query:'red-blue'}) : null;
        gameDropDown.includes('Yellow') ? newSortedArray.unshift({game:'Yellow',query:'yellow'}) : null;
        gameDropDown.includes('Gold & Silver') ? newSortedArray.unshift({game:'Gold & Silver',query:'gold-silver'}) : null;
        gameDropDown.includes('Crystal') ? newSortedArray.unshift({game:'Crystal',query:'crystal'}) : null;
        gameDropDown.includes('Ruby & Sapphire') ? newSortedArray.unshift({game:'Ruby & Sapphire',query:'ruby-sapphire'}) : null;
        gameDropDown.includes('Emerald') ? newSortedArray.unshift({game:'Emerald',query:'emerald'}) : null;
        gameDropDown.includes('Fire Red & Leaf Green') ? newSortedArray.unshift({game:'Fire Red & Leaf Green',query:'firered-leafgreen'}) : null;
        gameDropDown.includes('Diamond & Pearl') ? newSortedArray.unshift({game:'Diamond & Pearl',query:'diamond-pearl'}) : null;
        gameDropDown.includes('Platinum') ? newSortedArray.unshift({game:'Platinum',query:'platinum'}) : null;
        gameDropDown.includes('Heart Gold & Soul Silver') ? newSortedArray.unshift({game:'HeartGold & SoulSilver',query:'heartgold-soulsilver'}) : null; 
        gameDropDown.includes('Black & White') ? newSortedArray.unshift({game:'Black & White',query:'black-white'}) : null;
        gameDropDown.includes('Black 2 & White 2') ? newSortedArray.unshift({game:'Black 2 & White 2',query:'black-2-white-2'}) : null;
        gameDropDown.includes('X & Y') ? newSortedArray.unshift({game:'X & Y',query:'x-y'}) : null;
        gameDropDown.includes('Omega Ruby & Alpha Shappire') ? newSortedArray.unshift({game:'Omega Ruby & Alpha Shappire',query:'omega-ruby-alpha-sapphire'}) : null;
        gameDropDown.includes('Sun & Moon') ? newSortedArray.unshift({game:'Sun & Moon',query:'sun-moon'}) : null;
        gameDropDown.includes('Ultra Sn & Ultra Moon') ? newSortedArray.unshift({game:'Ultra Sun & Ultra Moon',query:'ultra-sun-ultra-moon'}) : null;
        gameDropDown.includes(`Let's Go Pikachu & Eevee`) ? newSortedArray.unshift({game:`Let's Go Pikachu & Eevee`,query:'lets-go-pikachu-lets-go-eevee'}) : null;
        gameDropDown.includes('Sword & Shield') ? newSortedArray.unshift({game:'Sword & Shield',query:'sword-shield'}) : null;
        gameDropDown.includes('Scarlet & Violet') ? newSortedArray.unshift({game:'Scarlet & Violet',query:'scarlet-violet'}) : null;

        oldData.gameDropDown = newSortedArray;
    }

    const finalPokemonObject = {
        _id: oldData._id,
        name: oldData.name,
        pokedexNumber: oldData.pokedexNumber,
        type: oldData.type,
        abilities: oldData.abilities,
        baseStats: oldData.baseStats,
        info: oldData.info,
        gender: oldData.gender,
        evolution: oldData.evolution,
        generation: oldData.generation,
        evs: oldData.evs,
        eggGroups: oldData.eggGroups,
        species: oldData.species,
        catchRate: oldData.catchRate,
        baseFriendship: oldData.baseFriendship,
        baseExp: oldData.baseExp,
        growthRate: oldData.growthRate,
        eggCycles: oldData.eggCycles,
        nameOrigin: oldData.nameOrigin,
        gameDropDown: oldData.gameDropDown,
        pokedexEntries: oldData.pokedexEntries,
        moves: oldData.moves,
    }
    return finalPokemonObject;
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
    1007, // index to stop at - 1
    pokedex, // old data
    "../../jsons/10-jsons/10-pokedex.json", // new file write
    pokedexOverhaul, // function passed in
    true, // returnObj = true, returnArray = false || Defaults to true
);