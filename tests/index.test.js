const { solver } = require('../src');

describe('Split Strings', () => {
  test('When empty string then return an empty list', () => {
    expect(solver()).toEqual([]);
  });
  test('When single character string then return a list with one string ending with underscore', () => {
    expect(solver('a')).toEqual(['a_']);
  });
  test('When two character string then return a list with one string', () => {
    expect(solver('ab')).toEqual(['ab']);
  });
});
