import axios from 'axios';
// const cheerio = require("cheerio");
import cheerio from 'cheerio';
import fs from 'node:fs'
import * as prettier from 'prettier';

function isSame(str1, str2) {
	return str1.toLowerCase() === str2.toLowerCase();
}

async function fetchHtml(url) {
	const response = await axios.get(url);
	return cheerio.load(response.data);
}

const getHeadings = ($) => {
	return $("h2");
}

async function scrapeEvolutions() {
	const url = 'https://pokemondb.net/evolution';
	const $ = await fetchHtml(url);
	const headings = getHeadings($);
	console.log("Headings found: ", headings.length);

	// 1. collect matching elements synchronously (no await here)
	const gen1Elements = [];
	headings.each((index, element) => {
		const heading = $(element).text().trim();
		if (heading.slice(0, 10) === "Generation" && heading === "Generation 1") {
			gen1Elements.push(element);
		}
	});

	// 2. now do the async formatting in a real loop
	for (const element of gen1Elements) {
		console.log("Processing heading: Generation 1");
		const currentElement = $(element).next();
		const unformattedElement = currentElement.html();
		const formattedElement = await formatHtml(unformattedElement);
		console.log("Formatted element HTML: ", formattedElement);
	}
}

const formatHtml = async (unformattedHtml) => {
  return prettier.format(unformattedHtml, {
	parser: 'html',
	tabWidth: 2,
	printWidth: 80,
	singleAttributePerLine: false
  });
}

const eachPokemonInGeneration = ($, headingElement) => {
	const generationList = $(headingElement).next("ul");
	const pokemonItems = generationList.find("li");
}

scrapeEvolutions();
