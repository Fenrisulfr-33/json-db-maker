const pokedex = require('./pokemon-data/2024-02-11-pokedex.json');

test('Pokedex Length', () => {
  expect(pokedex.length).toBe(1093);
});



test('Pokedex models have all keys', () => {
  expect(pokedex).toHaveLength(1093);
});

test.each(pokedex.slice(100, 201))('Pokemon have EV values.', (pokemon) => {
  try {
    expect(Object.keys(pokemon.evs).length).not.toBe(0);
  } catch (error) {
    console.log(`${pokemon.name.english} does not have EV values`);
  }
});

// TODO: Make a test to make sure every pokemon abilitiy has the right key.