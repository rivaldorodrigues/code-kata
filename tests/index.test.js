const { solver } = require('../src');

describe('Kata test set', () => {
  it('should return true when the year is 2000', () => {
    expect(solver(2000)).toBe(true);
  });

  it('should return false when the year is 1000', () => {
    expect(solver(1000)).toBe(false);
  });
});
