// validate-schema.mjs
// Reusable validator: checks each item in an array against a JSON schema,
// logging any entry that fails.
//
// Setup:
//   npm install ajv

import { fileURLToPath } from 'url';
import fs from 'fs';
import Ajv from 'ajv';

/**
 * Validates every item in `data` against `schema`.
 * Logs each invalid entry and a summary line.
 *
 * @param {object} schema - a JSON schema object
 * @param {Array<object>} data - the entries to check
 * @returns {Array<{index: number, entry: object, errors: string[]}>} failures
 */
export default function validateEntries(schema, data) {
  const ajv = new Ajv();
  const validate = ajv.compile(schema);
  const failures = [];

  data.forEach((entry, i) => {
    if (!validate(entry)) {
      const errors = validate.errors.map(
        (err) => `${err.instancePath || '(root)'} ${err.message}`
      );
      failures.push({ index: i, entry, errors });
      console.log(`Entry ${i} (_id: ${entry._id}) is INVALID:`);
      errors.forEach((e) => console.log(`  - ${e}`));
    }
  });

  console.log(`\nChecked ${data.length} entries, ${failures.length} failed validation.`);
  return failures;
}

// CLI usage: node validate-schema.mjs <schema.json> <data.json>
if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  const [schemaPath, dataPath] = process.argv.slice(2);

  if (!schemaPath || !dataPath) {
    console.error('Usage: node validate-schema.mjs <schema.json> <data.json>');
    process.exit(1);
  }

  const schema = JSON.parse(fs.readFileSync(schemaPath, 'utf8'));
  const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
  validateEntries(schema, data);
}