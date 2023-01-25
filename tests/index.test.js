const { solver } = require('../src');

describe('Friend or foe', () => {
  test('Empty name list should return empty friend list', () => {
    expect(solver([])).toStrictEqual([]);
  });
  test('Name list with only one friend should return one friend in the list', () => {
    expect(solver(['Kate'])).toStrictEqual(['Kate']);
  });
  test('Name list with only one foe return an empty list', () => {
    expect(solver(['Bob'])).toStrictEqual([]);
  });
  test('Mixing friends and foe name list should return only friends', () => {
    expect(solver(['Ryan', 'Kieran', 'Mark', 'Bob'])).toStrictEqual([
      'Ryan',
      'Mark',
    ]);
  });
});
