/**
 * 02-14-2023 Verfied data is correct - Archer
 */
const articunoGalarian = {
  _id: 144.1,
  name: {
    english: "Articuno",
    spanish: "Articuno",
    italian: "Articuno",
    japanese: "フリーザー",
    chinese: "急冻鸟",
    korean: "",
    german: "Arktos",
    french: "Artikodin",
  },
  pokedexNumber: {
    ct: 202,
  },
  type: {
    one: "Psychic",
    two: "Flying",
  },
  abilities: {
    one: {
      name: "Competitive",
      id: 172,
    }
  },
  baseStats: {
    hp: 90,
    atk: 85,
    def: 85,
    spatk: 125,
    spdef: 100,
    spd: 95,
    total: 580,
  },
  info: {
    height: "1.7 m (5′07″)",
    weight: "50.9 kg (112.2 lbs)",
  },
  gender: {
    male: "",
    female: "",
    genderless: true,
  },
  evolution: null,
  generation: 8,
  evs: {
    spatk: 3,
  },
  eggGroups: ["Undiscovered"],
  species: "Cruel Pokémon",
  catchRate: 3,
  baseFriendship: 35,
  baseExp: 290,
  growthRate: "Slow",
  eggCycles: 120,
  nameOrigin: {
    arctic: "relating to the (cold) regions around the North Pole",
    uno: "Spanish for one",
  },
  gameDropDown: [
    {
      game: "Sword & Shield",
      query: "sword-shield",
    },
  ],
  pokedexEntries: {
    "galarian articuno": {
      sw: "Its feather-like blades are composed of psychic energy and can shear through thick iron sheets as if they were paper.",
      sh: "Known as Articuno, this Pokémon fires beams that can immobilize opponents as if they had been frozen solid.",
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
          name: "Psycho Shift",
          lvl: 1,
        },
        {
          name: "Confusion",
          lvl: 5,
        },
        {
          name: "Reflect",
          lvl: 10,
        },
        {
          name: "Hypnosis",
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
          name: "Tailwind",
          lvl: 30,
        },
        {
          name: "Psycho Cut",
          lvl: 35,
        },
        {
          name: "Recover",
          lvl: 40,
        },
        {
          name: "Freezing Glare",
          lvl: 45,
        },
        {
          name: "Dream Eater",
          lvl: 50,
        },
        {
          name: "Hurricane",
          lvl: 55,
        },
        {
          name: "Mind Reader",
          lvl: 60,
        },
        {
          name: "Future Sight",
          lvl: 65,
        },
        {
          name: "Trick Room",
          lvl: 70,
        },
      ],
      machine: [
        "Fly",
        'Hyper Beam',
        'Giga Impact',
        'Light Screen',
        'Reflect',
        'Rest',
        'Snore',
        'Protect',
        'Scary Face',
        'Steel Wing',
        'Facade',
        'Swift',
        'Imprison',
        'U-turn',
        'Power Swap',
        'Guard Swap',
        'Psycho Cut',
        'Trick Room',
        'Round',
        'Air Slash'
      ],
      record: [
        'Psychic',
        'Agility',
        'Substitute',
        'Psyshock',
        'Endure',
        'Sleep Talk',
        'Shadow Ball',
        'Future Sight',
        'Skill Swap',
        'Hyper Voice',
        'Calm Mind',
        'Brave Bird',
        'Stored Power',
        'Ally Switch',
        'Hurricane',
      ],
      tutor: ['Dual Wingbeat', 'Expanding Force'],
    }
  },
};
