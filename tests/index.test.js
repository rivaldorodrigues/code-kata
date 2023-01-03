const { atm } = require('../src/index.js');

describe('ATM test', () => {
  test('10 should return 1', () => {
    expect(atm(10)).toBe(1);
  });
  test('9 should return -1', () => {
    expect(atm(9)).toBe(-1);
  });
  test('15 should return -1', () => {
    expect(atm(15)).toBe(-1);
  });
  test('20 should return 1', () => {
    expect(atm(20)).toBe(1);
  });
  test('25 should return -1', () => {
    expect(atm(25)).toBe(-1);
  });
  test('100 should return 1', () => {
    expect(atm(100)).toBe(1);
  });
  test('40 should return 2', () => {
    expect(atm(40)).toBe(2);
  });
  test('150 should return 2', () => {
    expect(atm(150)).toBe(2);
  });
  test('170 should return 3', () => {
    expect(atm(170)).toBe(3);
  });
  test('200 should return 1', () => {
    expect(atm(200)).toBe(1);
  });
  test('205 should return -1', () => {
    expect(atm(205)).toBe(-1);
  });
  test('400 should return 2', () => {
    expect(atm(400)).toBe(2);
  });
  test('500 should return 1', () => {
    expect(atm(500)).toBe(1);
  });
  test('1550 should return -1', () => {
    expect(atm(1550)).toBe(-1);
  });
  test('0 should return -1', () => {
    expect(atm(0)).toBe(-1);
  });
});
