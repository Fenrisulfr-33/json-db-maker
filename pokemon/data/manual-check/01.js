const bulbasaur = {
  _id: 1,
  name: {
    english: "Bulbasaur",
    spanish: "Bulbasaur",
    italian: "Bulbasaur",
    japanese: "フシギダネ",
    chinese: "妙蛙种子",
    korean: "이상해씨",
    german: "Bisasam",
    french: "Bulbizarre",
  },
  pokedexNumber: {
    ioa: 68,
  },
  type: {
    one: "Grass",
    two: "Poison",
  },
  abilities: {
    one: {
      name: "Overgrow",
      id: 65,
    },
    hidden: {
      name: "Chlorophyll",
      id: 34,
    },
  },
  baseStats: { // generate min max on backend and push to front end
    hp: 45,
    atk: 49,
    def: 49,
    spatk: 65,
    spdef: 65,
    spd: 45,
    total: 318,
  },
  info: {
    height: "0.7 m (2′04″)",
    weight: "6.9 kg (15.2 lbs)",
  },
  gender: {
    male: "87.5%",
    female: "12.5%",
    genderless: false,
  },
  evolution: 1,
  generation: 1,
  evs: {
    spatk: 1,
  },
  eggGroups: ["Monster", "Grass"],
  species: "Seed Pokémon",
  catchRate: 45,
  baseFriendship: 50,
  baseExp: 64,
  growthRate: "Medium Slow",
  eggCycles: 20,
  nameOrigin: {
    bulb: "a type of plant",
    "-saur": "Greek suffix meaning ‘lizard’",
  },
  gameDropDown: [
    {
      game: "Sword & Shield",
      query: "sword-shield",
    },
    {
      game: "Let's Go Pikachu & Eevee",
      query: "lets-go-pikachu-lets-go-eevee",
    },
    {
      game: "Ultra Sun & Ultra Moon",
      query: "ultra-sun-ultra-moon",
    },
    {
      game: "Sun & Moon",
      query: "sun-moon",
    },
    {
      game: "Omega Ruby & Alpha Shappire",
      query: "omega-ruby-alpha-sapphire",
    },
    {
      game: "X & Y",
      query: "x-y",
    },
    {
      game: "Black 2 & White 2",
      query: "black-2-white-2",
    },
    {
      game: "Black & White",
      query: "black-white",
    },
    {
      game: "HeartGold & SoulSilver",
      query: "heartgold-soulsilver",
    },
    {
      game: "Platinum",
      query: "platinum",
    },
    {
      game: "Diamond & Pearl",
      query: "diamond-pearl",
    },
    {
      game: "Fire Red & Leaf Green",
      query: "firered-leafgreen",
    },
    {
      game: "Emerald",
      query: "emerald",
    },
    {
      game: "Ruby & Sapphire",
      query: "ruby-sapphire",
    },
    {
      game: "Crystal",
      query: "crystal",
    },
    {
      game: "Gold & Silver",
      query: "gold-silver",
    },
    {
      game: "Yellow",
      query: "yellow",
    },
    {
      game: "Red & Blue",
      query: "red-blue",
    },
    {
      game: "Pokemon Colosseum",
      query: "colosseum",
    },
    {
      game: "Pokemon XD",
      query: "xd",
    },
  ],
  pokedexEntries: {
    bulbasaur: {
      rb: "A strange seed was planted on its back at birth. The plant sprouts and grows with this POKéMON.",
      ye: "It can go for days without eating a single morsel. In the bulb on its back, it stores energy.",
      g: "The seed on its back is filled with nutrients. The seed grows steadily larger as its body grows.",
      s: "It carries a seed on its back right from birth. As it grows older, the seed also grows larger.",
      c: "While it is young, it uses the nutrients that are stored in the seeds on its back in order to grow.",
      rse: "BULBASAUR can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun’s rays, the seed grows progressively larger.",
      fr: "There is a plant seed on its back right from the day this POKéMON is born. The seed slowly grows larger.",
      lg: "A strange seed was planted on its back at birth. The plant sprouts and grows with this POKéMON.",
      dpp: "For some time after its birth, it grows by gaining nourishment from the seed on its back.",
      hg: "The seed on its back is filled with nutrients. The seed grows steadily larger as its body grows.",
      ss: "It carries a seed on its back right from birth. As it grows older, the seed also grows larger.",
      bwb2w2:
        "For some time after its birth, it grows by gaining nourishment from the seed on its back.",
      x: "A strange seed was planted on its back at birth. The plant sprouts and grows with this Pokémon.",
      y: "For some time after its birth, it grows by gaining nourishment from the seed on its back.",
      oras: "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun’s rays, the seed grows progressively larger.",
      lgplge:
        "It can go for days without eating a single morsel. In the bulb on its back, it stores energy.",
      sw: "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
      sh: "While it is young, it uses the nutrients that are stored in the seed on its back in order to grow.",
      bdsp: "For some time after its birth, it grows by taking nourishment from the seed on its back.",
    },
  },
  moves: {
    "red-blue": {
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
            name: "Leech Seed",
            lvl: 7,
            },
            {
            name: "Vine Whip",
            lvl: 13,
            },
            {
            name: "Poison Powder",
            lvl: 20,
            },
            {
            name: "Razor Leaf",
            lvl: 27,
            },
            {
            name: "Growth",
            lvl: 34,
            },
            {
            name: "Sleep Powder",
            lvl: 41,
            },
            {
            name: "Solar Beam",
            lvl: 48,
            },
        ],
        'machine': [
            'Cut',
            "Swords Dance",
            "Toxic",
            "Body Slam",
            "Take Down",
            "Double-Edge",
            "Rage",
            "Mega Drain",
            "Solar Beam",
            "Mimic",
            "Double Team",
            "Reflect",
            "Bide",
            "Rest",
            "Substitute",
        ]
    },
    yellow: {
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
            name: "Leech Seed",
            lvl: 7,
        },
        {
            name: "Vine Whip",
            lvl: 13,
        },
        {
            name: "Poison Powder",
            lvl: 20,
        },
        {
            name: "Razor Leaf",
            lvl: 27,
        },
        {
            name: "Growth",
            lvl: 34,
        },
        {
            name: "Sleep Powder",
            lvl: 41,
        },
        {
            name: "Solar Beam",
            lvl: 48,
        },
        ],
        'machine': [
          'Cut',
          "Swords Dance",
          "Toxic",
          "Body Slam",
          "Take Down",
          "Double-Edge",
          "Rage",
          "Mega Drain",
          "Solar Beam",
          "Mimic",
          "Double Team",
          "Reflect",
          "Bide",
          "Rest",
          "Substitute",
        ]
    },
    "gold-silver": {
      "level-up": [
            {
                name: "Tackle",
                lvl: 1,
            },
            {
                name: "Growl",
                lvl: 4,
            },
            {
                name: "Leech Seed",
                lvl: 7,
            },
            {
                name: "Vine Whip",
                lvl: 10,
            },
            {
                name: "Poison Powder",
                lvl: 15,
            },
            {
                name: "Sleep Powder",
                lvl: 15,
            },
            {
                name: "Razor Leaf",
                lvl: 20,
            },
            {
                name: "Sweet Scent",
                lvl: 25,
            },
            {
                name: "Growth",
                lvl: 32,
            },
            {
                name: "Synthesis",
                lvl: 39,
            },
            {
                name: "Solar Beam",
                lvl: 46,
            },
      ],
      egg: [
        "Razor Wind",
        "Petal Dance",
        "Light Screen",
        "Skull Bash",
        "Charm",
        "Safeguard",
      ],
      'machine': [
        'Cut',
        'Flash',
        "Headbutt",
        "Curse",
        "Toxic",
        "Hidden Power",
        "Sunny Day",
        "Sweet Scent",
        "Snore",
        "Protect",
        "Giga Drain",
        "Double Team",
        "Defense Curl",
        "Rest",
        "Solar Beam",
        "Mud-Slap",
        "Endure",
        "Swagger",
        "Fury Cutter",
        "Attract",
        "Sleep Talk",
        "Return",
        "Frustration",
      ]
    },
    crystal: {
      egg: [
        "Razor Wind",
        "Petal Dance",
        "Light Screen",
        "Skull Bash",
        "Safeguard",
      ],
      'machine': [
        'Cut',
        'Flash',
        "Headbutt",
        "Solar Beam",
        "Toxic",
        "Double Team",
        "Defense Curl",
        "Rest",
        "Snore",
        "Curse",
        "Protect",
        "Mud-Slap",
        "Giga Drain",
        "Endure",
        "Swagger",
        "Fury Cutter",
        "Attract",
        "Sleep Talk",
        "Return",
        "Frustration",
        "Sweet Scent",
        "Hidden Power",
        "Sunny Day",
      ],
      "level-up": [
        {
          name: "Tackle",
          lvl: 1,
        },
        {
          name: "Growl",
          lvl: 4,
        },
        {
          name: "Leech Seed",
          lvl: 7,
        },
        {
          name: "Vine Whip",
          lvl: 10,
        },
        {
          name: "Poison Powder",
          lvl: 15,
        },
        {
          name: "Sleep Powder",
          lvl: 15,
        },
        {
          name: "Razor Leaf",
          lvl: 20,
        },
        {
          name: "Sweet Scent",
          lvl: 25,
        },
        {
          name: "Growth",
          lvl: 32,
        },
        {
          name: "Synthesis",
          lvl: 39,
        },
        {
          name: "Solar Beam",
          lvl: 46,
        },
      ],
    },
    "ruby-sapphire": {
        machine: [
          "Cut",
          "Strength",
          "Solar Beam",
          "Toxic",
          "Double Team",
          "Flash",
          "Rest",
          "Protect",
          "Sludge Bomb",
          "Giga Drain",
          "Attract",
          "Return",
          "Frustration",
          "Hidden Power",
          "Sunny Day",
          "Rock Smash",
          "Facade",
          "Secret Power",
          "Bullet Seed",
        ],
        "level-up": [
          {
            name: "Tackle",
            lvl: 1,
          },
          {
            name: "Growl",
            lvl: 4,
          },
          {
            name: "Leech Seed",
            lvl: 7,
          },
          {
            name: "Vine Whip",
            lvl: 10,
          },
          {
            name: "Poison Powder",
            lvl: 15,
          },
          {
            name: "Sleep Powder",
            lvl: 15,
          },
          {
            name: "Razor Leaf",
            lvl: 20,
          },
          {
            name: "Sweet Scent",
            lvl: 25,
          },
          {
            name: "Growth",
            lvl: 32,
          },
          {
            name: "Synthesis",
            lvl: 39,
          },
          {
            name: "Solar Beam",
            lvl: 46,
          },
        ],
        egg: [
          "Petal Dance",
          "Light Screen",
          "Skull Bash",
          "Curse",
          "Charm",
          "Safeguard",
          "Grass Whistle",
          "Magical Leaf",
        ],
    },
    emerald: {
      tutor: [
        "Swords Dance",
        "Body Slam",
        "Double-Edge",
        "Mimic",
        "Defense Curl",
        "Substitute",
        "Snore",
        "Mud-Slap",
        "Endure",
        "Swagger",
        "Fury Cutter",
        "Sleep Talk",
      ],
      machine: [
        "Cut",
        "Strength",
        "Solar Beam",
        "Toxic",
        "Double Team",
        "Flash",
        "Rest",
        "Protect",
        "Sludge Bomb",
        "Giga Drain",
        "Attract",
        "Return",
        "Frustration",
        "Hidden Power",
        "Sunny Day",
        "Rock Smash",
        "Facade",
        "Secret Power",
        "Bullet Seed",
      ],
      "level-up": [
        {
          name: "Tackle",
          lvl: 1,
        },
        {
          name: "Growl",
          lvl: 4,
        },
        {
          name: "Leech Seed",
          lvl: 7,
        },
        {
          name: "Vine Whip",
          lvl: 10,
        },
        {
          name: "Poison Powder",
          lvl: 15,
        },
        {
          name: "Sleep Powder",
          lvl: 15,
        },
        {
          name: "Razor Leaf",
          lvl: 20,
        },
        {
          name: "Sweet Scent",
          lvl: 25,
        },
        {
          name: "Growth",
          lvl: 32,
        },
        {
          name: "Synthesis",
          lvl: 39,
        },
        {
          name: "Solar Beam",
          lvl: 46,
        },
      ],
      egg: [
        "Petal Dance",
        "Light Screen",
        "Skull Bash",
        "Curse",
        "Charm",
        "Safeguard",
        "Grass Whistle",
        "Magical Leaf",
      ],
    },
    "firered-leafgreen": {
      tutor: [
        "Swords Dance",
        "Body Slam",
        "Double-Edge",
        "Mimic",
        "Substitute",
      ],
      machine: [
        "Cut",
        "Strength",
        "Solar Beam",
        "Toxic",
        "Double Team",
        "Flash",
        "Rest",
        "Protect",
        "Sludge Bomb",
        "Giga Drain",
        "Attract",
        "Return",
        "Frustration",
        "Hidden Power",
        "Sunny Day",
        "Rock Smash",
        "Facade",
        "Secret Power",
        "Bullet Seed",
      ],
      "level-up": [
        {
          name: "Tackle",
          lvl: 1,
        },
        {
          name: "Growl",
          lvl: 4,
        },
        {
          name: "Leech Seed",
          lvl: 7,
        },
        {
          name: "Vine Whip",
          lvl: 10,
        },
        {
          name: "Poison Powder",
          lvl: 15,
        },
        {
          name: "Sleep Powder",
          lvl: 15,
        },
        {
          name: "Razor Leaf",
          lvl: 20,
        },
        {
          name: "Sweet Scent",
          lvl: 25,
        },
        {
          name: "Growth",
          lvl: 32,
        },
        {
          name: "Synthesis",
          lvl: 39,
        },
        {
          name: "Solar Beam",
          lvl: 46,
        },
      ],
      egg: [
        "Petal Dance",
        "Light Screen",
        "Skull Bash",
        "Curse",
        "Charm",
        "Safeguard",
        "Grass Whistle",
        "Magical Leaf",
      ],
    },
    "diamond-pearl": {
      machine: [
        "Swords Dance",
        "Cut",
        "Strength",
        "Solar Beam",
        "Toxic",
        "Double Team",
        "Flash",
        "Rest",
        "Substitute",
        "Protect",
        "Sludge Bomb",
        "Giga Drain",
        "Endure",
        "Swagger",
        "Attract",
        "Sleep Talk",
        "Return",
        "Frustration",
        "Hidden Power",
        "Sunny Day",
        "Rock Smash",
        "Facade",
        "Secret Power",
        "Bullet Seed",
        "Natural Gift",
        "Energy Ball",
        "Captivate",
        "Grass Knot",
      ],
      "level-up": [
        {
          name: "Tackle",
          lvl: 1,
        },
        {
          name: "Growl",
          lvl: 3,
        },
        {
          name: "Leech Seed",
          lvl: 7,
        },
        {
          name: "Vine Whip",
          lvl: 9,
        },
        {
          name: "Poison Powder",
          lvl: 13,
        },
        {
          name: "Sleep Powder",
          lvl: 13,
        },
        {
          name: "Take Down",
          lvl: 15,
        },
        {
          name: "Razor Leaf",
          lvl: 19,
        },
        {
          name: "Sweet Scent",
          lvl: 21,
        },
        {
          name: "Growth",
          lvl: 25,
        },
        {
          name: "Double-Edge",
          lvl: 27,
        },
        {
          name: "Worry Seed",
          lvl: 31,
        },
        {
          name: "Synthesis",
          lvl: 33,
        },
        {
          name: "Seed Bomb",
          lvl: 37,
        },
      ],
      egg: [
        "Petal Dance",
        "Light Screen",
        "Skull Bash",
        "Amnesia",
        "Curse",
        "Charm",
        "Safeguard",
        "Nature Power",
        "Ingrain",
        "Grass Whistle",
        "Magical Leaf",
        "Leaf Storm",
      ],
    },
    platinum: {
      machine: [
        "Swords Dance",
        "Cut",
        "Strength",
        "Solar Beam",
        "Toxic",
        "Double Team",
        "Flash",
        "Rest",
        "Substitute",
        "Protect",
        "Sludge Bomb",
        "Giga Drain",
        "Endure",
        "Swagger",
        "Attract",
        "Sleep Talk",
        "Return",
        "Frustration",
        "Hidden Power",
        "Sunny Day",
        "Rock Smash",
        "Facade",
        "Secret Power",
        "Bullet Seed",
        "Natural Gift",
        "Energy Ball",
        "Captivate",
        "Grass Knot",
      ],
      "level-up": [
        {
          name: "Tackle",
          lvl: 1,
        },
        {
          name: "Growl",
          lvl: 3,
        },
        {
          name: "Leech Seed",
          lvl: 7,
        },
        {
          name: "Vine Whip",
          lvl: 9,
        },
        {
          name: "Poison Powder",
          lvl: 13,
        },
        {
          name: "Sleep Powder",
          lvl: 13,
        },
        {
          name: "Take Down",
          lvl: 15,
        },
        {
          name: "Razor Leaf",
          lvl: 19,
        },
        {
          name: "Sweet Scent",
          lvl: 21,
        },
        {
          name: "Growth",
          lvl: 25,
        },
        {
          name: "Double-Edge",
          lvl: 27,
        },
        {
          name: "Worry Seed",
          lvl: 31,
        },
        {
          name: "Synthesis",
          lvl: 33,
        },
        {
          name: "Seed Bomb",
          lvl: 37,
        },
      ],
      egg: [
        "Petal Dance",
        "Light Screen",
        "Skull Bash",
        "Amnesia",
        "Curse",
        "Charm",
        "Safeguard",
        "Nature Power",
        "Ingrain",
        "Grass Whistle",
        "Magical Leaf",
        "Leaf Storm",
      ],
      tutor: [
        "Snore",
        "Mud-Slap",
        "Fury Cutter",
        "Synthesis",
        "Knock Off",
        "Seed Bomb",
      ],
    },
    "heartgold-soulsilver": {
      machine: [
        "Swords Dance",
        "Cut",
        "Strength",
        "Solar Beam",
        "Toxic",
        "Double Team",
        "Flash",
        "Rest",
        "Substitute",
        "Protect",
        "Sludge Bomb",
        "Giga Drain",
        "Endure",
        "Swagger",
        "Attract",
        "Sleep Talk",
        "Return",
        "Frustration",
        "Hidden Power",
        "Sunny Day",
        "Rock Smash",
        "Facade",
        "Secret Power",
        "Bullet Seed",
        "Natural Gift",
        "Energy Ball",
        "Captivate",
        "Grass Knot",
      ],
      "level-up": [
        {
          name: "Tackle",
          lvl: 1,
        },
        {
          name: "Growl",
          lvl: 3,
        },
        {
          name: "Leech Seed",
          lvl: 7,
        },
        {
          name: "Vine Whip",
          lvl: 9,
        },
        {
          name: "Poison Powder",
          lvl: 13,
        },
        {
          name: "Sleep Powder",
          lvl: 13,
        },
        {
          name: "Take Down",
          lvl: 15,
        },
        {
          name: "Razor Leaf",
          lvl: 19,
        },
        {
          name: "Sweet Scent",
          lvl: 21,
        },
        {
          name: "Growth",
          lvl: 25,
        },
        {
          name: "Double-Edge",
          lvl: 27,
        },
        {
          name: "Worry Seed",
          lvl: 31,
        },
        {
          name: "Synthesis",
          lvl: 33,
        },
        {
          name: "Seed Bomb",
          lvl: 37,
        },
      ],
      tutor: [
        "Headbutt",
        "String Shot",
        "Snore",
        "Mud-Slap",
        "Fury Cutter",
        "Synthesis",
        "Knock Off",
        "Worry Seed",
        "Seed Bomb",
      ],
      egg: [
        "Petal Dance",
        "Light Screen",
        "Sludge",
        "Skull Bash",
        "Amnesia",
        "Curse",
        "Charm",
        "Safeguard",
        "Nature Power",
        "Ingrain",
        "Grass Whistle",
        "Magical Leaf",
        "Leaf Storm",
        "Power Whip",
      ],
    },
    "black-white": {
      machine: [
        "Swords Dance",
        "Cut",
        "Strength",
        "Solar Beam",
        "Toxic",
        "Double Team",
        "Light Screen",
        "Flash",
        "Rest",
        "Substitute",
        "Protect",
        "Sludge Bomb",
        "Swagger",
        "Attract",
        "Return",
        "Frustration",
        "Safeguard",
        "Hidden Power",
        "Sunny Day",
        "Rock Smash",
        "Facade",
        "Energy Ball",
        "Grass Knot",
        "Venoshock",
        "Round",
        "Echoed Voice",
      ],
      "level-up": [
        {
          name: "Tackle",
          lvl: 1,
        },
        {
          name: "Growl",
          lvl: 3,
        },
        {
          name: "Leech Seed",
          lvl: 7,
        },
        {
          name: "Vine Whip",
          lvl: 9,
        },
        {
          name: "Poison Powder",
          lvl: 13,
        },
        {
          name: "Sleep Powder",
          lvl: 13,
        },
        {
          name: "Take Down",
          lvl: 15,
        },
        {
          name: "Razor Leaf",
          lvl: 19,
        },
        {
          name: "Sweet Scent",
          lvl: 21,
        },
        {
          name: "Growth",
          lvl: 25,
        },
        {
          name: "Double-Edge",
          lvl: 27,
        },
        {
          name: "Worry Seed",
          lvl: 31,
        },
        {
          name: "Synthesis",
          lvl: 33,
        },
        {
          name: "Seed Bomb",
          lvl: 37,
        },
      ],
      egg: [
        "Petal Dance",
        "Sludge",
        "Skull Bash",
        "Amnesia",
        "Curse",
        "Giga Drain",
        "Endure",
        "Charm",
        "Nature Power",
        "Ingrain",
        "Grass Whistle",
        "Magical Leaf",
        "Leaf Storm",
        "Power Whip",
      ],
      tutor: ["Grass Pledge"],
    },
    "black-2-white-2": {
      machine: [
        "Swords Dance",
        "Cut",
        "Strength",
        "Solar Beam",
        "Toxic",
        "Double Team",
        "Light Screen",
        "Flash",
        "Rest",
        "Substitute",
        "Protect",
        "Sludge Bomb",
        "Swagger",
        "Attract",
        "Return",
        "Frustration",
        "Safeguard",
        "Hidden Power",
        "Sunny Day",
        "Rock Smash",
        "Facade",
        "Energy Ball",
        "Grass Knot",
        "Venoshock",
        "Round",
        "Echoed Voice",
      ],
      tutor: [
        "Bind",
        "Snore",
        "Giga Drain",
        "Sleep Talk",
        "Synthesis",
        "Knock Off",
        "Worry Seed",
        "Seed Bomb",
        "Grass Pledge",
      ],
      "level-up": [
        {
          name: "Tackle",
          lvl: 1,
        },
        {
          name: "Growl",
          lvl: 3,
        },
        {
          name: "Leech Seed",
          lvl: 7,
        },
        {
          name: "Vine Whip",
          lvl: 9,
        },
        {
          name: "Poison Powder",
          lvl: 13,
        },
        {
          name: "Sleep Powder",
          lvl: 13,
        },
        {
          name: "Take Down",
          lvl: 15,
        },
        {
          name: "Razor Leaf",
          lvl: 19,
        },
        {
          name: "Sweet Scent",
          lvl: 21,
        },
        {
          name: "Growth",
          lvl: 25,
        },
        {
          name: "Double-Edge",
          lvl: 27,
        },
        {
          name: "Worry Seed",
          lvl: 31,
        },
        {
          name: "Synthesis",
          lvl: 33,
        },
        {
          name: "Seed Bomb",
          lvl: 37,
        },
      ],
      egg: [
        "Petal Dance",
        "Sludge",
        "Skull Bash",
        "Amnesia",
        "Curse",
        "Giga Drain",
        "Endure",
        "Charm",
        "Nature Power",
        "Ingrain",
        "Grass Whistle",
        "Magical Leaf",
        "Leaf Storm",
        "Power Whip",
      ],
    },
    "x-y": {
      machine: [
        "Swords Dance",
        "Cut",
        "Strength",
        "Solar Beam",
        "Toxic",
        "Double Team",
        "Light Screen",
        "Flash",
        "Rest",
        "Substitute",
        "Protect",
        "Sludge Bomb",
        "Swagger",
        "Attract",
        "Sleep Talk",
        "Return",
        "Frustration",
        "Safeguard",
        "Hidden Power",
        "Sunny Day",
        "Rock Smash",
        "Facade",
        "Nature Power",
        "Energy Ball",
        "Grass Knot",
        "Venoshock",
        "Round",
        "Echoed Voice",
        "Confide",
      ],
      "level-up": [
        {
          name: "Tackle",
          lvl: 1,
        },
        {
          name: "Growl",
          lvl: 3,
        },
        {
          name: "Leech Seed",
          lvl: 7,
        },
        {
          name: "Vine Whip",
          lvl: 9,
        },
        {
          name: "Poison Powder",
          lvl: 13,
        },
        {
          name: "Sleep Powder",
          lvl: 13,
        },
        {
          name: "Take Down",
          lvl: 15,
        },
        {
          name: "Razor Leaf",
          lvl: 19,
        },
        {
          name: "Sweet Scent",
          lvl: 21,
        },
        {
          name: "Growth",
          lvl: 25,
        },
        {
          name: "Double-Edge",
          lvl: 27,
        },
        {
          name: "Worry Seed",
          lvl: 31,
        },
        {
          name: "Synthesis",
          lvl: 33,
        },
        {
          name: "Seed Bomb",
          lvl: 37,
        },
      ],
      egg: [
        "Petal Dance",
        "Sludge",
        "Skull Bash",
        "Amnesia",
        "Curse",
        "Giga Drain",
        "Endure",
        "Charm",
        "Nature Power",
        "Ingrain",
        "Grass Whistle",
        "Magical Leaf",
        "Leaf Storm",
        "Power Whip",
        "Grassy Terrain",
      ],
      tutor: ["Grass Pledge"],
    },
    "omega-ruby-alpha-sapphire": {
      machine: [
        "Swords Dance",
        "Cut",
        "Strength",
        "Solar Beam",
        "Toxic",
        "Double Team",
        "Light Screen",
        "Flash",
        "Rest",
        "Substitute",
        "Protect",
        "Sludge Bomb",
        "Swagger",
        "Attract",
        "Sleep Talk",
        "Return",
        "Frustration",
        "Safeguard",
        "Hidden Power",
        "Sunny Day",
        "Rock Smash",
        "Facade",
        "Nature Power",
        "Secret Power",
        "Energy Ball",
        "Grass Knot",
        "Venoshock",
        "Round",
        "Echoed Voice",
        "Confide",
      ],
      tutor: [
        "Bind",
        "Snore",
        "Giga Drain",
        "Synthesis",
        "Knock Off",
        "Worry Seed",
        "Seed Bomb",
        "Grass Pledge",
      ],
      "level-up": [
        {
          name: "Tackle",
          lvl: 1,
        },
        {
          name: "Growl",
          lvl: 3,
        },
        {
          name: "Leech Seed",
          lvl: 7,
        },
        {
          name: "Vine Whip",
          lvl: 9,
        },
        {
          name: "Poison Powder",
          lvl: 13,
        },
        {
          name: "Sleep Powder",
          lvl: 13,
        },
        {
          name: "Take Down",
          lvl: 15,
        },
        {
          name: "Razor Leaf",
          lvl: 19,
        },
        {
          name: "Sweet Scent",
          lvl: 21,
        },
        {
          name: "Growth",
          lvl: 25,
        },
        {
          name: "Double-Edge",
          lvl: 27,
        },
        {
          name: "Worry Seed",
          lvl: 31,
        },
        {
          name: "Synthesis",
          lvl: 33,
        },
        {
          name: "Seed Bomb",
          lvl: 37,
        },
      ],
      egg: [
        "Petal Dance",
        "Sludge",
        "Skull Bash",
        "Amnesia",
        "Curse",
        "Giga Drain",
        "Endure",
        "Charm",
        "Nature Power",
        "Ingrain",
        "Grass Whistle",
        "Magical Leaf",
        "Leaf Storm",
        "Power Whip",
        "Grassy Terrain",
      ],
    },
    "sun-moon": {
      machine: [
        "Swords Dance",
        "Solar Beam",
        "Toxic",
        "Double Team",
        "Light Screen",
        "Rest",
        "Substitute",
        "Protect",
        "Sludge Bomb",
        "Swagger",
        "Attract",
        "Sleep Talk",
        "Return",
        "Frustration",
        "Safeguard",
        "Hidden Power",
        "Sunny Day",
        "Facade",
        "Nature Power",
        "Energy Ball",
        "Grass Knot",
        "Venoshock",
        "Round",
        "Echoed Voice",
        "Work Up",
        "Confide",
      ],
      "level-up": [
        {
          name: "Tackle",
          lvl: 1,
        },
        {
          name: "Growl",
          lvl: 3,
        },
        {
          name: "Vine Whip",
          lvl: 7,
        },
        {
          name: "Vine Whip",
          lvl: 9,
        },
        {
          name: "Poison Powder",
          lvl: 13,
        },
        {
          name: "Sleep Powder",
          lvl: 13,
        },
        {
          name: "Take Down",
          lvl: 15,
        },
        {
          name: "Razor Leaf",
          lvl: 19,
        },
        {
          name: "Sweet Scent",
          lvl: 21,
        },
        {
          name: "Growth",
          lvl: 25,
        },
        {
          name: "Double-Edge",
          lvl: 27,
        },
        {
          name: "Worry Seed",
          lvl: 31,
        },
        {
          name: "Synthesis",
          lvl: 33,
        },
        {
          name: "Seed Bomb",
          lvl: 37,
        },
      ],
      egg: [
        "Petal Dance",
        "Sludge",
        "Skull Bash",
        "Amnesia",
        "Curse",
        "Giga Drain",
        "Endure",
        "Charm",
        "Nature Power",
        "Ingrain",
        "Grass Whistle",
        "Magical Leaf",
        "Leaf Storm",
        "Power Whip",
        "Grassy Terrain",
      ],
      tutor: ["Grass Pledge"],
    },
    "ultra-sun-ultra-moon": {
      machine: [
        "Swords Dance",
        "Solar Beam",
        "Toxic",
        "Double Team",
        "Light Screen",
        "Rest",
        "Substitute",
        "Protect",
        "Sludge Bomb",
        "Swagger",
        "Attract",
        "Sleep Talk",
        "Return",
        "Frustration",
        "Safeguard",
        "Hidden Power",
        "Sunny Day",
        "Facade",
        "Nature Power",
        "Energy Ball",
        "Grass Knot",
        "Venoshock",
        "Round",
        "Echoed Voice",
        "Work Up",
        "Confide",
      ],
      tutor: [
        "Bind",
        "Snore",
        "Giga Drain",
        "Synthesis",
        "Knock Off",
        "Worry Seed",
        "Seed Bomb",
        "Grass Pledge",
      ],
      "level-up": [
        {
          name: "Tackle",
          lvl: 1,
        },
        {
          name: "Growl",
          lvl: 3,
        },
        {
          name: "Leech Seed",
          lvl: 7,
        },
        {
          name: "Vine Whip",
          lvl: 9,
        },
        {
          name: "Poison Powder",
          lvl: 13,
        },
        {
          name: "Sleep Powder",
          lvl: 13,
        },
        {
          name: "Take Down",
          lvl: 15,
        },
        {
          name: "Razor Leaf",
          lvl: 19,
        },
        {
          name: "Sweet Scent",
          lvl: 21,
        },
        {
          name: "Growth",
          lvl: 25,
        },
        {
          name: "Double-Edge",
          lvl: 27,
        },
        {
          name: "Worry Seed",
          lvl: 31,
        },
        {
          name: "Synthesis",
          lvl: 33,
        },
        {
          name: "Seed Bomb",
          lvl: 37,
        },
      ],
      egg: [
        "Petal Dance",
        "Sludge",
        "Skull Bash",
        "Amnesia",
        "Curse",
        "Giga Drain",
        "Endure",
        "Charm",
        "Nature Power",
        "Ingrain",
        "Grass Whistle",
        "Magical Leaf",
        "Leaf Storm",
        "Power Whip",
        "Grassy Terrain",
      ],
    },
    "sword-shield": {
      machine: [
        "Swords Dance",
        "Body Slam",
        "Solar Beam",
        "Light Screen",
        "Amnesia",
        "Rest",
        "Substitute",
        "Snore",
        "Protect",
        "Sludge Bomb",
        "Giga Drain",
        "Endure",
        "Charm",
        "False Swipe",
        "Attract",
        "Sleep Talk",
        "Safeguard",
        "Sunny Day",
        "Facade",
        "Helping Hand",
        "Weather Ball",
        "Bullet Seed",
        "Magical Leaf",
        "Seed Bomb",
        "Energy Ball",
        "Leaf Storm",
        "Power Whip",
        "Grass Knot",
        "Venoshock",
        "Round",
        "Work Up",
        "Grassy Terrain",
      ],
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
          name: "Vine Whip",
          lvl: 3,
        },
        {
          name: "Growth",
          lvl: 6,
        },
        {
          name: "Leech Seed",
          lvl: 9,
        },
        {
          name: "Razor Leaf",
          lvl: 12,
        },
        {
          name: "Poison Powder",
          lvl: 15,
        },
        {
          name: "Sleep Powder",
          lvl: 15,
        },
        {
          name: "Seed Bomb",
          lvl: 18,
        },
        {
          name: "Take Down",
          lvl: 21,
        },
        {
          name: "Sweet Scent",
          lvl: 24,
        },
        {
          name: "Synthesis",
          lvl: 27,
        },
        {
          name: "Worry Seed",
          lvl: 30,
        },
        {
          name: "Double-Edge",
          lvl: 33,
        },
        {
          name: "Solar Beam",
          lvl: 36,
        },
      ],
      egg: [
        "Petal Dance",
        "Toxic",
        "Skull Bash",
        "Curse",
        "Nature Power",
        "Ingrain",
      ],
      tutor: ["Grass Pledge", "Grassy Glide"],
    },

    colosseum: {
      machine: [
        "Cut",
        "Strength",
        "Solar Beam",
        "Toxic",
        "Double Team",
        "Flash",
        "Rest",
        "Protect",
        "Sludge Bomb",
        "Giga Drain",
        "Attract",
        "Return",
        "Frustration",
        "Hidden Power",
        "Sunny Day",
        "Rock Smash",
        "Facade",
        "Secret Power",
        "Bullet Seed",
      ],
      "level-up": [
        {
          name: "Tackle",
          lvl: 1,
        },
        {
          name: "Growl",
          lvl: 4,
        },
        {
          name: "Leech Seed",
          lvl: 7,
        },
        {
          name: "Vine Whip",
          lvl: 10,
        },
        {
          name: "Poison Powder",
          lvl: 15,
        },
        {
          name: "Sleep Powder",
          lvl: 15,
        },
        {
          name: "Razor Leaf",
          lvl: 20,
        },
        {
          name: "Sweet Scent",
          lvl: 25,
        },
        {
          name: "Growth",
          lvl: 32,
        },
        {
          name: "Synthesis",
          lvl: 39,
        },
        {
          name: "Solar Beam",
          lvl: 46,
        },
      ],
    },
    xd: {
      machine: [
        "Cut",
        "Strength",
        "Solar Beam",
        "Toxic",
        "Double Team",
        "Flash",
        "Rest",
        "Protect",
        "Sludge Bomb",
        "Giga Drain",
        "Attract",
        "Return",
        "Frustration",
        "Hidden Power",
        "Sunny Day",
        "Rock Smash",
        "Facade",
        "Secret Power",
        "Bullet Seed",
      ],
      "level-up": [
        {
          name: "Tackle",
          lvl: 1,
        },
        {
          name: "Growl",
          lvl: 4,
        },
        {
          name: "Leech Seed",
          lvl: 7,
        },
        {
          name: "Vine Whip",
          lvl: 10,
        },
        {
          name: "Poison Powder",
          lvl: 15,
        },
        {
          name: "Sleep Powder",
          lvl: 15,
        },
        {
          name: "Razor Leaf",
          lvl: 20,
        },
        {
          name: "Sweet Scent",
          lvl: 25,
        },
        {
          name: "Growth",
          lvl: 32,
        },
        {
          name: "Synthesis",
          lvl: 39,
        },
        {
          name: "Solar Beam",
          lvl: 46,
        },
      ],
      tutor: ["Body Slam", "Double-Edge", "Mimic", "Substitute", "Swagger"],
    },
    "lets-go-pikachu-lets-go-eevee": {
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
          name: "Vine Whip",
          lvl: 5,
        },
        {
          name: "Leech Seed",
          lvl: 9,
        },
        {
          name: "Poison Powder",
          lvl: 14,
        },
        {
          name: "Sleep Powder",
          lvl: 14,
        },
        {
          name: "Take Down",
          lvl: 18,
        },
        {
          name: "Razor Leaf",
          lvl: 23,
        },
        {
          name: "Growth",
          lvl: 27,
        },
        {
          name: "Double-Edge",
          lvl: 32,
        },
      ],
      machine: [
        "Headbutt",
        "Mega Drain",
        "Solar Beam",
        "Toxic",
        "Light Screen",
        "Reflect",
        "Rest",
        "Substitute",
        "Protect",
        "Sludge Bomb",
        "Outrage",
        "Facade",
      ],
    },
  },
};

module.exports = {
    bulbasaur
}