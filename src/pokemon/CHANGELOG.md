# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/2.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org).

## [Unreleased]

## - 2026-08-26
### Added
- New `learnsets` collection: `src/pokemon/moves/learnsets.js` pivots the 22 per-game move files (`moves/games/*.json`) into one document per Pokemon id, each holding every game's moveset keyed by game slug, instead of embedding movesets on the pokemon document itself. Wired into `moves/upsert.js` so `npm run upsert:moves` upserts both `moves` (definitions) and `learnsets` in one pass.
- `src/genericFunctions/files/readJsonDir.js`: reusable "read every .json file in a directory and return the parsed array" function, replacing the same `readdirSync().filter().map(JSON.parse)` block that had been copy-pasted across 7 files (all five `upsert.js` scripts, both `validation.mjs` scripts, and the learnsets pivot).
- `src/pokemon/constants/` folder as a single home for domain constants (`DEX_LENGTHS.js`, `MOVE_LEARN_METHODS.js`), replacing their previous scattered locations (`src/pokemon/` root and `src/pokemon/moves/`).
- Centralized entry-directory constants in `helpers/paths.js` (`ABILITIES_ENTRIES_DIR`, `EVOLUTIONS_ENTRIES_DIR`, `FORM_TABS_ENTRIES_DIR`, alongside the existing pokedex/moves ones), so every upsert/validation script shares one source of truth instead of recomputing its entries path locally.
- `formTabs/README.md` and `forms/README.md`: overview docs for what each folder holds and where they're headed - including a stated goal for `forms/` to eventually store only the differences between a form and its base Pokemon instead of full duplicates.
- `src/pokemon/schemas/evolution.json`: evolutions schema relocated here to sit alongside `pokemon.json`/`move.json`/`ability.json` instead of living inside `evolutions/` itself.

### Changed
- `pokedex/upsert.js` no longer attaches a `moves` object or computes `gameDropDown` on the pokemon document - both now live in (or will be derived from) the `learnsets` collection instead.

### Removed
- Deleted dead/superseded files: `DEX_LENGTHS.js` and `MOVE_LEARN_METHODS.js` (moved into `constants/`), `LoadNationalDex.js`, `createNewPokedex.js`, `evolutions/modifier.js`, and `moves/addMovesToPokemon.js` (a second, independently-broken implementation of move-attachment, superseded by the `learnsets` collection).

### Fixed
- `pokedex/upsert.js` referenced `POKEDEX_ENTRIES_DIR`, a variable that was never imported or declared anywhere in the file - would have thrown `ReferenceError` the moment the script ran. Now sourced from `helpers/paths.js`.
- `evolutions/upsert.js` imported `EVOLUTION_ENTRIES_DIR`, which doesn't exist in `helpers/paths.js` (the real export is `EVOLUTIONS_ENTRIES_DIR`) - threw immediately on load.
- `evolutions/validation.mjs` imported its schema from `./schema.json`, which had moved to `src/pokemon/schemas/evolution.json` - threw "Cannot find module" on load.
- `pokedex/upsert.js` called `createGameDropDown(updated.moves)`, but `moves` is no longer attached to the pokemon document - threw on the very first entry every time the script ran. Removed the call; rebuilding `gameDropDown` from `pokedexNumber` instead of `moves` is left as a TODO.
- `constants/DEX_LENGTHS.js` referenced `POKEMON_DEX_RED_BLUE`, which was never declared (the real constant is named `RED_BLUE_YELLOW`) - threw `ReferenceError` on import, breaking `moves/games.test.js`.
- `moves/games.test.js` imported `DEX_LENGTHS` from its old, now-deleted location, and separately imported Legends Z-A move data from a filename (`22-legends-za-moves.json`) that doesn't exist (the real file is `22-legends-za.json`). Both fixed; the suite passes again.

## - 2026-08-24
### Added
- `pokedex:validate` script (`src/pokemon/pokedex/validation.mjs`), matching the existing `evolutions:validate` pattern.
- Schema validation on upsert: the shared `upsertEntries` helper now takes an optional `schema` and refuses to write anything to Mongo if any entry fails validation, instead of relying on someone remembering to run the validator script first. Wired into all four upsert scripts (pokedex, abilities, moves, evolutions).

### Changed
- Rewrote `src/pokemon/schemas/pokemon.json` to match the real shape of pokedex entries (it previously described a shape that didn't exist in the data - wrong `evolutions` array, missing `gender`, `evs`, `eggGroups`, `pokedexEntries`, and more). Now strict (`additionalProperties: false`).
- Removed `pokedexNumber` from all 1132 pokedex entry files - it's derived data, fully rebuilt at upsert time from `dexes/dexes_objects/*.json`, so it no longer needs to be hand-maintained/duplicated in source.
- Normalized 7 pokedex entry `key` values with non-ASCII characters to plain ASCII for clean URLs: `mr-mime`, `galarian-mr-mime`, `mr-rime`, `mime-jr`, `nidoran-f`, `nidoran-m`, `flabebe`.

### Fixed
- `pokedex/helpers.js` was CommonJS (`require`/`module.exports`) in an ESM (`"type": "module"`) project, so `pokedex/upsert.js` could not actually run. Converted to ES module imports/exports.
- `pokedex/helpers.js` was importing move-by-game data from filenames that no longer exist (e.g. `moves/games/red-blue-moves.json`); corrected all 21 paths to the current numbered filenames (`01-red-blue.json`, etc.).
- 194 pokedex entries had a stale, duplicate `pokedexNumbers` (plural) key alongside `pokedexNumber`.
- 46 pokedex entries stored `type.two: ""` instead of omitting the key for single-type Pokemon.
- 3 entries had a `spAtk` typo in `evs` (should be `spatk`).
- Palafin's `eggGroups` had `"water 2"` instead of `"Water 2"`.
- Okidogi's second type was `"Fight"` instead of `"Fighting"`.
- Mega Absol's `baseStats.spatk` was `1155` instead of `115`.
- Bloodmoon Ursaluna's ability id was `0` instead of `300` (Mind's Eye).
- Poliwag had a stray, incorrect Black/White dex number (`107`) that actually belongs to Klinklang; Galarian Weezing was missing its real Sword/Shield dex number (`251`) and had an incorrect Teal Mask number that belongs to base Weezing. Both fixed by the `pokedexNumber` recompute.

### Known gaps (not fixed, intentionally left visible in the schema rather than faked)
- ~20-25 recently-added entries (Paradox Pokemon, Kitakami/Blueberry DLC) are still missing `growthRate`, `species`, `height`, `eggCycles`, or `eggGroups`.
- Scarlet/Violet form-specific moves aren't merged in - the source file only exists under the legacy top-level `/pokemon` folder, not under `src/`.

[unreleased]: https://github.com
: https://github.com
: https://github.com
