// Test that the amount of files in the entries folder is equal to 1025
// TODO: remove forms from entries, we will make an upsert forms function
test('Pokedex Length', () => {
  expect(pokedex.length).toBe(1093);
});

// TODO: Test the files match the schema, and that the files have the right keys
// test('Pokedex models have all keys', () => {
//   expect(pokedex).toHaveLength(1093);
// });

// TODO: Test that files match the _id key values inside the associated file

// TODO: Test for evolution keys match the evolution keys in the evolution file, 
// and that the evolution file has all the right keys

// TODO: Make a test to make sure every pokemon ability has the right key.