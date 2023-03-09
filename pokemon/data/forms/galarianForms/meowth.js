/**
 * 02-23-2023 Verfied data is correct - Archer
 */
const meowthGalarian = {
  _id: 52.2,
  name: {
    english: "Meowth",
    spanish: "Meowth",
    italian: "Meowth",
    japanese: "ニャース",
    chinese: "喵喵",
    korean: "",
    german: "Mauzi",
    french: "Miaouss",
  },
  pokedexNumber: {
    swsh: 182,
  },
  type: {
    one: "Steel",
  },
  abilities: {
    one: {
      name: "Pickup",
      id: 53,
    },
    two: {
      name: "Tough Claws",
      id: 181,
    },
    hidden: {
      name: "Unnerve",
      id: 127,
    },
  },
  baseStats: {
    hp: 50,
    atk: 65,
    def: 55,
    spatk: 40,
    spdef: 40,
    spd: 50,
    total: 290,
  },
  info: {
    height: "0.4 m (1′04″)",
    weight: "7.5 kg (16.5 lbs)",
  },
  gender: {
    male: "50%",
    female: "50%",
    genderless: false,
  },
  evolution: 22,
  generation: 8,
  evs: {
    atk: 1,
  },
  eggGroups: ["Field"],
  species: "Scratch Cat Pokémon",
  catchRate: 255,
  baseFriendship: 50,
  baseExp: 58,
  growthRate: "Medium Fast",
  eggCycles: 20,
  nameOrigin: {
    meow: "the sound a cat makes",
  },
  gameDropDown: [
    {
      game: "Sword & Shield",
      query: "sword-shield",
    },
  ],
  pokedexEntries: {
    "galarian meowth": {
      sw: "Living with a savage, seafaring people has toughened this Pokémon’s body so much that parts of it have turned to iron.",
      sh: "These daring Pokémon have coins on their foreheads. Darker coins are harder, and harder coins garner more respect among Meowth.",
    },
  },
  moves: {
    "sword-shield": {
      "level-up": [
        {
          name: "Growl",
          lvl: 1,
        },
        {
          name: "Fake Out",
          lvl: 1,
        },
        {
          name: "Hone Claws",
          lvl: 4,
        },
        {
          name: "Scratch",
          lvl: 8,
        },
        {
          name: "Pay Day",
          lvl: 12,
        },
        {
          name: "Metal Claw",
          lvl: 16,
        },
        {
          name: "Taunt",
          lvl: 20,
        },
        {
          name: "Swagger",
          lvl: 24,
        },
        {
          name: "Fury Swipes",
          lvl: 29,
        },
        {
          name: "Screech",
          lvl: 32,
        },
        {
          name: "Slash",
          lvl: 36,
        },
        {
          name: "Metal Sound",
          lvl: 40,
        },
        {
          name: "Thrash",
          lvl: 44,
        },
      ],
      machine: [
        "Pay Day",
        "Dig",
        "Screech",
        "Rest",
        "Thief",
        "Snore",
        "Protect",
        "Icy Wind",
        "Charm",
        "Attract",
        "Rain Dance",
        "Sunny Day",
        "Facade",
        "Swift",
        "U-turn",
        "Payback",
        "Assurance",
        "Shadow Claw",
        "Round",
        "Retaliate"
      ],
      egg: [
        "Covet",
        "Curse",
        "Double-Edge",
        "Flail",
        "Night Slash",
        "Spite"
      ],
      tutor: ["Lash Out"],
      record: [
        "Swords Dance",
        "Body Slam",
        "Thunderbolt",
        "Thunder",
        "Amnesia",
        "Substitute",
        "Endure",
        "Sleep Talk",
        "Iron Tail",
        "Crunch",
        "Shadow Ball",
        "Uproar",
        "Taunt",
        "Hyper Voice",
        "Iron Defense",
        "Gyro Ball",
        "Dark Pulse",
        "Seed Bomb",
        "Nasty Plot",
        "Gunk Shot",
        "Iron Head",
        "Foul Play",
        "Work Up",
        "Play Rough",
        "Throat Chop",
      ]
    },
  },
};

module.exports = meowthGalarian;