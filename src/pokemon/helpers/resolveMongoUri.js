import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, "../../../.env") });

const VALID_ENVIRONMENTS = ["dev", "test", "prod"];

/**
 * Resolves the Mongo connection string for a given environment from
 * MONGO_URI_DEV / MONGO_URI_TEST / MONGO_URI_PROD.
 * @param {string} environment - "dev" | "test" | "prod"
 * @returns {string} Mongo connection string
 */
function resolveMongoUri(environment = "dev") {
	if (!VALID_ENVIRONMENTS.includes(environment)) {
		throw new Error(
			`Invalid environment "${environment}". Expected one of: ${VALID_ENVIRONMENTS.join(", ")}.`
		);
	}

	const envKey = `MONGO_URI_${environment.toUpperCase()}`;
	const uri = process.env[envKey];

	if (!uri) {
		throw new Error(`Missing Mongo connection string (expected ${envKey}).`);
	}

	return uri;
}

export default resolveMongoUri;
