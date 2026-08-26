import fs from "fs";
import path from "path";

/**
 * Reads every .json file directly inside a directory and returns their parsed contents.
 * @param {string} dirPath - absolute path to the directory
 * @returns {Array<Object>} parsed JSON documents, one per file, in readdir order
 */
function readJsonDir(dirPath) {
	return fs
		.readdirSync(dirPath)
		.filter((file) => path.extname(file) === ".json")
		.map((file) => JSON.parse(fs.readFileSync(path.join(dirPath, file), "utf8")));
}

export default readJsonDir;
