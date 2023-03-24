const { solver } = require('../src');

describe('Grasshopper - Summation test set', () => {
  test('Should return 0 when input is empty', () => {
    expect(solver()).toBe(0);
  });
  test('Should return 1 when input is one', () => {
    expect(solver(1)).toBe(1);
  });
  test('Should return 3 when input is two', () => {
    expect(solver(2)).toBe(3);
  });
  test('Should return 6 when input is three', () => {
    expect(solver(3)).toBe(6);
  });
});
