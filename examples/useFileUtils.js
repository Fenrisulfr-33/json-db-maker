/**
 * Examples of using fileUtils.js
 * 
 * Run: node examples/useFileUtils.js
 */

const { getFilesInDirectory, forEachFile, mapFiles, filterFiles, getFileInfo } = require('../schemas/fileUtils');
const fs = require('fs');
const path = require('path');

console.log('='.repeat(60));
console.log('File Utils Examples');
console.log('='.repeat(60) + '\n');

// Example 1: Get all JSON files in a directory
console.log('Example 1: Get all JSON files in pokemon/pokemon-data/moves');
console.log('-'.repeat(60));
try {
  const jsonFiles = getFilesInDirectory('pokemon/pokemon-data/moves', { 
    extension: '.json' 
  });
  console.log(`Found ${jsonFiles.length} JSON files`);
  console.log('First 5:', jsonFiles.slice(0, 5).map(f => path.basename(f)));
} catch (error) {
  console.log('Error:', error.message);
}
console.log('');

// Example 2: Loop through files and do something
console.log('Example 2: Loop through files with forEachFile');
console.log('-'.repeat(60));
try {
  let count = 0;
  forEachFile(
    'pokemon/pokemon-data/moves',
    (filepath, index) => {
      if (index < 3) { // Only show first 3
        const data = JSON.parse(fs.readFileSync(filepath, 'utf8'));
        console.log(`${index + 1}. ${data.name.english} (${data.type})`);
      }
      count++;
    },
    { extension: '.json' }
  );
  console.log(`... and ${count - 3} more files`);
} catch (error) {
  console.log('Error:', error.message);
}
console.log('');

// Example 3: Map files to extract data
console.log('Example 3: Extract specific data with mapFiles');
console.log('-'.repeat(60));
try {
  const moveTypes = mapFiles(
    'pokemon/pokemon-data/moves',
    (filepath) => {
      const data = JSON.parse(fs.readFileSync(filepath, 'utf8'));
      return {
        name: data.name.english,
        type: data.type,
        power: data.power
      };
    },
    { extension: '.json' }
  );
  
  // Show first 5
  console.log('First 5 moves:');
  moveTypes.slice(0, 5).forEach(move => {
    console.log(`  ${move.name}: ${move.type} type, ${move.power || 'no'} power`);
  });
  console.log(`Total moves: ${moveTypes.length}`);
} catch (error) {
  console.log('Error:', error.message);
}
console.log('');

// Example 4: Filter files based on condition
console.log('Example 4: Filter files by name pattern');
console.log('-'.repeat(60));
try {
  const thunderMoves = filterFiles(
    'pokemon/pokemon-data/moves',
    (filepath) => {
      const filename = path.basename(filepath);
      return filename.includes('thunder');
    },
    { extension: '.json' }
  );
  
  console.log('Moves with "thunder" in filename:');
  thunderMoves.forEach(file => console.log(`  ${path.basename(file)}`));
} catch (error) {
  console.log('Error:', error.message);
}
console.log('');

// Example 5: Get file information
console.log('Example 5: Get detailed file information');
console.log('-'.repeat(60));
try {
  const fileInfo = getFileInfo('pokemon/pokemon-data', { 
    extension: '.json',
    recursive: false 
  });
  
  console.log('JSON files in pokemon/pokemon-data:');
  fileInfo.forEach(info => {
    const sizeKB = (info.size / 1024).toFixed(2);
    console.log(`  ${info.name}: ${sizeKB} KB, modified ${info.modified.toLocaleDateString()}`);
  });
} catch (error) {
  console.log('Error:', error.message);
}
console.log('');

// Example 6: Recursive directory search
console.log('Example 6: Recursive search through subdirectories');
console.log('-'.repeat(60));
try {
  const allPalworldAbilities = getFilesInDirectory('palworld/abilities', {
    extension: '.json',
    recursive: true
  });
  
  console.log(`Found ${allPalworldAbilities.length} ability files (recursive)`);
  console.log('First 10:', allPalworldAbilities.slice(0, 10).map(f => path.basename(f)));
} catch (error) {
  console.log('Error:', error.message);
}
console.log('');

// Example 7: Count total Pokemon by type
console.log('Example 7: Analyze data across files');
console.log('-'.repeat(60));
try {
  const typeCount = {};
  
  forEachFile(
    'pokemon/pokemon-data/moves',
    (filepath) => {
      const data = JSON.parse(fs.readFileSync(filepath, 'utf8'));
      const type = data.type;
      typeCount[type] = (typeCount[type] || 0) + 1;
    },
    { extension: '.json' }
  );
  
  console.log('Move count by type:');
  Object.entries(typeCount)
    .sort((a, b) => b[1] - a[1])
    .forEach(([type, count]) => {
      console.log(`  ${type}: ${count}`);
    });
} catch (error) {
  console.log('Error:', error.message);
}

console.log('\n' + '='.repeat(60));
console.log('Done! You can now use these functions in your own scripts.');
console.log('='.repeat(60));
