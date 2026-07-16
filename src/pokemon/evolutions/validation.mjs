import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';
import validateEntries from '../../genericFunctions/schemaValidation.mjs';
import schema from './schema.json' with { type: 'json' };

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const entriesDir = path.join(__dirname, 'entries');

const entries = fs
	.readdirSync(entriesDir)
	.filter((file) => path.extname(file) === '.json')
	.map((file) => JSON.parse(fs.readFileSync(path.join(entriesDir, file), 'utf8')));

validateEntries(schema, entries);