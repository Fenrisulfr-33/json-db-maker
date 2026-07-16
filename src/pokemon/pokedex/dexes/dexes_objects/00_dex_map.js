import readJson from '../../../../genericFunctions/files/readJson.js';

const red_blue_yellow = readJson('./01-red-blue-yellow.json', import.meta.url);
const gold_silver_crystal = readJson('./02-gold-silver-crystal.json', import.meta.url);
const ruby_sapphire_emerald = readJson('./03-ruby-sapphire-emerald.json', import.meta.url);
const firered_leafgreen = readJson('./04-firered-leafgreen.json', import.meta.url);
const diamond_pearl = readJson('./05-diamond-pearl.json', import.meta.url);
const platinum = readJson('./06-platinum.json', import.meta.url);
const heartgold_soulsilver = readJson('./07-heartgold-soulsilver.json', import.meta.url);
const black_white = readJson('./08-black-white.json', import.meta.url);
const black2_white2 = readJson('./09-black2-white2.json', import.meta.url);
const xy_central = readJson('./10-xy-central.json', import.meta.url);
const xy_coastal = readJson('./11-xy-coastal.json', import.meta.url);
const xy_mountain = readJson('./12-xy-mountain.json', import.meta.url);
const omega_ruby_alpha_sapphire = readJson('./13-omega-ruby-alpha-sapphire.json', import.meta.url);
const sun_moon_alola = readJson('./14-sun-moon-alola.json', import.meta.url);
const sun_moon_melemele = readJson('./15-sun-moon-melemele.json', import.meta.url);
const sun_moon_akala = readJson('./16-sun-moon-akala.json', import.meta.url);
const sun_moon_ulaula = readJson('./17-sun-moon-ulaula.json', import.meta.url);
const sun_moon_poni = readJson('./18-sun-moon-poni.json', import.meta.url);
const ultra_sun_ultra_moon_alola = readJson('./19-ultra-sun-ultra-moon-alola.json', import.meta.url);
const ultra_sun_ultra_moon_melemele = readJson('./20-ultra-sun-ultra-moon-melemele.json', import.meta.url);
const ultra_sun_ultra_moon_akala = readJson('./21-ultra-sun-ultra-moon-akala.json', import.meta.url);
const ultra_sun_ultra_moon_ulaula = readJson('./22-ultra-sun-ultra-moon-ulaula.json', import.meta.url);
const ultra_sun_ultra_moon_poni = readJson('./23-ultra-sun-ultra-moon-poni.json', import.meta.url);
const lets_go = readJson('./24-lets-go-pikachu-lets-go-eevee.json', import.meta.url);
const sword_shield = readJson('./25-sword-shield.json', import.meta.url);
const isle_of_armor = readJson('./26-isle-of-armor.json', import.meta.url);
const crown_tundra = readJson('./27-crown-tundra.json', import.meta.url);
const legends_arceus = readJson('./28-legends-arceus.json', import.meta.url);
const scarlet_violet = readJson('./29-scarlet-violet.json', import.meta.url);
const teal_mask = readJson('./30-teal-mask.json', import.meta.url);
const indigo_disk = readJson('./31-indigo-disk.json', import.meta.url);
// TODO: add legends ZA
// TODO: add mega dimensions

// Create a Map to hold all the dexes
const dexMap = new Map();

// Populate the Map with dex name as key and dex data as value
dexMap.set('red_blue_yellow', red_blue_yellow);
// dexMap.set('gold_silver_crystal', gold_silver_crystal);
// dexMap.set('ruby_sapphire_emerald', ruby_sapphire_emerald);
// dexMap.set('firered_leafgreen', firered_leafgreen);
// dexMap.set('diamond_pearl', diamond_pearl);
// dexMap.set('platinum', platinum);
// dexMap.set('heartgold_soulsilver', heartgold_soulsilver);
// dexMap.set('black_white', black_white);
// dexMap.set('black2_white2', black2_white2);
// dexMap.set('xy_central', xy_central);
// dexMap.set('xy_coastal', xy_coastal);
// dexMap.set('xy_mountain', xy_mountain);
// dexMap.set('omega_ruby_alpha_sapphire', omega_ruby_alpha_sapphire);
dexMap.set('sun_moon_alola', sun_moon_alola);
// dexMap.set('sun_moon_melemele', sun_moon_melemele);
// dexMap.set('sun_moon_akala', sun_moon_akala);
// dexMap.set('sun_moon_ulaula', sun_moon_ulaula);
// dexMap.set('sun_moon_poni', sun_moon_poni);
// dexMap.set('ultra_sun_ultra_moon_alola', ultra_sun_ultra_moon_alola);
// dexMap.set('ultra_sun_ultra_moon_melemele', ultra_sun_ultra_moon_melemele);
// dexMap.set('ultra_sun_ultra_moon_akala', ultra_sun_ultra_moon_akala);
// dexMap.set('ultra_sun_ultra_moon_ulaula', ultra_sun_ultra_moon_ulaula);
// dexMap.set('ultra_sun_ultra_moon_poni', ultra_sun_ultra_moon_poni);
// dexMap.set('sword_shield', sword_shield);
// dexMap.set('isle_of_armor', isle_of_armor);
// dexMap.set('crown_tundra', crown_tundra);
// dexMap.set('legends_arceus', legends_arceus);
// dexMap.set('scarlet_violet', scarlet_violet);
// dexMap.set('teal_mask', teal_mask);
// dexMap.set('indigo_disk', indigo_disk);

export default dexMap;
