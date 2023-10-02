const evolutionMasterList = [
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
]

module.exports = evolutionMasterList;