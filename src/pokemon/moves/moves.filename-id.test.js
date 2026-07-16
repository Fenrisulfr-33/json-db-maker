import path from "path";
import { fileURLToPath } from "url";
import loopThroughJsonFiles from "./folderLoop.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const MOVES_FOLDER = path.join(__dirname, "entries");
const FILENAME_PATTERN = /^(\d+)-/;

describe("Move filename matches _id", () => {
	test("every move's _id matches the numeric prefix of its filename", () => {
		const mismatches = [];

		loopThroughJsonFiles(MOVES_FOLDER, (move, filename) => {
			const match = filename.match(FILENAME_PATTERN);
			if (!match) {
				mismatches.push(`${filename}: no numeric prefix`);
				return;
			}

			const expectedId = parseInt(match[1], 10);
			if (move._id !== expectedId) {
				mismatches.push(
					`${filename}: expected _id ${expectedId}, got ${JSON.stringify(move._id)}`
				);
			}
		});

		expect(mismatches).toEqual([]);
	});
});
