/**
 * Test: Verify that DEXES_LENGTH constants match actual dex lengths
 * 
 * This test compares the expected dex lengths (from DEXES_LENGTH.js)
 * against the actual lengths of dex files in dexes/dexes_objects/
 */

import dexMap from '../dexes/dexes_objects/00_dex_map.js';
import DEXES_LENGTH from './dexes-length.js';

describe('Pokedex Length Validation', () => {
  
  test('All dexes should have matching lengths', () => {
    const mismatches = [];
    const missing = [];
    
    // Iterate through each dex in the map
    for (const [dexName, dexData] of dexMap.entries()) {
      const actualLength = dexData.length;
      const constantName = dexName.toUpperCase();
      console.log(`Checking dex: ${dexName}, constant: ${constantName}, actual length: ${actualLength}`);
      const expectedLength = DEXES_LENGTH[constantName];
      
      // Check if constant exists
      if (expectedLength === undefined) {
        missing.push({
          dex: dexName,
          constantName: constantName,
          actualLength: actualLength
        });
      }
      // Check if lengths match
      else if (actualLength !== expectedLength) {
        mismatches.push({
          dex: dexName,
          expected: expectedLength,
          actual: actualLength,
          difference: actualLength - expectedLength
        });
      }
    }
    
    // Build error message if there are issues
    let errorMessage = '';
    
    if (missing.length > 0) {
      errorMessage += '\n\n❌ Missing DEXES_LENGTH constants:\n';
      missing.forEach(m => {
        errorMessage += `  • ${m.constantName} (actual length: ${m.actualLength})\n`;
      });
      errorMessage += '\nAdd these to DEXES_LENGTH.js:\n';
      missing.forEach(m => {
        errorMessage += `const ${m.constantName} = ${m.actualLength};\n`;
      });
    }
    
    if (mismatches.length > 0) {
      errorMessage += '\n\n❌ Dex length mismatches:\n';
      mismatches.forEach(m => {
        errorMessage += `  • ${m.dex}: expected ${m.expected}, got ${m.actual} (${m.difference > 0 ? '+' : ''}${m.difference})\n`;
      });
    }
    
    // Assert no issues
    expect(missing.length).toBe(0);
    expect(mismatches.length).toBe(0);
    
    if (errorMessage) {
      throw new Error(errorMessage);
    }
  });
  
  test('Each individual dex should match its constant', () => {
    // Individual tests for better debugging
    for (const [dexName, dexData] of dexMap.entries()) {
      const constantName = dexName.toUpperCase();
      const expectedLength = DEXES_LENGTH[constantName];
      
      if (expectedLength !== undefined) {
        expect(dexData.length).toBe(expectedLength);
      }
    }
  });
  
  test('DEXES_LENGTH should not have extra constants', () => {
    const dexNames = Array.from(dexMap.keys()).map(name => name.toUpperCase());
    const constantNames = Object.keys(DEXES_LENGTH);
    
    const extras = constantNames.filter(name => !dexNames.includes(name));
    
    if (extras.length > 0) {
      const errorMessage = `\n❌ Unused DEXES_LENGTH constants:\n${extras.map(e => `  • ${e}`).join('\n')}`;
      throw new Error(errorMessage);
    }
    
    expect(extras.length).toBe(0);
  });
});
