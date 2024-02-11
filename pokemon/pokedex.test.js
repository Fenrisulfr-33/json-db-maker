const pokedex = require('./pokemon-data/2024-02-11-pokedex.json');

test('Pokedex Length', () => {
    expect(pokedex.length).toBe(1093);
  });



  test('Pokedex models have all keys', () => {
    expect(pokedex.length).toBe(1093);
  });

  // TODO: Make a test to make sure every pokemon abilitiy has the right key.