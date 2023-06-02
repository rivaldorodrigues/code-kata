const { solver, factorial } = require('../src');

describe('Factorial function test set', () => {
  it('should return 0 when calculating factorial of 0', () => {
    expect(factorial(0)).toBe(0);
  });

  it('should return 1 when calculating factorial of 1', () => {
    expect(factorial(1)).toBe(1);
  });
});

describe('Kata test set', () => {
  test('Should return 0', () => {
    expect(solver()).toBe(0);
  });
});
