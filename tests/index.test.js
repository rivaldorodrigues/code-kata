const { solver, returnToStart } = require('../src');

describe('Take a ten minute walk', () => {
  test('When direction array is empty then return false', () => {
    expect(solver([])).toBe(false);
  });
  test('When directions has same amount of opposite directions then return true', () => {
    expect(solver(['w', 'w', 'w', 'w', 'w', 'e', 'e', 'e', 'e', 'e'])).toBe(
      true
    );
  });
});

describe('Return to the starting point', () => {
  test('When directions array is empty then return true', () => {
    expect(returnToStart([])).toBe(true);
  });
  test('When directions have only one letter then return false', () => {
    expect(returnToStart(['n'])).toBe(false);
  });
  test('When directions have only `n` and `s` then return true', () => {
    expect(returnToStart(['n', 's'])).toBe(true);
  });
  test('When directions have only `n` and `w` then return false', () => {
    expect(returnToStart(['n', 'w'])).toBe(false);
  });
  test('When directions have only `e` and `w` then return true', () => {
    expect(returnToStart(['e', 'w'])).toBe(true);
  });
  test('When directions have `n`, `s`, `e`, `w` then return true', () => {
    expect(returnToStart(['n', 's', 'e', 'w'])).toBe(true);
  });
  test('When directions have `n`, `n`, `s`, `s` then return true', () => {
    expect(returnToStart(['n', 'n', 's', 's'])).toBe(true);
  });
});
