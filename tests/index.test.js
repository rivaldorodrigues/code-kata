const { solver, returnToStart } = require('../src');

describe('Take a ten minute walk', () => {
  test('When direction array is empty then return false', () => {
    expect(solver([])).toBe(false);
  });
});

describe('Return to the starting point', () => {
  test('When directions array is empty then return true', () => {
    expect(returnToStart([])).toBe(true);
  });
  test('When directions has only one letter then return false', () => {
    expect(returnToStart(['n'])).toBe(false);
  });
});
