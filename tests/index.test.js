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
  test('Should return 0', () => {
    expect(solver()).toBe(0);
  });
});
