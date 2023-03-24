const { solver } = require('../src');

describe('Grasshopper - Summation test set', () => {
  test('Should return 0 when input is empty', () => {
    expect(solver()).toBe(0);
  });
  test('Should return 1 when input is one', () => {
    expect(solver(1)).toBe(1);
  });
});
