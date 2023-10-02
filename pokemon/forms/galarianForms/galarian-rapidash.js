/**
 * 03-09-2023 Verfied data is correct - Archer
 */
const rapidashGalarian = {
  _id: 78.1,
  name: {
    english: "Rapidash",
    spanish: "Rapidash",
    italian: "Rapidash",
    japanese: "ギャロップ",
    chinese: "烈焰马",
    korean: "",
    german: "Gallopa",
    french: "Galopa",
  },
  pokedexNumber: {
    'sword-shield': 334,
  },
  type: {
    one: "Psychic",
    two: "Fairy",
  },
  abilities: {
    one: {
      name: "Run Away",
      id: 50,
    },
    two: {
      name: "Pastel Veil",
      id: 257,
    },
    hidden: {
      name: "Anticipation",
      id: 107,
    },
  },
  baseStats: {
    hp: 65,
    atk: 100,
    def: 70,
    spatk: 80,
    spdef: 80,
    spd: 105,
    total: 500,
  },
  info: {
    height: "1.7 m (5′07″)",
    weight: "80.0 kg (176.4 lbs)",
  },
  gender: {
    male: "50%",
    female: "50%",
    genderless: false,
  },
  evolution: 32,
  generation: 8,
  evs: {
    spd: 2,
  },
  eggGroups: ["Field"],
  species: "Unique Horn Pokémon",
  catchRate: 60,
  baseFriendship: 50,
  baseExp: 175,
  growthRate: "Medium Fast",
  eggCycles: 20,
  nameOrigin: {
    rapid: "fast",
    ash: "remains of a fire",
    dash: "move quickly",
  },
  gameDropDown: [
    {
      game: "Sword & Shield",
      query: "sword-shield",
    },
  ],
  pokedexEntries: {
    "galarian rapidash": {
      sw: "Little can stand up to its psycho cut. Unleashed from this Pokémon’s horn, the move will punch a hole right through a thick metal sheet.",
      sh: "Brave and prideful, this Pokémon dashes airily through the forest, its steps aided by the psychic power stored in the fur on its fetlocks.",
      la: "Snaps at its foes with fangs cloaked in blazing flame. Despite its bulk, it deftly feints every which way, leading opponents on a deceptively merry chase as it all but dances around them.",
    },
  },
  moves: {
    "sword-shield": {
      machine: [
        "Pay Day",
        "Hyper Beam",
        "Giga Impact",
        "Rest",
        "Snore",
        "Protect",
        "Charm",
        "Attract",
        "Facade",
        "Swift",
        "Imprison",
        "Bounce",
        "Psycho Cut",
        "Trick Room",
        "Wonder Room",
        "Magic Room",
        "Round",
        "Misty Terrain",
        "Psychic Terrain",
        "Mystical Fire",
        "Smart Strike",
      ],
      "level-up": [
        {
          name: "Confusion",
          lvl: 1,
        },
        {
          name: "Growl",
          lvl: 1,
        },
        {
          name: "Megahorn",
          lvl: 1,
        },
        {
          name: "Psycho Cut",
          lvl: 1,
        },
        {
          name: "Quick Attack",
          lvl: 1,
        },
        {
          name: "Tackle",
          lvl: 1,
        },
        {
          name: "Tail Whip",
          lvl: 1,
        },
        {
          name: "Fairy Wind",
          lvl: 15,
        },
        {
          name: "Agility",
          lvl: 20,
        },
        {
          name: "Psybeam",
          lvl: 25,
        },
        {
          name: "Stomp",
          lvl: 30,
        },
        {
          name: "Heal Pulse",
          lvl: 35,
        },
        {
          name: "Take Down",
          lvl: 43,
        },
        {
          name: "Dazzling Gleam",
          lvl: 49,
        },
        {
          name: "Psychic",
          lvl: 56,
        },
        {
          name: "Healing Wish",
          lvl: 63,
        },
      ],
      evolution: ["Psycho Cut"],
      tutor: ["Expanding Force"],
      egg: [
        'Double Kick',
        'Double-Edge',
        'Horn Drill',
        'Hypnosis',
        'Morning Sun',
        'Thrash'
      ],
      record: [
        "Swords Dance",
        "Body Slam",
        "Low Kick",
        "Psychic",
        "Agility",
        "Substitute",
        "Endure",
        "Sleep Talk",
        "Megahorn",
        "Baton Pass",
        "Iron Tail",
        "Future Sight",
        "Calm Mind",
        "Zen Headbutt",
        "Stored Power",
        "Ally Switch",
        "Wild Charge",
        "Drill Run",
        "Play Rough",
        "Dazzling Gleam",
        "High Horsepower",
        "Throat Chop",
      ]
    },
  },
};

module.exports = rapidashGalarian;
