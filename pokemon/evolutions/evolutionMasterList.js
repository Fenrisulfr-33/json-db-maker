[
  {
    _id: 1,
    start: {
      id: 1,
      name: "Bulbasaur",
      type: {
        one: "Grass",
        two: "Poison",
      },
      how: "Level 16",
      next: {
        id: 2,
        name: "Ivysaur",
        type: {
          one: "Grass",
          two: "Poison",
        },
        how: "Level 32",
        next: {
          id: 3,
          name: "Venusaur",
          type: {
            one: "Grass",
            two: "Poison",
          },
        },
      },
    },
  },
  {
    _id: 2,
    start: {
      id: 4,
      name: "Charmander",
      type: {
        one: "Fire",
      },
      how: "Level 16",
      next: {
        id: 5,
        name: "Charmeleon",
        type: {
          one: "Fire",
        },
        how: "Level 36",
        next: {
          id: 6,
          name: "Charizard",
          type: {
            one: "Fire",
            two: "Flying",
          },
        },
      },
    },
  },
  {
    _id: 3,
    start: {
      id: 7,
      name: "Squirtle",
      type: {
        one: "Water",
      },
      how: "Level 16",
      next: {
        id: 8,
        name: "Wartortle",
        type: {
          one: "Water",
        },
        how: "Level 36",
        next: {
          id: 9,
          name: "Blastoise",
          type: {
            one: "Water",
          },
        },
      },
    },
  },
  {
    _id: 4,
    start: {
      id: 10,
      name: "Caterpie",
      type: {
        one: "Bug",
      },
      how: "Level 7",
      next: {
        id: 11,
        name: "Metapod",
        type: {
          one: "Bug",
        },
        how: "Level 10",
        next: {
          id: 12,
          name: "Butterfree",
          type: {
            one: "Bug",
            two: "Flying",
          },
        },
      },
    },
  },
  {
    _id: 5,
    start: {
      id: 13,
      name: "Weedle",
      type: {
        one: "Bug",
        two: "Poison",
      },
      how: "Level 7",
      next: {
        id: 14,
        name: "Kakuna",
        type: {
          one: "Bug",
          two: "Poison",
        },
        how: "Level 10",
        next: {
          id: 15,
          name: "Beedrill",
          type: {
            one: "Bug",
            two: "Poison",
          },
        },
      },
    },
  },
  {
    _id: 6,
    start: {
      id: 16,
      name: "Pidgey",
      type: {
        one: "Normal",
        two: "Flying",
      },
      how: "Level 18",
      next: {
        id: 17,
        name: "Pidgeotto",
        type: {
          one: "Normal",
          two: "Flying",
        },
        how: "Level 36",
        next: {
          id: 18,
          name: "Pidgeot",
          type: {
            one: "Normal",
            two: "Flying",
          },
        },
      },
    },
  },
  {
    _id: 7,
    first: [
      {
        id: 19,
        name: "Rattata",
        type: {
          one: "Normal",
        },
      },
      {
        id: 20,
        name: "Raticate",
        type: {
          one: "Normal",
        },
        how: "Level 20",
      },
    ],
    second: [
      {
        id: 19.1,
        name: "Rattata",
        form: "Alolan Rattata",
        type: {
          one: "Dark",
          two: "Normal",
        },
      },
      {
        id: 20.1,
        name: "Raticate",
        form: "Alolan Raticate",
        type: {
          one: "Dark",
          two: "Normal",
        },
        how: "Level 20, Nighttime",
      },
    ],
  },
  {
    _id: 8,
    first: [
      {
        id: 21,
        name: "Spearow",
        type: {
          one: "Normal",
          two: "Flying",
        },
      },
      {
        id: 22,
        name: "Fearow",
        type: {
          one: "Normal",
          two: "Flying",
        },
        how: "Level 20",
      },
    ],
  },
  {
    _id: 9,
    first: [
      {
        id: 23,
        name: "Ekans",
        type: {
          one: "Poison",
        },
      },
      {
        id: 24,
        name: "Arbok",
        type: {
          one: "Poison",
        },
        how: "Level 22",
      },
    ],
  },
  {
    _id: 10,
    first: [
      {
        id: 172,
        name: "Pichu",
        type: {
          one: "Electric",
        },
      },
      {
        id: 25,
        name: "Pikachu",
        type: {
          one: "Electric",
        },
        how: "High Friendship",
      },
      [
        {
            id: 26,
            name: "Raichu",
            type: {
              one: "Electric",
            },
            how: "Use Thunder Stone outside Alola",
          },
          {
            id: 26.1,
            name: "Raichu",
            form: "Alolan Raichu",
            type: {
              one: "Electric",
              two: "Psychic"
            },
            how: "Use Thunder Stone in Alola",
          },
      ]
    ],
  },
  {
    _id: 11,
    first: [
      {
        id: 27,
        name: "Sanshrew",
        type: {
          one: "Ground",
        },
      },
      {
        id: 28,
        name: "Sandslash",
        type: {
          one: "Ground",
        },
        how: "Level 22",
      },
    ],
    second: [
      {
        id: 27.1,
        name: "Sandshrew",
        form: "Alolan Sandshrew",
        type: {
          one: "Ice",
          two: "Steel",
        },
      },
      {
        id: 28.1,
        name: "Sandslash",
        form: "Alolan Sandslash",
        type: {
          one: "Ice",
          two: "Steel",
        },
        how: "Use Ice Stone",
      },
    ],
  },
];
