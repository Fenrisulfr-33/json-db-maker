# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/2.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org).

## [Unreleased]

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

## - 2026-01-15
### Added
- Initial stable release of the core software application.

[unreleased]: https://github.com
: https://github.com
: https://github.com
