/**
 * validate-ids.js
 *
 * Walks a folder of entity JSON files (e.g. abilities/entries/) and checks
 * that each filename's numeric prefix matches the '_id' field inside the
 * file. e.g. '920-nihil-light.json' should contain "_id": 920.
 *
 * Usage:
 *   node validate-ids.js path/to/entries
 */

const fs = require("fs");
const path = require("path");

const FILENAME_PATTERN = /^(\d+)-/;

function validateFolder(folder) {
	if (!fs.existsSync(folder) || !fs.statSync(folder).isDirectory()) {
		throw new Error(`Not a folder: ${folder}`);
	}

	const results = {
		ok: [],
		mismatches: [],
		badFilenames: [],
		missingId: [],
		badJson: [],
	};

	const files = fs
		.readdirSync(folder)
		.filter((f) => f.endsWith(".json") && !f.startsWith("_"))
		.sort();

	for (const filename of files) {
		const filepath = path.join(folder, filename);
		const stem = path.basename(filename, ".json");

		const match = stem.match(FILENAME_PATTERN);
		if (!match) {
			results.badFilenames.push(filename);
			continue;
		}

		const fileId = parseInt(match[1], 10);

		let data;
		try {
			const raw = fs.readFileSync(filepath, "utf-8");
			data = JSON.parse(raw);
		} catch (err) {
			results.badJson.push({ filename, error: err.message });
			continue;
		}

		if (!Object.prototype.hasOwnProperty.call(data, "_id")) {
			results.missingId.push(filename);
			continue;
		}

		if (data._id !== fileId) {
			results.mismatches.push({
				filename,
				expected: fileId,
				actual: data._id,
			});
			continue;
		}

		results.ok.push(filename);
	}

	return results;
}

function printReport(results) {
	console.log(`OK: ${results.ok.length}`);

	if (results.mismatches.length) {
		console.log(`\nMismatches (${results.mismatches.length}):`);
		for (const { filename, expected, actual } of results.mismatches) {
			console.log(
				`  ${filename}: filename says ${expected}, _id is ${JSON.stringify(actual)}`
			);
		}
	}

	if (results.badFilenames.length) {
		console.log(`\nFilenames with no numeric prefix (${results.badFilenames.length}):`);
		for (const filename of results.badFilenames) {
			console.log(`  ${filename}`);
		}
	}

	if (results.missingId.length) {
		console.log(`\nMissing '_id' field (${results.missingId.length}):`);
		for (const filename of results.missingId) {
			console.log(`  ${filename}`);
		}
	}

	if (results.badJson.length) {
		console.log(`\nInvalid JSON (${results.badJson.length}):`);
		for (const { filename, error } of results.badJson) {
			console.log(`  ${filename}: ${error}`);
		}
	}

	const totalIssues =
		results.mismatches.length +
		results.badFilenames.length +
		results.missingId.length +
		results.badJson.length;

	console.log(`\n${totalIssues === 0 ? "All good." : `${totalIssues} issue(s) found.`}`);

	return totalIssues;
}

if (require.main === module) {
	const folder = process.argv[2];
	if (!folder) {
		console.log("Usage: node validate-ids.js path/to/entries");
		process.exit(1);
	}

	const results = validateFolder(folder);
	const totalIssues = printReport(results);
	process.exit(totalIssues === 0 ? 0 : 1);
}

module.exports = { validateFolder, printReport };