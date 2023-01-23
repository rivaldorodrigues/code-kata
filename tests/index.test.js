const { solver } = require('../src');

describe('Make the Deadfish Swim', () => {
  test('No command should return empty', () => {
    expect(solver()).toStrictEqual([]);
  });
  test('Only increment command should return [1]', () => {
    expect(solver('i')).toStrictEqual([1]);
  });
});
