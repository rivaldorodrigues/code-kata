const { isIsogram } = require('../src');

describe('Isogram kata test set', () => {
  test('should return true when the word is empty', () => {
    expect(isIsogram()).toBe(true);
  });
});
