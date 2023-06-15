const { solver } = require('../src');

describe('Kata test set', () => {
  it('should return true when the year is 2000', () => {
    expect(solver(2000)).toBe(true);
  });
});
