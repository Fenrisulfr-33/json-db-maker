## Games

The games folder stores moves learned by pokemon, that can only be found in that game, and how the moves are learned.

## File naming

`[game-key]-[game-name].json`

```json
{
    "pokemon_id": "pokemon_id",
    "pokemon_name": "pokemon_name",
    "game_key": "key_of_game",
    "moves": {
        "level-up": [
            {
                "move_id": 0,
				"move_name": "name_of_move"
                "learned_at": 1
            }
        ],
        "hidden-machine": [
            {
                "move_id": 0,
				"move_name": "name_of_move",
                "hm": 0
            }
        ],
        "technical-machine": [
            {
                "move_id": 0,
				"move_name": "name_of_move",
                "tm": 0
            }
        ],
		"evolution": [
			{
				"move_id": 0,
				"move_name": "name_of_move",
			}
		],
        "egg": [
            {
                "move_id": 0,
                "move_name": "name_of_move"
            }
        ],
        "tutor": [
            {
                "move_id": 0,
                "move_name": "name_of_move"
            }
        ],
        "transfer-only": [
            {
                "move_id": 0,
                "move_name": "name_of_move",
                "learned_method": "how_to_obtain"
            }
        ],
        "pre-evolution": [
            {
				"move_id": 0,
                "move_name": "name_of_move",
                "learned_method": "how_to_obtain"
            }
        ],
		"reminder": [
			{
				"move_id": 0,
				"move_name": "name_of_move"
			}
		],
		"technical-record": [
			{
				"move_id": 0,
				"move_name": "name_of_move",
				"tr": 0
			}
		],
		"special": [
			{
				"move_id": 0,
				"move_name": "name_of_move",
				"learned_method": "how_to_obtain"
			}
		],
		"special-moves": [
			"move_id": 0,
			"move_name": "name_of_move",
		]
    }
}
```

The possible ways pokemon can learn moves as of right now is.

1. level-up
2. technical-machine
3. hidden-machine
4. special
5. transfer-only
6. technical-record
7. egg
8. tutor
9. evolution
10. reminder
11. special-moves
