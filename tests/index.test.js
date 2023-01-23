const { solver } = require('../src');

describe('Make the Deadfish Swim', () => {
  test('No command should return empty', () => {
    expect(solver()).toStrictEqual([0]);
  });
  test('Only increment command should return [1]', () => {
    expect(solver('i')).toStrictEqual([1]);
  });
  test('Tow increments command should return [2]', () => {
    expect(solver('ii')).toStrictEqual([2]);
  });
  test('Only decrement command should return [-1]', () => {
    expect(solver('d')).toStrictEqual([-1]);
  });
});
