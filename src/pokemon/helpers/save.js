const fs = require("fs");

const test = [{
    _id: 2
}, {
    _id: 1
}, {
    _id: 1
}, {
    _id: 6
}, {
    _id: 3
}, {
    _id: 5
}, {
    _id: 4
}, {
    _id: 8
}, {
    _id: 7
}, {
    _id: 2
}, {
    _id: 10
}, {
    _id: 9
}, {
    _id: 12
}, {
    _id: 11
}, {
    _id: 0
}];

/**
 * Author: Brendan Archer
 * 
 * This function is to save files
 * 
 * this function should not handle sorting
 * this function should not handle error logging
 * this function should only handle saving files
 * 
 * @param {Array} data - the list of objects 
 * @param {String} outputFile - destination of save file
 */
function save(data, output) {
    // Sort the data by _id
    const sortedData = sortDataById(data);

    // Stringify the data
    const saveData = stringifyData(sortedData);

    // Save the data to a file
    fs.writeFile(`${output}.json`, saveData, (error) => {
        error ? errorLog(error) : saveLog(output);
    });
}
/**
 * Converts data to a stringified JSON format
 *      JSON.stringify(value, replacer, space)
 * 
 * space = 2 adds indentation, white space, and line break characters to the return-value JSON text to make it easier to read
 * @param {*} data 
 * @returns stringified data
 */
function stringifyData(data) {
    return JSON.stringify(data, null, 2);
}

/**
 * 
 * @param {*} error 
 */
function errorLog(error) {
    console.error(`Save File Error: ${error}`);
}

function saveLog(output) {
    console.log(`${output}.json saved.`);
}

/**
 * Sorts data by _id
 * 
 * sort automatically sorts in alphabetical order
 * or in the case of numbers lowest starting numbers first
 *      eg. 1, 10, 100, 2, 20, 200
 * @param {*} data 
 * @returns 
 */
const sortDataById = (data) => {
    /**
     * Array.prototype.sort()
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
     * @param {function} compareFunction Optional
     * sort(compareFunction)
     * compareFunction(a, b) {
     *     return negative number if a < b
     *     return positive number if a > b
     *     return 0 if a == b
     * }
     */
    return data.sort((a, b) => {
        return ascending(a._id, b._id);
    });
}

/**
 * Sorts in ascending order
 * 
 * @param {*} value1 
 * @param {*} value2 
 * @returns 
 */
function ascending(value1, value2) {
    if (value1 < value2) {
        return -1;
    }
}

/**
 * Sorts in descending order
 * @param {*} value1 
 * @param {*} value2 
 * @returns 
 */
function descending(value1, value2) {
    if (value1 > value2) {
        return -1;
    }
}

/**
 * Logs array items in a single line
 * @param {*} data 
 */
function logArray(data) {
    let output = "";

    data.forEach((item) => {
        output += `${item} `;
    });

    console.log(output);
}

module.exports = save;