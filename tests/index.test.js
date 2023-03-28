const { solver, translate } = require('../src');

describe('NATO Dictionary test set', () => {
  test('Should return Alfa when input is A', () => {
    expect(translate('A')).toEqual('Alfa');
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
  test('Should return Delta Hotel when input string is DH', () => {
    expect(solver('DH')).toEqual('Delta Hotel');
  });
  test('Should return Echo Foxtrot Golf India when input string is EF GI', () => {
    expect(solver('EF GI')).toEqual('Echo Foxtrot Golf India');
  });
  test('Should return India Foxtrot , Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta ? when input is If, you can read?', () => {
    expect(solver('If, you can read?')).toEqual(
      'India Foxtrot , Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta ?'
    );
  });
});
