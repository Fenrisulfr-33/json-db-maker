const dataFetcher = require('../dataFetcher');

/**
 * For this first ability rewrite, since there is no exsisting data the oldData variable will
 * not exsist for this function, but will be implemented if further editing is required.
 */
 const abilityRewrite00 = (currentAbilityObj = {}, newJson = []) => {
    const abilityObjTemp = {
        _id: currentAbilityObj.id,
        name: {
            english: currentAbilityObj.name,
        },
        effect: {},
        description: {},
    }
    currentAbilityObj.flavor_text_entries.forEach((text) => {
        if (text.language.name === 'en') {
            const game = text.version_group.name;
            abilityObjTemp.description[game] = text.flavor_text;
        }
    });

    if (currentAbilityObj.effect_entries && currentAbilityObj.effect_entries.length > 0) {
        currentAbilityObj.effect_entries.forEach((entry) => {
            if (entry.language.name === 'en') {
                abilityObjTemp.effect.shortEffect = entry.short_effect;
                abilityObjTemp.effect.full = entry.effect;
            }
        });
    }

    newJson.push(abilityObjTemp);
};



dataFetcher(
    "https://pokeapi.co/api/v2/ability/",
    266,
    [],
    "../00-jsons/00-abilities.json",
    abilityRewrite00
);


