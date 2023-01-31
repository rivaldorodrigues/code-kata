const { solver } = require('../src');

describe('Split Strings', () => {
  test('When empty string then return an empty list', () => {
    expect(solver()).toEqual([]);
  });
});
