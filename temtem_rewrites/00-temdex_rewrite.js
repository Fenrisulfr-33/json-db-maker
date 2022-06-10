const fs = require('fs');
// need to run 'npm install node-fetch@2.6.1
const fetch = require('node-fetch');

/**
 * PURPOSE
 *  The purpose of this file is to take exsisting JSON objects, and extract or mutate the data into a different JSON file
 * 
 * WHY?
 *  The temtem api is great right now, but we can challenge ourselves to make it smaller. Having less data means better fetch times
 *  and while smaller isnt always better have two smaller sources can prove to be more efficent. Do not repeat yourself.
 * 
 * EXAMPLE
 *  insert object
 * 
 *      {
    "number": 113,
    "name": "Ganki",
    "types": [
      "Electric",
      "Wind"
    ],
    "portraitWikiUrl": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/b/bc/Ganki.png/50px-Ganki.png",
    "wikiUrl": "https://temtem.gamepedia.com/Ganki",
    "stats": {
      "hp": 38,
      "sta": 46,
      "spd": 61,
      "atk": 57,
      "def": 38,
      "spatk": 62,
      "spdef": 73,
      "total": 375
    },
    "traits": [
      "Botanophobia",
      "Cold-Natured"
    ],
    "details": {
      "height": {
        "cm": 105,
        "inches": 41
      },
      "weight": {
        "kg": 14,
        "lbs": 31
      }
    },
    "techniques": [
      {
        "name": "Sparks",
        "source": "Levelling",
        "levels": 1
      },
      {
        "name": "Nimble",
        "source": "Levelling",
        "levels": 3
      },
      {
        "name": "Wind Blade",
        "source": "Levelling",
        "levels": 5
      },
      {
        "name": "DC Beam",
        "source": "Levelling",
        "levels": 7
      },
      {
        "name": "Chain Lightning",
        "source": "Levelling",
        "levels": 16
      },
      {
        "name": "Drill Impact",
        "source": "Levelling",
        "levels": 22
      },
      {
        "name": "Electric Storm",
        "source": "Levelling",
        "levels": 32
      },
      {
        "name": "Turbo Choreography",
        "source": "TechniqueCourses"
      },
      {
        "name": "Misogi",
        "source": "TechniqueCourses"
      },
      {
        "name": "Noxious Bomb",
        "source": "TechniqueCourses"
      },
      {
        "name": "Tesla Prison",
        "source": "Breeding"
      }
    ],
    "trivia": [
      "Ganki was first revealed via Twitter.",
      "Ganki is a combination of ga (moth) + denki (electric current), both being Japanese words.",
      "Ganki has an emote on the official Temtem discord.",
      "Prior to alpha 0.2.5 Ganki learned hypnosis."
    ],
    "evolution": {
      "stage": 1,
      "evolutionTree": [
        {
          "number": 113,
          "name": "Ganki",
          "stage": 1,
          "levels": 27,
          "trading": false,
          "traitMapping": {
            "Botanophobia": "Receptive",
            "Cold-Natured": "Fast Charge"
          }
        },
        {
          "number": 114,
          "name": "Gazuma",
          "stage": 2,
          "traitMapping": {
            "Receptive": "Receptive",
            "Fast Charge": "Fast Charge"
          }
        }
      ],
      "evolves": true,
      "type": "level"
    },
    "wikiPortraitUrlLarge": "https://gamepedia.cursecdn.com/temtem_gamepedia_en/thumb/b/bc/Ganki.png/250px-Ganki.png?version=d18706728e9cc3706caea19e24063ac4",
    "locations": [
      {
        "location": "Thalassian Cliffs",
        "place": "Thalassian Cliffs",
        "note": "",
        "island": "Deniz",
        "frequency": "Common",
        "level": "5-8",
        "freetem": {
          "minLevel": 5,
          "maxLevel": 8,
          "minPansuns": 33,
          "maxPansuns": 40
        }
      },
      {
        "location": "Windward Fort",
        "place": "Windward Fort",
        "note": "",
        "island": "Deniz",
        "frequency": "Common",
        "level": "12-14",
        "freetem": {
          "minLevel": 12,
          "maxLevel": 14,
          "minPansuns": 50,
          "maxPansuns": 55
        }
      }
    ],
    "icon": "/images/portraits/temtem/large/Ganki.png",
    "lumaIcon": "/images/portraits/temtem/luma/large/Ganki.png",
    "genderRatio": {
      "male": 50,
      "female": 50
    },
    "catchRate": 120,
    "hatchMins": 21,
    "tvYields": {
      "hp": 0,
      "sta": 0,
      "spd": 0,
      "atk": 1,
      "def": 0,
      "spatk": 0,
      "spdef": 0
    },
    "gameDescription": "Many Cipanki legends mention the kind but powerful Ganki as mountain spirits, mythologically related to lightning and whirlwinds. Although they are no longer revered as kami, the Cipanki still appreciate and breed them.",
    "wikiRenderStaticUrl": "",
    "wikiRenderAnimatedUrl": "",
    "wikiRenderStaticLumaUrl": "",
    "wikiRenderAnimatedLumaUrl": "",
    "renderStaticImage": "",
    "renderStaticLumaImage": "",
    "renderAnimatedImage": "",
    "renderAnimatedLumaImage": ""
  }
 *  output object

 * 
 * FUTURE GOALS
 *  None right now
 */

let index = 1;
const final = [];
const fetcher = async () => {
    const TEMTEM_API_URL = 'https://temtem-api.mael.tech/api/temtems';
    try {
        if (index > 164) { // 164 current tem tem
            // convert JSON object to string
            const data_array = JSON.stringify(final, null, 2); // this makes it pretty
            // write JSON string to a file
            fs.writeFile('../00-jsons/00-temdex.json', data_array, (error) => {
                if (error) {
                    console.log(error);
                }
                console.log("JSON data is saved.");
            });
            return;
        }
        const response = await fetch(`${TEMTEM_API_URL}/${index}`);
        const data = await response.json();
        temDexRewrite(data, final);
        console.log(`-----Done ${index}-----`);
        index++
        fetcher();
    } catch (error) {
        console.log(error);
    }
}
fetcher();

const temDexRewrite = (incomingData, rewrittenList) => {
    const newData = {
        _id: incomingData.number,
        name: {
            english: incomingData.name
        },
        types: incomingData.types,
        stats: incomingData.stats,
        traits: incomingData.traits,
        details: incomingData.details,
        techniquies: {},
        trivia: incomingData.trivia,
        evolution: incomingData.evolution,
        locations: incomingData.locations,
        genderRatio: incomingData.genderRatio,
        catchRate: incomingData.catchRate,
        hatchMins: incomingData.hatchMins,
        tvYeilds: incomingData.tvYeilds,
        description: incomingData.gameDescription
    };
    
    rewrittenList.push(newData);
}