const generations = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const knownLanguages = [
	"ja-hrkt", // japanese (kana)
	"ko", // korean?
	"zh-hant", // traditional chinese
	"fr", // french
	"de", // german
	"en", // english
	"es", // spanish
	"ja", // japanese
	"zh-hans", // simplified chinese
	"es-419" // Latin American Spanish
]

const languageMap = {
	"ja-hrkt": "Japanese (Kana)",
	"ko": "Korean",
	"zh-hant": "Traditional Chinese",
	"fr": "French",
	"de": "German",
	"en": "English",
	"es": "Spanish",
	"ja": "Japanese",
	"zh-hans": "Simplified Chinese",
	"es-419": "Latin American Spanish"
};

const amountOfPokedexes = 36; // 10 doesn't exist?

const pokedexes = [];

export { generations, knownLanguages, languageMap, amountOfPokedexes, pokedexes };