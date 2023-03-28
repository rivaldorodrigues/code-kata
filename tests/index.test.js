const { solver, translate } = require('../src');

describe('NATO Dictionary test set', () => {
  test('Should return Alpha when input is A', () => {
    expect(translate('A')).toEqual('Alpha');
  });
  test('Should return the same input symbol when input is not a letter', () => {
    expect(translate('!')).toEqual('!');
  });
});

describe('Kata test set', () => {
  test('Should empty when translating an empty string', () => {
    expect(solver('')).toBe('');
  });
  test('Should return Bravo when translating letter B', () => {
    expect(solver('B')).toEqual('Bravo');
  });
  test('Should return Charlie when translating letter c', () => {
    expect(solver('c')).toEqual('Charlie');
  });
});
