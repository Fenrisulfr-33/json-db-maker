/**
 * 02-14-2023 Verfied data is correct - Archer
 */
const zigzagoonGalarian = {
  _id: 263.1,
  name: {
    english: "Zigzagoon",
    spanish: "Zigzagoon",
    italian: "Zigzagoon",
    japanese: "ジグザグマ",
    chinese: "蛇纹熊",
    korean: "",
    german: "Zigzachs",
    french: "Zigzaton",
  },
  pokedexNumber: {
    swsh: 31,
    ct: 71,
  },
  type: {
    one: "Dark",
    two: "Normal",
  },
  abilities: {
    one: {
      name: "Pickup",
      id: 53,
    },
    two: {
      name: "Gluttony",
      id: 82,
    },
    hidden: {
      name: "Quick Feet",
      id: 95,
    },
  },
  baseStats: {
    hp: 38,
    atk: 30,
    def: 41,
    spatk: 30,
    spdef: 41,
    spd: 60,
    total: 240,
  },
  info: {
    height: "0.4 m (1′04″)",
    weight: "17.5 kg (38.6 lbs)",
  },
  gender: {
    male: "50%",
    female: "50%",
    genderless: false,
  },
  evolution: 90,
  generation: 8,
  evs: {
    spd: 1,
  },
  eggGroups: ["Field"],
  species: "Tiny Raccoon Pokémon",
  catchRate: 255,
  baseFriendship: 50,
  baseExp: 56,
  growthRate: "Medium Fast",
  eggCycles: 15,
  nameOrigin: {
    zigzag: "line that sharply weaves back and forth",
    raccoon: "a small nocturnal carnivore",
  },
  gameDropDown: [
    {
      game: "Sword & Shield",
      query: "sword-shield",
    },
  ],
  pokedexEntries: {
    "galarian zigzagoon": {
      sw: "Its restlessness has it constantly running around. If it sees another Pokémon, it will purposely run into them in order to start a fight.",
      sh: "Thought to be the oldest form of Zigzagoon, it moves in zigzags and wreaks havoc upon its surroundings.",
    },
  },
  moves: {
    "sword-shield": {
        "level-up": [
            {name: 'Leer', lvl: 1},
            {name: 'Tackle', lvl: 1},
            {name: 'Sand Attack', lvl: 3},
            {name: 'Lick', lvl: 6},
            {name: 'Snarl', lvl: 9},
            {name: 'Headbutt', lvl: 12},
            {name: 'Baby-Doll Eyes', lvl: 15},
            {name: 'Pin Missile', lvl: 18},
            {name: 'Rest', lvl: 21},
            {name: 'Take Down', lvl: 24},
            {name: 'Scary Face', lvl: 27},
            {name: 'Counter', lvl: 30},
            {name: 'Taunt', lvl: 33},
            {name: 'Double-Edge', lvl: 36},
        ],
        egg: [
            'Knock Off',
            'Parting Shot',
            'Quick Guard'
        ],
        tutor: [
            'Lash Out',
        ],
        machine: [
            'Pin Missile',
            'Thunder Wave',
            'Dig',
            'Screech',
            'Rest',
            'Thief',
            'Snore',
            'Protect',
            'Scary Face',
            'Icy Wind',
            'Attract',
            'Rain Dance',
            'Sunny Day',
            'Whirlpool',
            'Facade',
            'Swift',
            'Helping Hand',
            'Fake Tears',
            'Mud Shot',
            'Payback',
            'Assurance',
            'Fling',
            'Round',
            'Retaliate',
            'Snarl'
        ],
        record: [
            'Body Slam',
            'Surf',
            'Ice Beam',
            'Blizzard',
            'Thunderbolt',
            'Thunder',
            'Substitute',
            'Endure',
            'Sleep Talk',
            'Iron Tail',
            'Shadow Ball',
            'Taunt',
            'Trick',
            'Hyper Voice',
            'Seed Bomb',
            'Gunk Shot',
            'Grass Knot',
            'Work Up'
        ]
    },
  },
};

module.exports = zigzagoonGalarian;
