const ponytaGalarian = {
  _id: 77,
  name: {
    english: "Ponyta",
    spanish: "Ponyta",
    italian: "Ponyta",
    japanese: "ポニータ",
    chinese: "小火马",
    korean: "",
    german: "Ponita",
    french: "Ponyta",
  },
  pokedexNumber: {
    swsh: 333,
  },
  type: {
    one: "Fire",
  },
  abilities: {
    one: {
      name: "Run Away",
      id: 50,
    },
    two: {
      name: "Flash Fire",
      id: 18,
    },
    hidden: {
      name: "Flame Body",
      id: 49,
    },
  },
  baseStats: {
    hp: 50,
    atk: 85,
    def: 55,
    spatk: 65,
    spdef: 65,
    spd: 90,
    total: 410,
  },
  info: {
    height: "0.8 m (2′07″)",
    weight: "24.0 kg (52.9 lbs)",
  },
  gender: {
    male: "50%",
    female: "50%",
    genderless: false,
  },
  evolution: 32,
  generation: 1,
  evs: {
    spd: 1,
  },
  eggGroups: ["Field"],
  species: "Fire Horse Pokémon",
  catchRate: 190,
  baseFriendship: 50,
  baseExp: 82,
  growthRate: "Medium Fast",
  eggCycles: 20,
  nameOrigin: {
    pony: "a small horse",
    ponytail: "a hairstyle that resembles a pony’s tail",
  },
  gameDropDown: [
    {
      game: "Sword & Shield",
      query: "sword-shield",
    },
  ],
  pokedexEntries: {
    "galarian ponyta": {
      sw: "Its small horn hides a healing power. With a few rubs from this Pokémon’s horn, any slight wound you have will be healed.",
      sh: "This Pokémon will look into your eyes and read the contents of your heart. If it finds evil there, it promptly hides away.",
      la: "They patrol their territory in pairs. I believe the igneous rock components in the fur of this species are the result of volcanic activity in its habitat.",
    },
  },
  moves: {
    "sword-shield": {
      "level-up": [
        {
          name: "Tackle",
          lvl: 1,
        },
        {
          name: "Growl",
          lvl: 1,
        },
        {
          name: "Tail Whip",
          lvl: 5,
        },
        {
          name: "Ember",
          lvl: 10,
        },
        {
          name: "Flame Charge",
          lvl: 15,
        },
        {
          name: "Agility",
          lvl: 20,
        },
        {
          name: "Flame Wheel",
          lvl: 25,
        },
        {
          name: "Stomp",
          lvl: 30,
        },
        {
          name: "Fire Spin",
          lvl: 35,
        },
        {
          name: "Take Down",
          lvl: 41,
        },
        {
          name: "Inferno",
          lvl: 45,
        },
        {
          name: "Fire Blast",
          lvl: 50,
        },
        {
          name: "Flare Blitz",
          lvl: 55,
        },
      ],
      egg: [
        "Double Kick",
        "Horn Drill",
        "Thrash",
        "Double-Edge",
        "Hypnosis",
        "Morning Sun",
      ],
      machine: [
        "Body Slam",
        "Flamethrower",
        "Low Kick",
        "Solar Beam",
        "Fire Spin",
        "Agility",
        "Fire Blast",
        "Swift",
        "Rest",
        "Substitute",
        "Snore",
        "Protect",
        "Endure",
        "Charm",
        "Attract",
        "Sleep Talk",
        "Iron Tail",
        "Sunny Day",
        "Heat Wave",
        "Will-O-Wisp",
        "Facade",
        "Overheat",
        "Bounce",
        "Flare Blitz",
        "Round",
        "Ally Switch",
        "Wild Charge",
        "Play Rough",
        "Mystical Fire",
        "High Horsepower",
        "Solar Blade",
      ],
    },
  },
};

module.exports = ponytaGalarian;
