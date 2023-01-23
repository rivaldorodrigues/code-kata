const { solver } = require('../src');

describe('Make the Deadfish Swim', () => {
  test('No command should return empty', () => {
    expect(solver()).toStrictEqual([]);
  });
  test('Only increment command should return [1]', () => {
    expect(solver('io')).toStrictEqual([1]);
  });
  test('Two increments command should return [2]', () => {
    expect(solver('iio')).toStrictEqual([2]);
  });
  test('Only decrement command should return [-1]', () => {
    expect(solver('do')).toStrictEqual([-1]);
  });
  test('Two decrement command should return [-2]', () => {
    expect(solver('ddo')).toStrictEqual([-2]);
  });
  test('Double increment plus square command should return [4]', () => {
    expect(solver('iiso')).toStrictEqual([4]);
  });
  test('Double output command should return two values on a list', () => {
    expect(solver('iiisdoso')).toStrictEqual([8, 64]);
  });
});
