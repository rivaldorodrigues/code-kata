const { solver, factorial } = require('../src');

describe('Factorial function test set', () => {
  it('should return 0 when calculate factorial of 0', () => {
    expect(factorial(0)).toBe(0);
  });
});

describe('Kata test set', () => {
  test('Should return 0', () => {
    expect(solver()).toBe(0);
  });
});
