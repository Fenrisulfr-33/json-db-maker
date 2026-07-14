import axios from 'axios';
import * as cheerio from 'cheerio';
import * as prettier from 'prettier';

// Usage: node inspectBlock.mjs <index>
// Prints the raw outer HTML of the Nth ".infocard-filter-block" on the
// evolution page (0-indexed), so you can copy/paste it out to inspect
// trickier cases (branching evolutions, items instead of levels, etc).

const formatHtml = async (unformattedHtml) => {
  return prettier.format(unformattedHtml, {
    parser: 'html',
    tabWidth: 2,
    printWidth: 80,
    singleAttributePerLine: false,
  });
};

const index = Number(process.argv[2] ?? 0);

const { data } = await axios.get('https://pokemondb.net/evolution');
const $ = cheerio.load(data);

const blocks = $('.infocard-filter-block');
console.log(`Total blocks found: ${blocks.length}`);

const block = blocks.eq(index);
if (!block.length) {
  console.log(`No block at index ${index}`);
  process.exit(1);
}

// print the pokemon names in this block first, as a quick summary
const names = block.find('a.ent-name').map((i, el) => $(el).text().trim()).get();
console.log(`Block ${index}: ${names.join(' -> ')}`);
console.log('--- raw HTML ---');

const unformattedElement = block.html();
const formattedElement = await formatHtml(unformattedElement);
console.log(formattedElement);