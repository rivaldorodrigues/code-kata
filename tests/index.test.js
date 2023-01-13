const { solver } = require('../src');

describe('Kata test set', () => {
  test('empty should return empty string', () => {
    expect(solver('')).toBe('');
  });
  test('spaces should return empty string', () => {
    expect(solver(' ')).toBe('');
  });
  test('a should return empty string', () => {
    expect(solver('a')).toBe('');
  });
  test('double a should return empty string', () => {
    expect(solver('aa')).toBe('');
  });
  test('double a should return empty string', () => {
    expect(solver('aA')).toBe('');
  });
  test('aab should return b', () => {
    expect(solver('aab')).toBe('b');
  });
  test('aae should return empty string', () => {
    expect(solver('aae')).toBe('');
  });
  test('aab should return bb', () => {
    expect(solver('aabb')).toBe('bb');
  });
  test('aeiou should return empty string', () => {
    expect(solver('aeiou')).toBe('');
  });
  test('kata test case', () => {
    expect(solver('This website is for losers LOL!')).toBe(
      'Ths wbst s fr lsrs LL!'
    );
  });
});
