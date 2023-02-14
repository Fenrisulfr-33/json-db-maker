const dataFetcher = require('../../../dataFetcher');
const abilities = require('../../../jsons/00-jsons/00-abilities.json');

/**
 * For this first ability rewrite, since there is no exsisting data the oldData variable will
 * not exsist for this function, but will be implemented if further editing is required.
 */
 const abilityRewrite01 = (oldData, newData, newArray, errors, checkObj) => {
    for (const [key, value] of Object.entries(oldData.description)){
        const newValue = value.replaceAll('\n', ' ');
        oldData.description[key] = newValue;
    }
    for (const [key, value] of Object.entries(oldData.effect)){
        const newValue = value.replaceAll('\n', ' ').replaceAll('\n\n', ' ');
        oldData.effect[key] = newValue;
    }

    return oldData;
 }

dataFetcher(
    '', // no API needed
    266, // index to stop at - 1
    abilities, // old data
    "../../jsons/01-jsons/01-abilities.json", // new file write
    abilityRewrite01, // function passed in
    true, // returnObj = true, returnArray = false || Defaults to true
);