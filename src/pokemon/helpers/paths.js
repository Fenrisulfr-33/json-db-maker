import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const MOVES_ENTRIES_DIR = path.join(__dirname, "../moves/entries");
const MOVES_GAMES_DIR = path.join(__dirname, "../moves/games");
const POKEDEX_ENTRIES_DIR = path.join(__dirname, "../pokedex/entries");

export { MOVES_ENTRIES_DIR, MOVES_GAMES_DIR, POKEDEX_ENTRIES_DIR };
