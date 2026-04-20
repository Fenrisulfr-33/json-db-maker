/**
 * Test: Validate that Pokemon pokedexNumber values match actual dex entries
 * 
 * This test checks if any Pokemon in the national folder have pokedexNumber
 * values that don't exist in the corresponding dex file, or if the pokemonId
 * doesn't match.
 * 
 * Example: If a Pokemon has pokedexNumber['sun-moon-alola'] = 50, then:
 * 1. There should be an entry in sun-moon-alola dex with dexNo: 50
 * 2. That entry's pokemonId should match the Pokemon's _id
 */

const path = require('path');
const fs = require('fs');
const dexMap = require('../dexes/dexes_objects/00_dex_map');

// Convert dex names from file format to pokedexNumber key format
const DEX_NAME_MAPPING = {
  'red_blue_yellow': ['red-blue', 'yellow'],
  'gold_silver_crystal': ['gold-silver', 'crystal'],
  'ruby_sapphire_emerald': ['ruby-sapphire', 'emerald'],
  'firered_leafgreen': ['firered-leafgreen'],
  'diamond_pearl': ['diamond-pearl'],
  'platinum': ['platinum'],
  'heartgold_soulsilver': ['heartgold-soulsilver'],
  'black_white': ['black-white'],
  'black2_white2': ['black-2-white-2'],
  'xy_central': ['x-y-central'],
  'xy_coastal': ['x-y-coastal'],
  'xy_mountain': ['x-y-mountain'],
  'omega_ruby_alpha_sapphire': ['omega-ruby-alpha-sapphire'],
  'sun_moon_alola': ['sun-moon'],
  'sun_moon_melemele': ['sun-moon-melemele'],
  'sun_moon_akala': ['sun-moon-akala'],
  'sun_moon_ulaula': ['sun-moon-ulaula'],
  'sun_moon_poni': ['sun-moon-poni'],
  'ultra_sun_ultra_moon_alola': ['ultra-sun-ultra-moon'],
  'ultra_sun_ultra_moon_melemele': ['ultra-sun-ultra-moon-melemele'],
  'ultra_sun_ultra_moon_akala': ['ultra-sun-ultra-moon-akala'],
  'ultra_sun_ultra_moon_ulaula': ['ultra-sun-ultra-moon-ulaula'],
  'ultra_sun_ultra_moon_poni': ['ultra-sun-ultra-moon-poni'],
  'sword_shield': ['sword-shield'],
  'isle_of_armor': ['isle-of-armor'],
  'crown_tundra': ['crown-tundra'],
  'legends_arceus': ['legends-arceus'],
  'scarlet_violet': ['scarlet-violet'],
  'teal_mask': ['the-teal-mask'],
  'indigo_disk': ['the-indigo-disk'],
};

/**
 * Load all Pokemon from national folder
 */
function loadNationalPokemon() {
  const nationalDir = path.join(__dirname, '..', 'national');
  const pokemonList = [];
  
  const files = fs.readdirSync(nationalDir);
  files.forEach(file => {
    if (path.extname(file) === '.json') {
      const filePath = path.join(nationalDir, file);
      const pokemon = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      pokemonList.push(pokemon);
    }
  });
  
  return pokemonList;
}

/**
 * Create a lookup map for each dex: { dexNo -> pokemonId }
 */
function createDexLookups() {
  const lookups = {};
  
  for (const [dexName, dexData] of dexMap.entries()) {
    const dexLookup = new Map();
    dexData.forEach(entry => {
      dexLookup.set(entry.dexNo, entry.pokemonId);
    });
    lookups[dexName] = dexLookup;
  }
  
  return lookups;
}

describe('National Folder Pokedex Number Validation', () => {
  let allPokemon;
  let dexLookups;
  
  beforeAll(() => {
    allPokemon = loadNationalPokemon();
    dexLookups = createDexLookups();
  });
  
  test('All Pokemon pokedexNumber entries should exist in corresponding dex files', () => {
    const errors = [];
    
    allPokemon.forEach(pokemon => {
      if (!pokemon.pokedexNumber) return;
      
      // Check each pokedexNumber entry
      Object.entries(pokemon.pokedexNumber).forEach(([dexKey, dexNo]) => {
        // Find which dex this key corresponds to
        let foundDex = null;
        let dexLookup = null;
        
        for (const [dexName, keys] of Object.entries(DEX_NAME_MAPPING)) {
          if (keys.includes(dexKey)) {
            foundDex = dexName;
            dexLookup = dexLookups[dexName];
            break;
          }
        }
        
        if (!foundDex) {
          errors.push({
            pokemon: pokemon.name.english,
            pokemonId: pokemon._id,
            dexKey: dexKey,
            dexNo: dexNo,
            error: `No dex mapping found for key '${dexKey}'`
          });
          return;
        }
        
        if (!dexLookup) {
          errors.push({
            pokemon: pokemon.name.english,
            pokemonId: pokemon._id,
            dexKey: dexKey,
            dexNo: dexNo,
            error: `Dex '${foundDex}' not found in dex map`
          });
          return;
        }
        
        // Check if this dexNo exists in the dex
        const expectedPokemonId = dexLookup.get(dexNo);
        
        if (expectedPokemonId === undefined) {
          errors.push({
            pokemon: pokemon.name.english,
            pokemonId: pokemon._id,
            dexKey: dexKey,
            dexNo: dexNo,
            error: `DexNo ${dexNo} does not exist in ${dexKey} dex`
          });
        } else if (expectedPokemonId !== pokemon._id) {
          errors.push({
            pokemon: pokemon.name.english,
            pokemonId: pokemon._id,
            dexKey: dexKey,
            dexNo: dexNo,
            error: `DexNo ${dexNo} in ${dexKey} points to pokemonId ${expectedPokemonId}, not ${pokemon._id}`
          });
        }
      });
    });
    
    // Build error message
    if (errors.length > 0) {
      let errorMessage = `\n\n❌ Found ${errors.length} invalid pokedexNumber entries:\n\n`;
      
      // Group by dex for easier reading
      const byDex = {};
      errors.forEach(err => {
        if (!byDex[err.dexKey]) byDex[err.dexKey] = [];
        byDex[err.dexKey].push(err);
      });
      
      Object.entries(byDex).forEach(([dexKey, errs]) => {
        errorMessage += `\n${dexKey}:\n`;
        errs.forEach(err => {
          errorMessage += `  • ${err.pokemon} (#${err.pokemonId}): ${err.error}\n`;
        });
      });
      
      throw new Error(errorMessage);
    }
    
    expect(errors.length).toBe(0);
  });
  
  test('sun-moon-alola specifically: no invalid dex numbers', () => {
    const errors = [];
    const sunMoonDex = dexLookups['sun_moon_alola'];
    
    if (!sunMoonDex) {
      throw new Error('sun_moon_alola dex not found');
    }
    
    allPokemon.forEach(pokemon => {
      const dexNo = pokemon.pokedexNumber?.['sun-moon'];
      
      if (dexNo !== undefined) {
        const expectedPokemonId = sunMoonDex.get(dexNo);
        
        if (expectedPokemonId === undefined) {
          errors.push({
            pokemon: pokemon.name.english,
            pokemonId: pokemon._id,
            dexNo: dexNo,
            error: 'DexNo not in sun-moon-alola dex'
          });
        } else if (expectedPokemonId !== pokemon._id) {
          errors.push({
            pokemon: pokemon.name.english,
            pokemonId: pokemon._id,
            dexNo: dexNo,
            expectedId: expectedPokemonId,
            error: 'PokemonId mismatch'
          });
        }
      }
    });
    
    if (errors.length > 0) {
      let errorMessage = `\n\n❌ sun-moon-alola validation failed:\n`;
      errors.forEach(err => {
        errorMessage += `  • ${err.pokemon} (#${err.pokemonId}): dexNo ${err.dexNo} - ${err.error}`;
        if (err.expectedId) {
          errorMessage += ` (expected pokemonId ${err.expectedId})`;
        }
        errorMessage += '\n';
      });
      throw new Error(errorMessage);
    }
    
    expect(errors.length).toBe(0);
  });
  
  test('No Pokemon should have duplicate dexNo values in the same dex', () => {
    const errors = [];
    const dexNoCounts = {};
    
    allPokemon.forEach(pokemon => {
      if (!pokemon.pokedexNumber) return;
      
      Object.entries(pokemon.pokedexNumber).forEach(([dexKey, dexNo]) => {
        const key = `${dexKey}:${dexNo}`;
        if (!dexNoCounts[key]) {
          dexNoCounts[key] = [];
        }
        dexNoCounts[key].push({
          name: pokemon.name.english,
          id: pokemon._id
        });
      });
    });
    
    // Find duplicates
    Object.entries(dexNoCounts).forEach(([key, pokemonList]) => {
      if (pokemonList.length > 1) {
        const [dexKey, dexNo] = key.split(':');
        errors.push({
          dexKey,
          dexNo: parseInt(dexNo),
          pokemon: pokemonList
        });
      }
    });
    
    if (errors.length > 0) {
      let errorMessage = `\n\n❌ Found duplicate dexNo values:\n`;
      errors.forEach(err => {
        errorMessage += `  • ${err.dexKey} dexNo ${err.dexNo}: `;
        errorMessage += err.pokemon.map(p => `${p.name} (#${p.id})`).join(', ');
        errorMessage += '\n';
      });
      throw new Error(errorMessage);
    }
    
    expect(errors.length).toBe(0);
  });
});
