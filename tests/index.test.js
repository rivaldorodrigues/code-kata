const { checkChoose, factorial, binomialCoefficient } = require('../src');

describe('Factorial function test set', () => {
  it('should return 0 when calculating factorial of 0', () => {
    expect(factorial(0)).toBe(0);
  });

  it('should return 1 when calculating factorial of 1', () => {
    expect(factorial(1)).toBe(1);
  });

  it('should return 6 when calculating factorial of 3', () => {
    expect(factorial(3)).toBe(6);
  });

  it('should return 24 when calculating factorial of 4', () => {
    expect(factorial(4)).toBe(24);
  });
});

describe('Binomial coefficient test set', () => {
  it('Should return 0 when 0 chose 0', () => {
    expect(binomialCoefficient(0, 0)).toBe(0);
  });

  it('should return 6 when 4 chose 2', () => {
    expect(binomialCoefficient(4, 2)).toBe(6);
  });
});

describe('Check Choose - Kata test set', () => {
  it('should return 0 when number of posters is -1', () => {
    expect(checkChoose(0)).toBe(-1);
  });

  it('should return 1 when the number of posters and colors is 1', () => {
    expect(checkChoose(1, 1)).toBe(1);
  });

  it('should return 2 when then number of posters is 2 and the number colors is 4', () => {
    expect(checkChoose(2, 4)).toBe(2);
  });
});
