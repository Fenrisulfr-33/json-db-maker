/**
 * 02-20-2023 Verfied data is correct - Archer
 */
const moltresGalarian = {
  _id: 146.1,
  name: {
    english: "Moltres",
    spanish: "Moltres",
    italian: "Moltres",
    japanese: "ファイヤー",
    chinese: "火焰鸟",
    korean: "",
    german: "Lavados",
    french: "Sulfura",
  },
  pokedexNumber: {
    ct: 204,
  },
  type: {
    one: "Dark",
    two: "Flying",
  },
  abilities: {
    one: {
      name: "Berserk",
      id: 201,
    },
  },
  baseStats: {
    hp: 90,
    atk: 85,
    def: 90,
    spatk: 100,
    spdef: 125,
    spd: 90,
    total: 580,
  },
  info: {
    height: "2.0 m (6′07″)",
    weight: "66.0 kg (145.5 lbs)",
  },
  gender: {
    male: "",
    female: "",
    genderless: true,
  },
  evolution: null,
  generation: 8,
  evs: {
    spdef: 3,
  },
  eggGroups: ["Undiscovered"],
  species: "Malevolent Pokémon",
  catchRate: 3,
  baseFriendship: 35,
  baseExp: 290,
  growthRate: "Slow",
  eggCycles: 120,
  nameOrigin: {
    molten: "liquified by heating",
    tres: "Spanish for three",
  },
  gameDropDown: [
    {
      game: "Sword & Shield",
      query: "sword-shield",
    },
  ],
  pokedexEntries: {
    "galarian moltres": {
      sw: "This Pokémon’s sinister, flame-like aura will consume the spirit of any creature it hits. Victims become burned-out shadows of themselves.",
      sh: "The sinister aura that blazes like molten fire around this Pokémon is what inspired the name Moltres.",
    },
  },
  moves: {
    "sword-shield": {
      "level-up": [
        {
          name: "Gust",
          lvl: 1,
        },
        {
          name: "Leer",
          lvl: 1,
        },
        {
          name: "Payback",
          lvl: 5,
        },
        {
          name: "Safeguard",
          lvl: 10,
        },
        {
          name: "Wing Attack",
          lvl: 15,
        },
        {
          name: "Agility",
          lvl: 20,
        },
        {
          name: "Ancient Power",
          lvl: 25,
        },
        {
          name: "Sucker Punch",
          lvl: 30,
        },
        {
          name: "Air Slash",
          lvl: 35,
        },
        {
          name: "After You",
          lvl: 40,
        },
        {
          name: "Fiery Wrath",
          lvl: 45,
        },
        {
          name: "Nasty Plot",
          lvl: 50,
        },
        {
          name: "Hurricane",
          lvl: 55,
        },
        {
          name: "Endure",
          lvl: 60,
        },
        {
          name: "Memento",
          lvl: 65,
        },
        {
          name: "Sky Attack",
          lvl: 70,
        },
      ],
      machine: [
        "Fly",
        "Hyper Beam",
        "Giga Impact",
        "Safeguard",
        "Rest",
        "Snore",
        "Protect",
        "Scary Face",
        "Steel Wing",
        "Facade",
        "Swift",
        "Imprison",
        "U-turn",
        "Payback",
        "Assurance",
        "Round",
        "Hex",
        "Snarl",
        "Air Slash",
      ],
      record: [
        "Agility",
        "Substitute",
        "Endure",
        "Sleep Talk",
        "Shadow Ball",
        "Taunt",
        "Hyper Voice",
        "Dark Pulse",
        "Brave Bird",
        "Nasty Plot",
        "Foul Play",
        "Hurricane",
      ],
      tutor: ["Dual Wingbeat", "Lash Out"],
    },
  },
};

module.exports = moltresGalarian;