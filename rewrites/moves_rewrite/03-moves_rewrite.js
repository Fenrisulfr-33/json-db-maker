const fs = require('fs');
const fetch = require('node-fetch');

const final = [];
let index = 826;
const fetcher = async () => {
    const POKE_API_URL = 'https://pokeapi.co/api/v2/';
    try {
        if (index > 899) { // current highest move available is 900, so 899
            const data_array = JSON.stringify(final, null, 2); // this makes it pretty
            fs.writeFile('../../jsons/03-jsons/03-moves.json', data_array, (error) => {
               error ? console.log(error) : console.log("JSON data is saved.");
            });
            return;
        }
        const response = await fetch(`${POKE_API_URL}move/${index+1}`);
        const data = await response.json();
        movesRewrite03(data, final);
        index++
        console.log(`-----Done ${index}-----`)
        fetcher();
    } catch (error) {
        console.log(error);
    }
}
fetcher();

const movesRewrite03 = (data, new_array) => {
    // this is your new object with info you need
    const contact = data.damage_class.name === 'status' ? 'No' : null;
    let contest = null;
    let category = null;
    let generation = null;
    if (data.contest_type) {
        contest = data.contest_type.name;
    }
    if (data.damage_class) {
        category = data.damage_class.name;
    }
    if (data.generation) {
        let gen = data.generation.name;
        if (gen === 'generation-ix') { generation = '9'}
        if (gen === 'generation-viii') {generation = '8'};
        if (gen === 'generation-vii') {generation = '7'};
        if (gen === 'generation-vi') {generation = '6'};
        if (gen === 'generation-v') {generation = '5'};
        if (gen === 'generation-iv') {generation = '4'};
        if (gen === 'generation-iii') {generation = '3'};
        if (gen === 'generation-ii') {generation = '2'};
        if (gen === 'generation-i') {generation = '1'};
    };

    const _templateObj = {
        _id: data.id, 
        name: {
            english: data.name.charAt(0).toUpperCase() + data.name.slice(1),
            // japanese: data.names[0].name,
            // chinese: data.names[2].name,
            // korean: data.names[1].name,
            // german: data.names[5].name,
            // french: data.names[4].name, 
            // italian: data.names[7].name, 
            // spanish: data.names[6].name
        },
        type: data.type.name.charAt(0).toUpperCase() + data.type.name.slice(1),
        category: category.charAt(0).toUpperCase() + category.slice(1),
        contest: contest,
        pp: data.pp,
        power: data.power,
        accuracy: data.accuracy,
        contact: contact,
        generation: generation,
        target: data.target.name.charAt(0).toUpperCase() + data.target.name.slice(1),
        changes: [],
    }   

    new_array.push(_templateObj)
}