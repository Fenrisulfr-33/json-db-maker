/**
 * 02-13-2023 Verfied data is correct - Archer
 */
const slowpokeGalarian = {
  _id: 79.1,
  name: {
    english: "Slowpoke",
    spanish: "Slowpoke",
    italian: "Slowpoke",
    japanese: "ヤドン",
    chinese: "呆呆兽",
    korean: "",
    german: "Flegmon",
    french: "Ramoloss",
  },
  pokedexNumber: {
    ioa: 1,
  },
  type: {
    one: "Psychic",
  },
  abilities: {
    one: {
      name: "Gluttony",
      id: 82,
    },
    two: {
      name: "Own Tempo",
      id: 20,
    },
    hidden: {
      name: "Regenerator",
      id: 144,
    },
  },
  baseStats: {
    hp: 90,
    atk: 65,
    def: 65,
    spatk: 40,
    spdef: 40,
    spd: 15,
    total: 315,
  },
  info: {
    height: "1.2 m (3′11″)",
    weight: "36.0 kg (79.4 lbs)",
  },
  gender: {
    male: "50%",
    female: "50%",
    genderless: false,
  },
  evolution: 33,
  generation: 8,
  evs: {
    hp: 1,
  },
  eggGroups: ["Monster", "Water 1"],
  species: "Dopey Pokémon",
  catchRate: 190,
  baseFriendship: 50,
  baseExp: 63,
  growthRate: "Medium Fast",
  eggCycles: 20,
  nameOrigin: {
    slow: "not fast",
    slowpoke: "nickname for a slow person",
  },
  gameDropDown: [
    {
      game: "Sword & Shield",
      query: "sword-shield",
    },
  ],
  pokedexEntries: {
    "Galarian Slowpoke": {
      sw: "Although this Pokémon is normally zoned out, its expression abruptly sharpens on occasion. The cause for this seems to lie in Slowpoke’s diet.",
      sh: "Because Galarian Slowpoke eat the seeds of a plant that grows only in Galar, their tails have developed a spicy flavor.",
    },
  },
  moves: {
    "sword-shield": {
      "level-up": [
        { name: "Curse", lvl: 1 },
        { name: "Tackle", lvl: 1 },
        { name: "Growl", lvl: 3 },
        { name: "Acid", lvl: 6 },
        { name: "Yawn", lvl: 9 },
        { name: "Confusion", lvl: 12 },
        { name: "Disable", lvl: 15 },
        { name: "Water Pulse", lvl: 18 },
        { name: "Headbutt", lvl: 21 },
        { name: "Zen Headbutt", lvl: 24 },
        { name: "Amnesia", lvl: 27 },
        { name: "Surf", lvl: 30 },
        { name: "Slack Off", lvl: 33 },
        { name: "Psychic", lvl: 36 },
        { name: "Psych Up", lvl: 39 },
        { name: "Rain Dance", lvl: 42 },
        { name: "Heal Pulse", lvl: 45 },
      ],
      egg: ["Belch", "Belly Drum", "Block", "Stomp"],
      tutor: ["Expanding Force"],
      machine: [
        "Pay Day",
        "Thunder Wave",
        "Dig",
        "Light Screen",
        "Safeguard",
        "Rest",
        "Snore",
        "Protect",
        "Icy Wind",
        "Attract",
        "Rain Dance",
        "Sunny Day",
        "Hail",
        "Whirlpool",
        "Facade",
        "Swift",
        "Imprison",
        "Dive",
        "Weather Ball",
        "Mud Shot",
        "Brine",
        "Trick Room",
        "Wonder Room",
        "Round",
        "Bulldoze",
        "Psychic Terrain",
      ],
      record: [
        "Body Slam",
        "Flamethrower",
        "Hydro Pump",
        "Surf",
        "Ice Beam",
        "Blizzard",
        "Earthquake",
        "Psychic",
        "Fire Blast",
        "Amnesia",
        "Tri Attack",
        "Substitute",
        "Psyshock",
        "Endure",
        "Sleep Talk",
        "Iron Tail",
        "Shadow Ball",
        "Future Sight",
        "Trick",
        "Skill Swap",
        "Calm Mind",
        "Zen Headbutt",
        "Grass Knot",
        "Stored Power",
        "Scald",
        "Liquidation",
      ],
    },
  },
};

module.exports = slowpokeGalarian;