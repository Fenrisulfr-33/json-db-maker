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
    dataURL,
    lastNum,
    oldData,
    fileSaveURL = '',
    converterFunc,
) {
    let index = 0;
    const newData = [],
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
                });
                return;
            }
            // if changes are being made locally without api request 
            if (dataURL === ''){
                const returnObj = converterFunc(oldData[index], {}, checkObj);
                newData.push(returnObj);
            } else {
                const response = await fetch(`${dataURL}/${index + 1}`);
                const data = await response.json();
                const returnObj = converterFunc(oldData[index], data, checkObj);
                console.log(`-----Done ${index + 1} Pokemon: ${returnObj._id}:${returnObj.name.english}-----`);
                newData.push(returnObj);
            }
            index++;
            fetcher();
        } catch (error) {
            console.log(error);
        }
    };
    fetcher();
}

module.exports = dataFetcher;