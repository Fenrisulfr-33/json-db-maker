const reformatPalObjectForDex = (pal) => {
    return {
        _id: pal._id,
        name: pal.name,
        stats: pal.stats,
        types: pal.types,
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

module.exports = {
    reformatPalObjectForDex
}