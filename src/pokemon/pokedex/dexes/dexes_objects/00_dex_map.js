const red_blue_yellow = require('./01-red-blue-yellow.json');
const gold_silver_crystal = require('./02-gold-silver-crystal.json');
const ruby_sapphire_emerald = require('./03-ruby-sapphire-emerald.json');
const firered_leafgreen = require('./04-firered-leafgreen.json');
const diamond_pearl = require('./05-diamond-pearl.json');
const platinum = require('./06-platinum.json');
const heartgold_soulsilver = require('./07-heartgold-soulsilver.json');
const black_white = require('./08-black-white.json');
const black2_white2 = require('./09-black2-white2.json');
const xy_central = require('./10-xy-central.json');
const xy_coastal = require('./11-xy-coastal.json');
const xy_mountain = require('./12-xy-mountain.json');
const omega_ruby_alpha_sapphire = require('./13-omega-ruby-alpha-sapphire.json');
const sun_moon_alola = require('./14-sun-moon-alola.json');
const sun_moon_melemele = require('./15-sun-moon-melemele.json');
const sun_moon_akala = require('./16-sun-moon-akala.json');
const sun_moon_ulaula = require('./17-sun-moon-ulaula.json');
const sun_moon_poni = require('./18-sun-moon-poni.json');
const ultra_sun_ultra_moon_alola = require('./19-ultra-sun-ultra-moon-alola.json');
const ultra_sun_ultra_moon_melemele = require('./20-ultra-sun-ultra-moon-melemele.json');
const ultra_sun_ultra_moon_akala = require('./21-ultra-sun-ultra-moon-akala.json');
const ultra_sun_ultra_moon_ulaula = require('./22-ultra-sun-ultra-moon-ulaula.json');
const ultra_sun_ultra_moon_poni = require('./23-ultra-sun-ultra-moon-poni.json');
const lets_go = require('./24-lets-go-pikachu-lets-go-eevee.json');
const sword_shield = require('./25-sword-shield.json');
const isle_of_armor = require('./26-isle-of-armor.json');
const crown_tundra = require('./27-crown-tundra.json');
const legends_arceus = require('./28-legends-arceus.json');
const scarlet_violet = require('./29-scarlet-violet.json');
const teal_mask = require('./30-teal-mask.json');
const indigo_disk = require('./31-indigo-disk.json');
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

module.exports = dexMap;