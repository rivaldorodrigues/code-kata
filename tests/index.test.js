const { solver } = require('../src');

describe('Take a ten minute walk', () => {
  test('When direction array is empty then return false', () => {
    expect(solver([])).toBe(false);
  });
});
