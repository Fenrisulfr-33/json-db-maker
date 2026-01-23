const red_blue_yellow = require('./01_red_blue_yellow.json');
const gold_silver_crystal = require('./02_gold_silver_crystal.json');
const ruby_sapphire_emerald = require('./03_ruby_sapphire_emerald.json');
const firered_leafgreen = require('./04_firered_leafgreen.json');
const diamond_pearl = require('./05_diamond_pearl.json');
const platinum = require('./06_platinum.json');
const heartgold_soulsilver = require('./07_heartgold_soulsilver.json');
const black_white = require('./08_black_white.json');
const black2_white2 = require('./09_black2_white2.json');
const xy_central = require('./10_xy_central.json');
const xy_coastal = require('./11_xy_coastal.json');
const xy_mountain = require('./12_xy_mountain.json');
const omega_ruby_alpha_sapphire = require('./13_omega_ruby_alpha_sapphire.json');
const sun_moon_alola = require('./14_sun_moon_alola.json');
const sun_moon_melemele = require('./15_sun_moon_melemele.json');
const sun_moon_akala = require('./16_sun_moon_akala.json');
const sun_moon_ulaula = require('./17_sun_moon_ulaula.json');
const sun_moon_poni = require('./18_sun_moon_poni.json');
const ultra_sun_ultra_moon_alola = require('./19_ultra_sun_ultra_moon_alola.json');
const ultra_sun_ultra_moon_melemele = require('./20_ultra_sun_ultra_moon_melemele.json');
const ultra_sun_ultra_moon_akala = require('./21_ultra_sun_ultra_moon_akala.json');
const ultra_sun_ultra_moon_ulaula = require('./22_ultra_sun_ultra_moon_ulaula.json');
const ultra_sun_ultra_moon_poni = require('./23_ultra_sun_ultra_moon_poni.json');
const lets_go_pikachu_lets_go_eevee = require('./24_lets_go_pikachu_lets_go_eevee.json');
const sword_shield = require('./25_sword_shield.json');
const isle_of_armor = require('./26_isle_of_armor.json');
const crown_tundra = require('./27_crown_tundra.json');
const legends_arceus = require('./28_legends_arceus.json');
const scarlet_violet = require('./29_scarlet_violet.json');
const teal_mask = require('./30_teal_mask.json');
const indigo_disk = require('./31_indigo_disk.json');
// TODO: add legends ZA
// TODO: add mega dimensions

// Create a Map to hold all the dexes
const dexMap = new Map();

// Populate the Map with dex name as key and dex data as value
dexMap.set('red_blue_yellow', red_blue_yellow);
dexMap.set('gold_silver_crystal', gold_silver_crystal);
dexMap.set('ruby_sapphire_emerald', ruby_sapphire_emerald);
dexMap.set('firered_leafgreen', firered_leafgreen);
dexMap.set('diamond_pearl', diamond_pearl);
dexMap.set('platinum', platinum);
dexMap.set('heartgold_soulsilver', heartgold_soulsilver);
dexMap.set('black_white', black_white);
dexMap.set('black2_white2', black2_white2);
dexMap.set('xy_central', xy_central);
dexMap.set('xy_coastal', xy_coastal);
dexMap.set('xy_mountain', xy_mountain);
dexMap.set('omega_ruby_alpha_sapphire', omega_ruby_alpha_sapphire);
dexMap.set('sun_moon_alola', sun_moon_alola);
dexMap.set('sun_moon_melemele', sun_moon_melemele);
dexMap.set('sun_moon_akala', sun_moon_akala);
dexMap.set('sun_moon_ulaula', sun_moon_ulaula);
dexMap.set('sun_moon_poni', sun_moon_poni);
dexMap.set('ultra_sun_ultra_moon_alola', ultra_sun_ultra_moon_alola);
dexMap.set('ultra_sun_ultra_moon_melemele', ultra_sun_ultra_moon_melemele);
dexMap.set('ultra_sun_ultra_moon_akala', ultra_sun_ultra_moon_akala);
dexMap.set('ultra_sun_ultra_moon_ulaula', ultra_sun_ultra_moon_ulaula);
dexMap.set('ultra_sun_ultra_moon_poni', ultra_sun_ultra_moon_poni);
dexMap.set('lets_go_pikachu_lets_go_eevee', lets_go_pikachu_lets_go_eevee);
dexMap.set('sword_shield', sword_shield);
dexMap.set('isle_of_armor', isle_of_armor);
dexMap.set('crown_tundra', crown_tundra);
dexMap.set('legends_arceus', legends_arceus);
dexMap.set('scarlet_violet', scarlet_violet);
dexMap.set('teal_mask', teal_mask);
dexMap.set('indigo_disk', indigo_disk);

module.exports = dexMap;