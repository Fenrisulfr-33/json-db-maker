/**
 * Loop through all .json files in a folder, synchronously, calling
 * callback(jsonData, filename) for each one.
 */

const fs = require("fs");
const path = require("path");

const loopThroughJsonFiles = (folderPath, callback) => {
	if (!fs.existsSync(folderPath)) {
		throw new Error(`Folder does not exist: ${folderPath}`);
	}

	const files = fs
		.readdirSync(folderPath)
		.filter((file) => path.extname(file) === ".json");

	files.forEach((file) => {
		const filePath = path.join(folderPath, file);
		const raw = fs.readFileSync(filePath, "utf8");
		const jsonData = JSON.parse(raw);
		callback(jsonData, file);
	});
};

module.exports = loopThroughJsonFiles;