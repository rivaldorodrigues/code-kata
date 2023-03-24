const { solver } = require('../src');

describe('Grasshopper - Summation test set', () => {
  test('Should return 0 when input is empty', () => {
    expect(solver()).toBe(0);
  });
});
