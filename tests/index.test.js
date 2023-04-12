const { isIsogram } = require('../src');

describe('Isogram kata test set', () => {
  test('should return true when the word is empty', () => {
    expect(isIsogram()).toBe(true);
  });

  it('should return false when the word is double a', () => {
    expect(isIsogram('aa')).toEqual(false);
  });

  it('should return true when the word is a', () => {
    expect(isIsogram('a')).toEqual(true);
  });

  it('should return true when the word is ab', () => {
    expect(isIsogram('ab')).toEqual(true);
  });

  it('should return false when the word is aA', () => {
    expect(isIsogram('aA')).toEqual(false);
  });

  it('should return false when the word is aba', () => {
    expect(isIsogram('aba')).toEqual(false);
  });

  it('should return false when the word is abb', () => {
    expect(isIsogram('abb')).toEqual(false);
  });

  it('should return false when the word is abca', () => {
    expect(isIsogram('abca')).toEqual(false);
  });

  it('should return false when the word is abcb', () => {
    expect(isIsogram('abcb')).toEqual(false);
  });

  it('should return false when the word is abcc', () => {
    expect(isIsogram('abcc')).toEqual(false);
  });
});
