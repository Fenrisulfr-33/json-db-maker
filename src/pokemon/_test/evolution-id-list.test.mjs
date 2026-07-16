import readJson from '../../genericFunctions/files/readJson.js';

const data = readJson('./evolution-id-list.json', import.meta.url);

describe('evolution-id-list', () => {
    test('has exactly 1025 pokemon', () => {
        expect(data.length).toBe(1025);
    });

    test('every id is a whole number (no decimals)', () => {
        const nonInteger = data.map((p) => p.id).filter((id) => !Number.isInteger(id));
        expect(nonInteger).toEqual([]);
    });

    test('no duplicate ids', () => {
        const ids = data.map((p) => p.id);
        const seen = new Set();
        const duplicates = new Set();
        for (const id of ids) {
            if (seen.has(id)) duplicates.add(id);
            seen.add(id);
        }
        expect([...duplicates]).toEqual([]);
    });

    test('ids run consecutively from 1 to 1025 with no gaps', () => {
        const idSet = new Set(data.map((p) => p.id));
        const missing = [];
        for (let i = 1; i <= 1025; i++) {
            if (!idSet.has(i)) missing.push(i);
        }
        expect(missing).toEqual([]);
    });
});
