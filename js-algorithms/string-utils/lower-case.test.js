import { test, expect } from 'bun:test';
import { lowerCase } from './lower-case.js';

test('converts uppercase Latin letters to lowercase', () => {
    expect(lowerCase('HELLO')).toBe('hello');
});

test('leaves lowercase letters unchanged', () => {
    expect(lowerCase('hello')).toBe('hello');
});

test('handles mixed case', () => {
    expect(lowerCase('Hello World')).toBe('hello world');
});

test('preserves spaces', () => {
    expect(lowerCase(' HELLO 123')).toBe(' hello 123');
});

test('preserves digits', () => {
    expect(lowerCase('HELLO123')).toBe('hello123');
});

test('preserves special characters', () => {
    expect(lowerCase('HELLO!@#')).toBe('hello!@#');
});

test('returns an empty string for empty input', () => {
    expect(lowerCase('')).toBe('');
});

test('returns unchanged input without uppercase letters', () => {
    expect(lowerCase('123!@#')).toBe('123!@#');
});

test('converts uppercase Cyrillic letters to lowercase', () => {
    expect(lowerCase('ПРИВЕТ')).toBe('привет');
});

test('handles mixed Latin and Cyrillic letters', () => {
    expect(lowerCase('HELLO ПРИВЕТ')).toBe('hello привет');
});

test('leaves lowercase Cyrillic letters unchanged', () => {
    expect(lowerCase('привет')).toBe('привет');
});

test('throws TypeError for non-string input', () => {
    expect(() => lowerCase(123)).toThrow(TypeError);
});