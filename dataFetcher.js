const fs = require("fs");
const fetch = require("node-fetch");

/**
 * 
 * @param {*} dataURL 
 * @param {*} lastNum 
 * @param {*} oldData 
 * @param {*} fileSaveURL 
 * @param {*} converterFunc 
 */
function dataFetcher(
    dataURL = '',
    lastNum = 0,
    oldData = [],
    fileSaveURL = '',
    converterFunc,
    returnObj = true,
) {
    let index = 0;
    const newData = [],
    errors = {},
    checkObj = {},
    fetcher = async () => {
        try {
            if (index > lastNum) {
                // convert JSON object to string
                const data_array = JSON.stringify(newData, null, 2); // this makes it pretty
    
                // write JSON string to a file
                fs.writeFile(fileSaveURL, data_array, (error) => {
                    if (error) {
                        console.log(error);
                    }
                    console.log("JSON data is saved.");
                    console.log('CheckObj', checkObj);
                    console.log('Errors:', errors);
                });
                return;
            }
            // if changes are being made locally without api request 
            if (dataURL === ''){
                if (returnObj) { // if it is a object being returned
                    const returnObj = converterFunc(oldData[index], {}, newData, errors, checkObj);
                    newData.push(returnObj);
                } else { // it is an array being returned
                    const returnArray = converterFunc(oldData[index], {}, newData, errors, checkObj);
                    if (returnArray.length > 0) {
                        returnArray.forEach((item) => {newData.push(item)});
                    }
                }
            } else {
                const response = await fetch(`${dataURL}/${index + 1}`);
                const data = await response.json();
                if (oldData.length === 0) {
                    if (returnObj){
                        const returnObj = converterFunc(data, newData, null, errors, checkObj);
                        newData.push(returnObj);
                    }
                } else {
                    if (returnObj) {
                        const returnObj = converterFunc(oldData[index], data, newData, errors, checkObj);
                        newData.push(returnObj);
                    }
                }
            }
            index++;
            // console.log(`-----Done ${index}-----`);
            fetcher();
        } catch (error) {
            console.log(error);
        }
    };
    fetcher();
}

module.exports = dataFetcher;