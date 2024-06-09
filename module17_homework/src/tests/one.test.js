import {revertString} from "../one.js"

describe('revertString', () => {

  it('should revert a string', () => {
    expect(revertString('Привет')).toBe('тевирП');
    expect(revertString('world')).toBe('dlrow');
    expect(revertString('')).toBe('');
    expect(revertString('1')).toBe('1');
    expect(revertString('a')).toBe('a');
    expect(revertString('racecar')).toBe('racecar');
  });

  it('should throw an error when input is not a string', () => {
    expect(() => revertString(123)).toThrow('Input is not a string');
    expect(() => revertString(true)).toThrow('Input is not a string');
    expect(() => revertString(null)).toThrow('Input is not a string');
    expect(() => revertString(undefined)).toThrow('Input is not a string');
    expect(() => revertString({})).toThrow('Input is not a string');
  });
});