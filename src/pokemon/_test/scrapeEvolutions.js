import * as cheerio from 'cheerio';
import axios from 'axios';
import logger from '../_test/logger.js';


/**
 * Extracts { _id, name, type, howToEvolve: null } from a single "div.infocard".
 * "_id" is the pokemon's national dex number, read from the "#0001"-style
 * <small> at the top of ".infocard-lg-data".
 */
function extractPokemon($, $infocard) {
  const dexText = $infocard.find('.infocard-lg-data > small').first().text().trim();
  const _id = parseInt(dexText.replace('#', ''), 10);

  const name = $infocard.find('a.ent-name').first().text().trim();
  const type = $infocard.find('a.itype')
    .map((i, t) => $(t).text().trim())
    .get();

  return { _id, name, type, howToEvolve: null };
}

/**
 * Parses a single evolution line (one ".infocard-list-evo" container) into:
 *   [ { _id, name, type: [...], howToEvolve }, ... ]
 * "howToEvolve" describes how THIS pokemon evolves into the NEXT one in the
 * line (taken from the arrow span that follows it). The last pokemon in the
 * line gets howToEvolve: null since it has nowhere left to evolve.
 *
 * Also handles branching (Eevee-style) evolutions: a "span.infocard-evo-split"
 * contains sibling ".infocard-list-evo" branches, parsed recursively and
 * pushed as a nested array right after the pokemon they branch from, e.g.:
 *   [ {name: "Eevee", ...}, [ {name: "Vaporeon", ...}, {name: "Flareon", ...} ] ]
 *
 * @param {cheerio.CheerioAPI} $
 * @param {cheerio.Element} evoListEl  a ".infocard-list-evo" element
 * @returns {Array<{_id: number, name: string, type: string[], howToEvolve: string|null}>}
 */
function parseEvoContainer($, evoListEl) {
  const children = $(evoListEl).children().toArray();
  const branchMode = children.length > 0 && $(children[0]).is('span.infocard-arrow');

  const line = [];
  let pendingMethod = null;

  children.forEach((el) => {
    const $el = $(el);

    if ($el.is('div.infocard')) {
      const pokemon = extractPokemon($, $el);

      if (branchMode && pendingMethod !== null) {
        pokemon.howToEvolve = pendingMethod;
        pendingMethod = null;
      }

      line.push(pokemon);
    } else if ($el.is('span.infocard-arrow')) {
      const raw = $el.find('small').first().text().trim();
      const method = raw.replace(/^\(|\)$/g, '') || null;

      if (branchMode) {
        pendingMethod = method;
      } else {
        const prev = line[line.length - 1];
        if (prev && !Array.isArray(prev)) prev.howToEvolve = method;
      }
    } else if ($el.is('span.infocard-evo-split')) {
      const branches = $el.find('> .infocard-list-evo')
        .map((i, branchEl) => parseEvoContainer($, branchEl))
        .get();
      line.push(branches);
    }
  });

  return line;
}

/**
 * Parses every evolution line on the page and numbers each evolution family
 * with a unique, sequential "_id" (1, 2, 3, ... in the order they appear on
 * the page) - separate from each pokemon's own dex-number "_id" inside
 * "evolutions".
 *
 * @returns {Promise<Array<{_id: number, evolutions: Array}>>}
 */
async function scrapeEvolutionLines() {
  const url = 'https://pokemondb.net/evolution';
  const response = await axios.get(url);
  const html = response.data;
  const $ = cheerio.load(html);
  const lines = [];

  $('.infocard-filter-block').each((_, block) => {
    // only direct children - otherwise this also picks up the nested
    // branch containers inside .infocard-evo-split (e.g. Eevee's
    // Vaporeon/Jolteon/Flareon sub-lists) as if they were their own lines
    $(block).find('> .infocard-list-evo').each((__, evoListEl) => {
      const line = parseEvoContainer($, evoListEl);
      if (line.length) lines.push(line);
    });
  });

  return lines.map((evolutions, index) => ({
    _id: index + 1,
    evolutions,
  }));
}

scrapeEvolutionLines().then((lines) => {
  logger.log(JSON.stringify(lines, null, 2));
});

export { scrapeEvolutionLines, parseEvoContainer, extractPokemon };