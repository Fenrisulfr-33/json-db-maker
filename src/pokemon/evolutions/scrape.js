import * as cheerio from 'cheerio';

/**
 * Parses a single evolution line (one ".infocard-list-evo" container) into:
 *   [ { _id, name, type: [...], howToEvolve }, ... ]
 * "howToEvolve" describes how THIS pokemon evolves into the NEXT one in the
 * line (taken from the arrow span that follows it). The last pokemon in the
 * line gets howToEvolve: null since it has nowhere left to evolve.
 *
 * @param {cheerio.CheerioAPI} $
 * @param {cheerio.Element} evoListEl  a ".infocard-list-evo" element
 * @param {number} startId  first _id to assign (defaults to 1)
 * @returns {Array<{_id: number, name: string, type: string[], howToEvolve: string|null}>}
 */
function parseEvolutionLine($, evoListEl, startId = 1) {
  const pokemon = [];

  $(evoListEl).children().each((_, el) => {
	const $el = $(el);

	if ($el.is('div.infocard')) {
	  const name = $el.find('a.ent-name').first().text().trim();
	  const type = $el.find('a.itype')
		.map((i, t) => $(t).text().trim())
		.get();

	  pokemon.push({ name, type, howToEvolve: null });
	} else if ($el.is('span.infocard-arrow')) {
	  // raw text looks like "(Level 16)" - strip the parens
	  const raw = $el.find('small').first().text().trim();
	  const method = raw.replace(/^\(|\)$/g, '') || null;

	  const prev = pokemon[pokemon.length - 1];
	  if (prev) prev.howToEvolve = method;
	}
  });

  return pokemon.map((p, i) => ({ _id: startId + i, ...p }));
}

/**
 * Parses every evolution line on the page.
 * Each ".infocard-filter-block" contains one ".infocard-list-evo".
 * _id numbering restarts at 1 for each line (matches the example output).
 * Pass { globalIds: true } to keep a single running counter across all lines instead.
 *
 * @param {string} html
 * @param {{globalIds?: boolean}} [opts]
 * @returns {Array<Array<{_id: number, name: string, type: string[], howToEvolve: string|null}>>}
 */
function scrapeEvolutionLines(html, opts = {}) {
  const $ = cheerio.load(html);
  const lines = [];
  let counter = 1;

  $('.infocard-filter-block .infocard-list-evo').each((_, evoListEl) => {
	const startId = opts.globalIds ? counter : 1;
	const line = parseEvolutionLine($, evoListEl, startId);
	if (opts.globalIds) counter += line.length;
	if (line.length) lines.push(line);
  });

  return lines;
}

export { scrapeEvolutionLines, parseEvolutionLine };

// Example usage:
// import fs from 'node:fs';
// const html = fs.readFileSync('page.html', 'utf8');
// console.log(JSON.stringify(scrapeEvolutionLines(html), null, 2));
