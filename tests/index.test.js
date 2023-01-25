const { solver } = require('../src');

describe('Friend or foe', () => {
  test('Empty name list should return empty friend list', () => {
    expect(solver([])).toStrictEqual([]);
  });
  test('Name list with only one friend should return one friend in the list', () => {
    expect(solver(['Kate'])).toStrictEqual(['Kate']);
  });
  test('Name list with one non friend should return an empty list', () => {
    expect(solver(['Bob'])).toStrictEqual([]);
  });
});
