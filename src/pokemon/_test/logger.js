import fs from 'node:fs';
import { Console } from 'node:console';

// Create write streams to append data to files
const outputStream = fs.createWriteStream('./info.log', { flags: 'a' });
const errorStream = fs.createWriteStream('./error.log', { flags: 'a' });

// Instantiate a custom logger instance
const baseLogger = new Console({ stdout: outputStream, stderr: errorStream });

// Wrap log/error so every line gets a timestamp prefix, useful when
// scanning info.log/error.log later to see when a scrape ran.
const timestamp = () => new Date().toISOString();

const logger = {
  log: (...args) => baseLogger.log(`[${timestamp()}]`, ...args),
  error: (...args) => baseLogger.error(`[${timestamp()}]`, ...args),
};

export default logger;