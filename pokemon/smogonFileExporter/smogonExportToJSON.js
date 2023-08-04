const fs = require('fs');
const folders = fs.readdirSync('./smogon/scarlet-violet/');

// This Main function passes through all folders and files and returns back .json docs to use for our database.
const main = async () => {
    const pokemonFolders = getFolders(folders);
    for (let i = 0; i < pokemonFolders.length; i++) {
        const files = fs.readdirSync(`./smogon/scarlet-violet/${pokemonFolders[i]}/`);
        const returnList = [];
        for (let j = 0; j < files.length; j++) {
            try {
                const filename = require.resolve(`./smogon/scarlet-violet/${pokemonFolders[i]}/${files[j]}`);
                fs.readFile(filename, 'utf8', ((error, data) => {
                    if (error) {
                        console.error(error);
                    }
                    returnList.push(smogonExportToJSON(data, pokemonFolders[i].includes('vgc')));
                    if (returnList.length === files.length) {
                        saveJsonData(`./smogon/scarlet-violet/${pokemonFolders[i]}.json`, returnList);
                    }
                }));
            } catch (e) {
                callback(e);
            }
        }
    }
}
// This function takes in the .txt file as a string and manipulates it to give us our return object.
const smogonExportToJSON = (string, isVgc) => {
    let words = string.split('\n');
    if (isVgc) {
        words.splice(1, 1);
    }
    // Below is the format of export
    /**
     * Gengar @ Choice Specs
     * Ability: Cursed Body
     * EVs: 252 SpA / 4 SpD / 252 Spe
     * Tera Type: Ghost
     * Timid Nature
     * - Trick
     * - Shadow Ball
     * - Focus Blast
     * - Sludge Bomb
     */

    let pokemonName = '',
    item = '',
    ability = '',
    evs = null,
    ivs = null,
    teraType = null,
    nature = '',
    moves = [];

    words.forEach((word, index) => {
        if (word.includes('@')){
            const atIndex = string.indexOf('@');
            pokemonName = word.slice(0, atIndex - 1);
            item = word.slice(atIndex + 2, word.length - 1);
        } else if (word.includes('Ability:')){
            ability = word.slice(9, word.length - 1); // Checks good 
        } else if (word.includes('EVs:')){
            evs = reformatEffortValues(word.slice(5, word.length - 1));
        } else if (word.includes('IVs:')){
            ivs = reformatEffortValues(word.slice(5, word.length - 1))
        } else if (word.includes('Tera Type:')){
            teraType = word.slice(11, word.length - 1);
        } else if (word.includes('Nature')){
            nature = word.replace('Nature', '');
            nature = nature.slice(0, nature.length - 2);
        } else if (word.includes('-')){
            const newWord = word.replace('\r', '').replace('- ', '');
            moves.push(newWord)
        }
    })
    const returnObject = {
        pokemonName,
        item,
        ability,
        evs,
    };
    ivs ? returnObject.ivs = ivs : null;
    teraType ? returnObject.teraType = teraType : null;
    returnObject.nature = nature;
    returnObject.moves = moves;
    return returnObject;
}
// This function reformats EVs/Ivs so that the data can be in either an array or object form.
const reformatEffortValues = (evs) => {
    const evsAry = [];
    const newEvs = evs.split('/');
    const stats = ['Hp', 'Atk', 'Def', 'SpA', 'SpD', 'Spe'];
    newEvs.forEach((ev) => {
        const noGap = ev.replaceAll(' ', '');
        stats.forEach((stat) => {
            if (noGap.includes(stat)) {
                const statValue = noGap.replace(stat, '');
                evsAry.push([stat, Number(statValue)])
            }
        })
    })
    return evsAry;
}
// This function takes in the file name and removes .json documents where the return data is saved.
const getFolders = (files) => {
    const returnFolders = [];
    files.forEach((file) => {
        if (file.includes('.json') === false) {
            returnFolders.push(file);
        }
    })
    return returnFolders;
}
// This function saves the .json docs after the loop has passed through an entire folder.
const saveJsonData = (saveRoute, array) => {
    const saveJson = JSON.stringify(array, null, 2); // this makes it pretty
    fs.writeFile(saveRoute, saveJson, (error) => {
        if (error) {
            console.log(error);
        }
        console.log("JSON data is saved.");
    });
    return;
}
// Run main function.
main();