import { test, expect } from 'bun:test';
import { pad } from './pad.js';

// 1. Left padding
test('pads a string on the left', () => {
    expect(pad('hi', 5, '-', 'left')).toBe('---hi');
});

// 2. Right padding
test('pads a string on the right', () => {
    expect(pad('hi', 5, '-', 'right')).toBe('hi---');
});

// 3. Both sides with even padding
test('pads both sides evenly', () => {
    expect(pad('hi', 6, '-', 'both')).toBe('--hi--');
});

// 4. Both sides with odd padding
test('adds the extra character to the right', () => {
    expect(pad('hi', 5, '-', 'both')).toBe('-hi--');
});

// 5. Equal target length
test('returns the original string when lengths are equal', () => {
    expect(pad('hello', 5, '-', 'left')).toBe('hello');
});

// 6. Target length is smaller
test('returns the original string when target length is smaller', () => {
    expect(pad('hello', 3, '-', 'left')).toBe('hello');
});

// 7. Space padding
test('pads a string with spaces', () => {
    expect(pad('a', 3, ' ', 'right')).toBe('a  ');
});

// 8. Empty source string
test('pads an empty string on both sides', () => {
    expect(pad('', 4, 'x', 'both')).toBe('xxxx');
});

// 9. Empty string with zero target length
test('returns an empty string when target length is zero', () => {
    expect(pad('', 0, '-', 'left')).toBe('');
});

// 10. Multi-character left padding
test('repeats multiple characters on the left', () => {
    expect(pad('hi', 7, 'ab', 'left')).toBe('ababahi');
});

// 11. Multi-character right padding
test('repeats multiple characters on the right', () => {
    expect(pad('hi', 7, 'ab', 'right')).toBe('hiababa');
});

// 12. Invalid padding side
test('throws an error for an invalid padding side', () => {
    expect(() => pad('hi', 5, '-', 'top')).toThrow(Error);
});

// 13. Invalid source string
test('throws TypeError when str is not a string', () => {
    expect(() => pad(123, 5, '-', 'left')).toThrow(TypeError);
});

// 14. Invalid target length (additional)
test('throws TypeError when length is not a number', () => {
    expect(() => pad('hi', '5', '-', 'left')).toThrow(TypeError);
});

// 15. Invalid padding string (additional)
test('throws TypeError when char is not a string', () => {
    expect(() => pad('hi', 5, 123, 'left')).toThrow(TypeError);
});

// 16. Empty padding string
test('throws TypeError when padding string is empty', () => {
    expect(() => pad('hi', 5, '', 'left')).toThrow(TypeError);
});
