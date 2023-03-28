const { solver, translate } = require('../src');

describe('NATO Dictionary test set', () => {
  test('Should return Alpha when input is A', () => {
    expect(translate('A')).toEqual('Alpha');
  });
});

describe('Kata test set', () => {
  test('Should return 0', () => {
    expect(solver()).toBe(0);
  });
});
