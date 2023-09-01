/**
 * 02-22-2023 Verfied data is correct - Archer
 */
const darumakaGalarian = {
  _id: 554.1,
  name: {
    english: "Darumaka",
    spanish: "Darumaka",
    italian: "Darumaka",
    japanese: "ダルマッカ",
    chinese: "火红不倒翁",
    korean: "",
    german: "Flampion",
    french: "Darumarond",
  },
  pokedexNumber: {
    'sword-shield': 367,
    'crown-tundra': 103,
  },
  type: {
    one: "Ice",
  },
  abilities: {
    one: {
      name: "Hustle",
      id: 55,
    },
    hidden: {
      name: "Inner Focus",
      id: 39,
    },
  },
  baseStats: {
    hp: 70,
    atk: 90,
    def: 45,
    spatk: 15,
    spdef: 45,
    spd: 50,
    total: 315,
  },
  info: {
    height: "0.7 m (2′04″)",
    weight: "40.0 kg (88.2 lbs)",
  },
  gender: {
    male: "50%",
    female: "50%",
    genderless: false,
  },
  evolution: 191,
  generation: 8,
  evs: {
    atk: 1,
  },
  eggGroups: ["Field"],
  species: "Zen Charm Pokémon",
  catchRate: 120,
  baseFriendship: 50,
  baseExp: 63,
  growthRate: "Medium Slow",
  eggCycles: 20,
  nameOrigin: {
    daruma: "daruma doll, a traditional Japanese doll",
    makka: "Japanese for ‘red/crimson’",
  },
  gameDropDown: [
    {
      game: "Sword & Shield",
      query: "sword-shield",
    },
  ],
  pokedexEntries: {
    "galarian darumaka": {
      sw: "It lived in snowy areas for so long that its fire sac cooled off and atrophied. It now has an organ that generates cold instead.",
      sh: "The colder they get, the more energetic they are. They freeze their breath to make snowballs, using them as ammo for playful snowball fights.",
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
          name: "Powder Snow",
          lvl: 1,
        },
        {
          name: "Taunt",
          lvl: 4,
        },
        {
          name: "Bite",
          lvl: 8,
        },
        {
          name: "Avalanche",
          lvl: 12,
        },
        {
          name: "Work Up",
          lvl: 16,
        },
        {
          name: "Ice Fang",
          lvl: 20,
        },
        {
          name: "Headbutt",
          lvl: 24,
        },
        {
          name: "Ice Punch",
          lvl: 28,
        },
        {
          name: "Uproar",
          lvl: 32,
        },
        {
          name: "Belly Drum",
          lvl: 36,
        },
        {
          name: "Blizzard",
          lvl: 40,
        },
        {
          name: "Thrash",
          lvl: 44,
        },
        {
          name: "Superpower",
          lvl: 48,
        },
      ],
      egg: [
        "Take Down",
        "Flame Wheel",
        "Focus Punch",
        "Yawn",
        "Freeze-Dry",
        "Hammer Arm",
        "Power-Up Punch",
        "Incinerate",
      ],
      machine: [
        "Mega Punch",
        "Mega Kick",
        "Fire Punch",
        "Ice Punch",
        "Solar Beam",
        "Fire Spin",
        "Dig",
        "Rest",
        "Rock Slide",
        "Thief",
        "Snore",
        "Protect",
        "Attract",
        "Sunny Day",
        "Will-O-Wisp",
        "Facade",
        "Brick Break",
        "Rock Tomb",
        "U-turn",
        "Fling",
        "Avalanche",
        "Ice Fang",
        "Fire Fang",
        "Round",
      ],
      record: [
        "Flamethrower",
        "Ice Beam",
        "Blizzard",
        "Focus Energy",
        "Fire Blast",
        "Substitute",
        "Endure",
        "Sleep Talk",
        "Encore",
        "Uproar",
        "Heat Wave",
        "Taunt",
        "Superpower",
        "Overheat",
        "Gyro Ball",
        "Flare Blitz",
        "Zen Headbutt",
        "Grass Knot",
        "Work Up",
      ],
    },
  },
};

module.exports = darumakaGalarian;
