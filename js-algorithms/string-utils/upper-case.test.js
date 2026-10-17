import { test, expect } from 'bun:test';
import { upperCase } from './upper-case.js';

test('converts lowercase Latin letters to uppercase', () => {
    expect(upperCase('hello')).toBe('HELLO');
});

test('must leave uppercase characters unchanged', () => {
    expect(upperCase('HELLO')).toBe('HELLO');
});

test('must handle mixed case', () => {
    expect(upperCase('Hello World')).toBe('HELLO WORLD');
});

test('must not affect spaces', () => {
    expect(upperCase(' hello 123')).toBe(' HELLO 123');
});

test('must not change digits', () => {
    expect(upperCase('hello123')).toBe('HELLO123');
});

test('must not change symbols', () => {
    expect(upperCase('hello!@#')).toBe('HELLO!@#');
});

test('should return an empty string for empty input', () => {
    expect(upperCase('')).toBe('');
});

test('should return the string unchanged if there are no lowercase letters', () => {
    expect(upperCase('123!@#')).toBe('123!@#');
});

test('should convert Cyrillic characters', () => {
    expect(upperCase('привет')).toBe('ПРИВЕТ');
});

test('should handle a mix of Latin and Cyrillic characters', () => {
    expect(upperCase('hello привет')).toBe('HELLO ПРИВЕТ');
});

test('should not change already uppercase letters', () => {
    expect(upperCase('ПРИВЕТ')).toBe('ПРИВЕТ');
});

test('should throw a TypeError if the argument is not a string', () => {
    expect(() => upperCase(123)).toThrow(TypeError);
});