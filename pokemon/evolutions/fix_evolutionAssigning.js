 const dataFetcher = require('../../dataFetcher')
 const evolutions = require('./evolutionAssigning.json');

 const evolutionRewrite = (old_data, new_data, new_array) => { 
    if (old_data.evolution >= 149 ) { old_data.evolution = old_data.evolution + 1};
    return old_data;
 }

 dataFetcher(
     '', 
    897, 
     evolutions,
     "../evolutions/00-evolutionsAssigning.json",
     evolutionRewrite,
 );