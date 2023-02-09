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
  test('When directions has only `n` and `s` then return true', () => {
    expect(returnToStart(['n', 's'])).toBe(true);
  });
  test('When directions has only `n` and `w` then return false', () => {
    expect(returnToStart(['n', 'w'])).toBe(false);
  });
  test('When directions has only `e` and `w` then return true', () => {
    expect(returnToStart(['e', 'w'])).toBe(true);
  });
  test('When directions has `n`, `s`, `e`, `w` then return true', () => {
    expect(returnToStart(['n', 's', 'e', 'w'])).toBe(true);
  });
  test('When directions has `n`, `n`, `s`, `s` then return true', () => {
    expect(returnToStart(['n', 'n', 's', 's'])).toBe(true);
  });
});
