# How To Use / TODO

Each folder should have an upsert function that goes through its entries and updates the database.

## Upsert Functions
- [ ] Build a script to run all upserts, or individual ones by folder, from the pokemon folder:
  - [ ] upsert national
  - [ ] upsert moves
  - [ ] upsert abilities
  - [ ] upsert formTabs
  - [ ] upsert evolutions
- [ ] Refactor upserts into a single universal/global function that takes a specific entries folder as input, instead of each folder having its own duplicate upsert function

## Testing
- [ ] Write tests confirming `_id` matches the file name id (e.g. `_id: 1` corresponds to `1-....json`)
- [ ] Solidify the database schema
- [ ] Write tests validating each file's format/schema matches the solidified database schema

## Data Modeling
- [ ] Separate the `forms` folder from `national`, with its own upsert that also pushes to the national dex
- [ ] Figure out evolution structure, then add competitive entries
- [ ] Change height/weight values to inches/lbs, with frontend conversion functions to display both units

## Structure
- [ ] Review and finalize overall folder structure