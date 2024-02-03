const reformatPalObjectForJoin = (pal) => {
    return {
        _id: pal._id,
        key: pal.key,
        name: pal.name,
        stats: pal.stats,
        type: pal.type,
        work: pal.work,
        drops: pal.drops,
        ability: pal.ability,
        asset: pal.asset,
        genus: pal.genus,
        rarity: pal.rarity,
        price: pal.price,
        size: pal.size,
        description: pal.description,
        skills: pal.skills,
        breeding: pal.breeding,
    }
}

const reformatPalObjectForSplit = (pal) => {
    return {
        _id: pal.id,
        key: pal.key,
        name: pal.name,
        stats: pal.stats,
        type: pal.types.map((type) => formatStringForRead(type)),
        work: pal.suitability.map((work) => {
            return {
                type: formatStringForRead(work.type),
                level: work.level,
            }
        }),
        drops: reformatDropsArray(pal.drops),
        ability: {
            name: formatStringForRead(pal.aura.name),
            description: pal.aura.description,
            tech: pal.aura.tech,
        },
        asset: pal.asset,
        genus: pal.genus,
        rarity: pal.rarity,
        price: pal.price,
        size: pal.size,
        description: pal.description,
        skills: pal.skills.map((skill) => {
            return {
                level: skill.level,
                name: formatStringForRead(skill.name),
                type: formatStringForRead(skill.type),
                cooldown: skill.cooldown,
                power: skill.power,
                description: skill.description,
            }
        }),
    }
}

const reformatDropsArray = (drops) => {
    return drops.map((drop) => {
        return formatStringForRead(drop);
   });;
}

const formatStringForRead = (word) => {
    if (word.includes('_')){
        const wordSplit = word.split('_');
        const formattedWords = wordSplit.map((word) => {
            return word[0].toUpperCase() + word.slice(1);
        });
        const formattedString = formattedWords.join(" ");
        return formattedString;
    } else {
        return word[0].toUpperCase() + word.slice(1);
    }
}
const reformatPalBreedingObjToArray = (pal, palName) => {
    // console.log('pal', pal);
    if (!pal || !pal.bredWith) {
        console.log('palName', palName);
    }
    const breedingObject = pal.bredWith;
    const palBreedingArray = [];
    for (const bredPal in breedingObject){
        const parentPal = breedingObject[bredPal];
        
        palBreedingArray.push({
            parentName: bredPal,
            parentId: parentPal.parentId,
            childName: parentPal.child.childName,
            childId: parentPal.child.childId,
        })
    }
    return palBreedingArray;
}

module.exports = {
    reformatPalObjectForJoin,
    reformatPalObjectForSplit,
    reformatPalBreedingObjToArray,
}