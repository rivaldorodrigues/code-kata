const { solver } = require('../src');

describe('Exes and Ohs', () => {
  test('When input is empty string then return true', () => {
    expect(solver()).toBe(true);
  });
  test('When input is x then return false', () => {
    expect(solver('x')).toBe(false);
  });
  test('When input is xo then return true', () => {
    expect(solver('x')).toBe(true);
  });
});
