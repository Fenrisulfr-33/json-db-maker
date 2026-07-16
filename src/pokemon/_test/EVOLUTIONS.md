# Evolutions

This .md is for the evolutions entries held in the `./entries` section of this folder.

This folder holds the evolution data objects for the evolution section of each pokemon. Each evolution id is distinct for certain pokemon that exist within that evolution chain. So the pokemon that can evolve or have evolved from another pokemon make up a chain. The ids are unique.

## Schema

The schema is a work in progress since the chain types has now been established but the current iteration of the schema is as follows.

```js
{
	"$schema": "http://json-schema.org/draft-07/schema#",
		"title": "PokemonEvolutionEntry",
			"type": "object",
				"properties": {
		"_id": {
			"type": "integer"
		},
		"generation": {
			"type": "integer"
		},
		"evolution": {
			"type": "array",
				"items": {
				"type": "object",
					"properties": {
					"id": {
						"type": "number"
					},
					"name": {
						"type": "string"
					},
					"type": {
						"type": "array",
						"items": {
							"type": "string"
						}
					}
				},
				"required": ["id", "name", "type"],
					"additionalProperties": false
			}
		}
	},
	"required": ["_id", "generation", "evolution"],
		"additionalProperties": false
}
```
TODO: make the final schema for the evolution entries now that all possible combinations have been observed.

## Chain types

### Normal chain

This chain shows the evolution from left to right in a straight line and is stored like such.

```json
{
    "_id": 0,
    "generation": 0,
    "evolution": [
        [
            {
                "id": 1,
                "name": "Bulbasaur",
                "type": ["Grass", "Poison"]
            },
            {
                "id": 2,
                "name": "Ivysaur",
                "type": ["Grass", "Poison"],
                "how": "Level 16"
            },
            {
                "id": 3,
                "name": "Venusaur",
                "type": ["Grass", "Poison"],
                "how": "Level 32"
            }
        ]
    ]
}

```

pokemon that start the evolution chain have no `how` key because they start the chain, so nothing comes before.

This is a list of a list. `[ [] ]`

### Alternate form chain

The alternate form chain is when two lines of the pokemon exist, so the original chain, and then another chain which usually involves a region variant.

```json
{
    "_id": 7,
    "generation": 1,
    "evolution": [
        [
            {
                "id": 19,
                "name": "Rattata",
                "type": ["Normal"]
            },
            {
                "id": 20,
                "name": "Raticate",
                "type": ["Normal"],
				"how": "Level 20"
            }
        ],
        [
            {
                "id": 19.1,
                "name": "Rattata",
                "type": ["Dark", "Normal"],
				"form": "Alolan Rattata"
            },
            {
                "id": 20.1,
                "name": "Raticate",
                "type": ["Dark", "Normal"],
				"how": "Level 20, Nighttime",
				"form": "Alolan Raticate"
            }
        ]
    ]
}
```

Notice how the alternate forms takes on another key called `form`, this is to display the form name even though the pokemon name stays the same. 

This is a list of two lists. `[ [], [] ]`

### Multiple chaining

Multiple chaining is when at a certain point in the base evolution chain the choice it can evolve into can be multiple things.

```json
{
    "_id": 18,
    "generation": 1,
    "evolution": [
        [
            {
                "id": 43,
                "name": "Oddish",
                "type": ["Grass", "Poison"]
            },
            {
                "id": 44,
                "name": "Gloom",
                "type": ["Grass", "Poison"],
				"how": "Level 21"
            },
			[
				{
					"id": 45,
					"name": "Vileplume",
					"type": ["Grass", "Poison"],
					"how": "Use Leaf Stone"
				},
				{
					"id": 182,
					"name": "Bellossom",
					"type": ["Grass"],
					"how": "Use Sun Stone"
				}
			]
        ]
    ]
}
```

Multiple chaining allows gloom to turn into either `Vileplume` or `Bellossom`. The multiple choices array is place at the index where multiple choices can occur. Any amount of choices can be present inside the indexed array.

This is a list within a list with a list as an index. `[ [ x, y, [] ] ]`

### Alternate form Multiple chain

This is when both the original chain and the alternate chain can both have multiple choices, building off the previous two.

```json
{
    "_id": 33,
    "generation": 1,
    "evolution": [
        [
            {
                "id": 79,
                "name": "Slowpoke",
                "type": ["Water", "Psychic"]
            },
            [
                {
                    "id": 80,
                    "name": "Slowbro",
                    "type": ["Water", "Psychic"],
                    "how": "Level 37"
                },
                {
                    "id": 199,
                    "name": "Slowking",
                    "type": ["Water", "Psychic"],
                    "how": "Trade holding King's Rock"
                }
            ]
        ],
        [
            {
                "id": 79.1,
                "name": "Slowpoke",
                "type": ["Psychic"]
				"form": "Galarian Slowpoke"
            },
            [
                {
                    "id": 80.1,
                    "name": "Slowbro",
                    "type": ["Poison", "Psychic"],
					"how": "use Galarica Cuff",
					"form": "Galarian Slowbro"
                },
                {
                    "id": 199.1,
                    "name": "Slowking",
                    "type": ["Poison", "Psychic"],
					"how": "use Galarica Wreath",
					"form": "Galarian Slowking"
                }
            ]
        ]
    ]
}
```

In Alternate Multiple chaining we have the original `slowpoke` chain then the `galarian slowpoke` chain. Each of these chains has multiple choices to evolve slowpoke into either `slowbro` or `slowking`

This is lists inside a list, with lists at the specificed index for the multiple choices. `[ [ x, y, [] ], [ x, y, [] ] ]`

### Multiple continuation chaining

Multiple continuation chaining is when the chain breaks into multiple pokemon but each chain continues to go off in its own direction.

```json
{
    "_id": 101,
    "generation": 3,
    "evolution": [
        [
            {
                "id": 290,
                "name": "Nincada",
                "type": ["Bug", "Ground"]
            },
            [
                [
                    {
                        "id": 291,
                        "name": "Ninjask",
                        "type": ["Bug", "Flying"],
                        "how": "Level 20"
                    }
                ],
                [
                    {
                        "id": 291,
                        "name": "Ninjask",
                        "type": ["Bug", "Flying"],
                        "how": "Level 20, empty spot in party, Pokéball in bag"
                    },
                    {
                        "id": 292,
                        "name": "Shedinja",
                        "type": ["Bug", "Ghost"],
						"how": "+"
                    }
                ]
            ]
        ]
    ]
}
```

The first chain after the split only has one pokemon in it because that's where it's chain stops. However it can continue on as long as it wants.

This is lists inside a list, in a specific index of a list, inside another list. `[ [ x [ [ y ], [ y, z ] ] ] ]`