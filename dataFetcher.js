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
    errors = {},
) {
    let index = 0;
    const newData = [];
    const fetcher = async () => {
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
                    console.log('Errors:', errors);
                });
                return;
            }
            // if changes are being made locally without api request 
            if (dataURL === ''){
                converterFunc(oldData[index], {}, newData);
            } else {
                const response = await fetch(`${dataURL}/${index + 1}`);
                const data = await response.json();
                if (oldData.length === 0) {
                    converterFunc(data, newData, null, errors);
                } else {
                    converterFunc(oldData[index], data, newData, errors);
                }
            }
            index++;
            console.log(`-----Done ${index}-----`);
            fetcher();
        } catch (error) {
            console.log(error);
        }
    };
    fetcher();
}

module.exports = dataFetcher;