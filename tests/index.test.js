const { solver } = require('../src');

describe('Friend or foe', () => {
  test('Empty name list should return empty friend list', () => {
    expect(solver([])).toStrictEqual([]);
  });
});
