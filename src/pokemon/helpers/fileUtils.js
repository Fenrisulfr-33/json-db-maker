/**
 * File Utilities
 * 
 * Helper functions for working with directories and files
 */

const fs = require('fs');
const path = require('path');

/**
 * Get all files in a directory
 * @param {string} dirPath - Path to directory
 * @param {object} options - Options for filtering
 * @param {string} options.extension - File extension to filter (e.g., '.json')
 * @param {boolean} options.recursive - Whether to search subdirectories
 * @returns {string[]} Array of file paths
 */
function getFilesInDirectory(dirPath, options = {}) {
  const { extension = null, recursive = false } = options;
  const files = [];
  
  // Check if directory exists
  if (!fs.existsSync(dirPath)) {
    throw new Error(`Directory not found: ${dirPath}`);
  }
  
  // Read directory contents
  const items = fs.readdirSync(dirPath);
  
  for (const item of items) {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && recursive) {
      // Recursively get files from subdirectory
      const subFiles = getFilesInDirectory(fullPath, options);
      files.push(...subFiles);
    } else if (stat.isFile()) {
      // Add file if it matches extension filter (or no filter)
      if (!extension || path.extname(fullPath) === extension) {
        files.push(fullPath);
      }
    }
  }
  
  return files;
}

/**
 * Loop through files in a directory and execute a callback
 * @param {string} dirPath - Path to directory
 * @param {function} callback - Function to call for each file (receives filepath, index)
 * @param {object} options - Options for filtering
 * @param {string} options.extension - File extension to filter (e.g., '.json')
 * @param {boolean} options.recursive - Whether to search subdirectories
 */
function forEachFile(dirPath, callback, options = {}) {
  const files = getFilesInDirectory(dirPath, options);
  
  files.forEach((filepath, index) => {
    callback(filepath, index);
  });
  
  return files.length;
}

/**
 * Loop through files and collect results
 * @param {string} dirPath - Path to directory
 * @param {function} callback - Function to call for each file (receives filepath)
 * @param {object} options - Options for filtering
 * @returns {array} Array of results from callback
 */
function mapFiles(dirPath, callback, options = {}) {
  const files = getFilesInDirectory(dirPath, options);
  return files.map(callback);
}

/**
 * Filter files based on a condition
 * @param {string} dirPath - Path to directory
 * @param {function} predicate - Function that returns true/false (receives filepath)
 * @param {object} options - Options for filtering
 * @returns {string[]} Array of file paths that match predicate
 */
function filterFiles(dirPath, predicate, options = {}) {
  const files = getFilesInDirectory(dirPath, options);
  return files.filter(predicate);
}

/**
 * Get file information for all files in a directory
 * @param {string} dirPath - Path to directory
 * @param {object} options - Options for filtering
 * @returns {object[]} Array of file info objects
 */
function getFileInfo(dirPath, options = {}) {
  const files = getFilesInDirectory(dirPath, options);
  
  return files.map(filepath => {
    const stat = fs.statSync(filepath);
    return {
      path: filepath,
      name: path.basename(filepath),
      ext: path.extname(filepath),
      size: stat.size,
      modified: stat.mtime,
      created: stat.birthtime
    };
  });
}

module.exports = {
  getFilesInDirectory,
  forEachFile,
  mapFiles,
  filterFiles,
  getFileInfo
};
