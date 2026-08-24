import fs from "fs";
import path from "path";

/**
 * Loops through every JSON file in a folder, letting a callback modify each
 * file's parsed contents, then rewrites the result back to the same file.
 * Returning `undefined` from the callback skips rewriting that file.
 * @param {string} folderPath - absolute path to the folder
 * @param {function} modify - receives (data, fileName) and returns the data to write back
 */
function loopAndRewriteFolder(folderPath, modify) {
	const files = fs
		.readdirSync(folderPath)
		.filter((file) => path.extname(file) === ".json");

	files.forEach((file) => {
		const filePath = path.join(folderPath, file);
		const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
		const updated = modify(data, file);

		if (updated === undefined) return;

		fs.writeFileSync(filePath, `${JSON.stringify(updated, null, 2)}\n`);
	});
}

export default loopAndRewriteFolder;
