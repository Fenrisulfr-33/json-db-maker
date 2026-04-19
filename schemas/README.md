# Data Validation Schemas

This directory contains JSON schemas for validating data integrity before inserting into MongoDB.

## Available Schemas

### 1. Pokemon Schema (`pokemon-schema.json`)
Validates Pokemon data including:
- Basic info (id, name, key)
- Types (with enum validation)
- Base stats (HP, Attack, Defense, etc.)
- Abilities (normal and hidden)
- Pokedex numbers across different games
- Evolutions and forms

### 2. Move Schema (`move-schema.json`)
Validates Pokemon move data including:
- Move ID and name (multilingual)
- Type and category (Physical/Special/Status)
- PP, Power, and Accuracy
- Generation and target information
- Effects and descriptions

### 3. Ability Schema (`ability-schema.json`)
Validates Pokemon ability data including:
- Ability ID and name
- Generation introduced
- Effect descriptions (short and full)
- List of Pokemon with this ability

### 4. Pal Schema (`pal-schema.json`)
Validates Palworld Pal data including:
- Pal ID and key
- Stats (HP, Attack, Defense, Speed, etc.)
- Types
- Work suitabilities
- Drops and abilities
- Skills with cooldowns and power

## Installation

First, install the required dependencies:

```bash
npm install ajv
```

## Usage

### Command Line Validation

Validate a single file:

```bash
node schemas/validate.js <path-to-data-file> <schema-name>
```

Examples:

```bash
# Validate Pokemon data
node schemas/validate.js pokemon/pokemon-data/2024-02-13-pokedex.json pokemon

# Validate moves
node schemas/validate.js pokemon/pokemon-data/moves/1-pound.json move

# Validate abilities
node schemas/validate.js pokemon/pokemon-data/2024-02-11-abilities.json ability

# Validate Palworld data
node schemas/validate.js palworld/2024-02-08-paldeck.json pal
```

### Programmatic Usage

You can also use the validation functions in your own scripts:

```javascript
const { loadSchema, loadData, validateData } = require('./schemas/validate');

// Load schema and data
const validator = loadSchema('pokemon');
const data = loadData('./pokemon/pokemon-data/2024-02-13-pokedex.json');

// Validate
const result = validateData(data, validator);

if (result.isValid) {
  console.log('Data is valid!');
  // Proceed with database insertion
} else {
  console.log(`Found ${result.invalidItems} errors`);
  console.log(result.errors);
}
```

## Schema Details

### Pokemon Schema Rules
- `_id`: Required integer, minimum 1
- `key`: Required string, must be lowercase with hyphens only
- `name.english`: Required
- `type.one`: Required, must be valid Pokemon type
- `baseStats`: All stats required (hp, atk, def, spatk, spdef, spd, total)
- Stats must be between 1-255

### Move Schema Rules
- `_id`: Required integer
- `category`: Must be "Physical", "Special", or "Status"
- `pp`: Between 1-64
- `power`: 0-255 or null
- `accuracy`: 0-100 or null
- `generation`: 1-9
- `priority`: Between -7 and 5

### Ability Schema Rules
- `_id`: Required integer
- `generation`: 1-9
- `effect`: Must have both `shortEffect` and `full` descriptions
- `pokemonWithAbility`: Can list Pokemon with normal or hidden ability

### Pal Schema Rules
- `key`: Must be 3-digit format (e.g., "001", "042")
- `type`: Array with 1-2 types
- `work.level`: Between 1-4
- `rarity`: Between 1-10
- `size`: Must be xs, s, m, l, or xl

## Output Format

The validator provides detailed feedback:

```
✓ All 1025 items are valid!
```

Or if there are errors:

```
✗ Validation failed: 3 of 1025 items have errors

Error 1:
  Item: Bulbasaur (ID: 1) at index 0
  - /baseStats/hp: must be >= 1
    {"comparison":">=","limit":1}

Error 2:
  Item: Ivysaur (ID: 2) at index 1
  - /type/one: must be equal to one of the allowed values
    {"allowedValues":["Normal","Fire","Water",...]}
```

## MongoDB Integration

After validating your data, you can safely insert it into MongoDB. Example:

```javascript
const { MongoClient } = require('mongodb');
const { loadSchema, loadData, validateData } = require('./schemas/validate');

async function insertValidatedData() {
  // Validate first
  const validator = loadSchema('pokemon');
  const data = loadData('./pokemon/pokemon-data/2024-02-13-pokedex.json');
  const result = validateData(data, validator);
  
  if (!result.isValid) {
    console.error('Data validation failed!');
    console.error(result.errors);
    return;
  }
  
  // Connect to MongoDB
  const client = await MongoClient.connect('mongodb://localhost:27017');
  const db = client.db('pokemon-database');
  
  // Insert data
  await db.collection('pokemon').insertMany(data);
  console.log(`Inserted ${data.length} valid Pokemon!`);
  
  await client.close();
}
```

## Best Practices

1. **Always validate before inserting**: Run validation before any database operations
2. **Fix errors incrementally**: Address validation errors one at a time
3. **Update schemas**: As your data model evolves, update the schemas accordingly
4. **Version control**: Keep schemas in version control alongside your data
5. **Automated testing**: Add validation to your CI/CD pipeline

## Extending Schemas

To add new validation rules, edit the appropriate schema file. JSON Schema supports:

- Type checking (`type`)
- Range validation (`minimum`, `maximum`)
- String patterns (`pattern`)
- Enum values (`enum`)
- Array constraints (`minItems`, `maxItems`)
- Required fields (`required`)
- Custom formats (`format`)

See [JSON Schema documentation](https://json-schema.org/) for more details.
