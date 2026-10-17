import { test, expect } from 'bun:test';
import { startsWith } from './starts-with.js';

test('should return true for a single character', () => {
    expect(startsWith('hello', 'h')).toEqual(true);
});

test('should return true for a substring', () => {
    expect(startsWith('hello', 'hel')).toEqual(true);
});

test('should return false for a non-matching occurrence', () => {
    expect(startsWith('hello', 'el')).toEqual(false);
});

test('should return true for an empty search string', () => {
    expect(startsWith('hello', '')).toEqual(true);
});

test('should return false if the search string is longer', () => {
    expect(startsWith('hell', 'hello')).toEqual(false);
});

test('should return true for an exact match', () => {
    expect(startsWith('abc', 'abc')).toEqual(true);
});

test('should throw a TypeError if the first argument is not a string', () => {
    expect(() => startsWith(123, 'hello')).toThrow(TypeError);
});

test('should throw a TypeError if the first argument is not a string', () => {
    expect(() => startsWith('hello', 123)).toThrow(TypeError);
});