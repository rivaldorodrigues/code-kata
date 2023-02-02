const { solver } = require('../src');

describe('Exes and Ohs', () => {
  test('When empty string then return true', () => {
    expect(solver()).toBe(true);
  });
});
