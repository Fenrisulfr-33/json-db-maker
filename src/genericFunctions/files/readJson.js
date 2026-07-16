import fs from 'fs';
import { fileURLToPath } from 'url';

export default function readJson(relativePath, importMetaUrl) {
	const filePath = fileURLToPath(new URL(relativePath, importMetaUrl));
	return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}
