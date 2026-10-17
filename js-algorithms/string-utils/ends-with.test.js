import { test, expect } from 'bun:test';
import { endsWith } from './ends-with.js';

test('should return true for a single character', () => {
    expect(endsWith('hello', 'o')).toEqual(true);
});

test('should return true for a substring', () => {
    expect(endsWith('hello', 'llo')).toEqual(true);
});

test('should return false for a non-matching occurrence', () => {
    expect(endsWith('hello', 'ell')).toEqual(false);
});

test('should return true for an empty search string', () => {
    expect(endsWith('hello', '')).toEqual(true);
});

test('should return false if the search string is longer', () => {
    expect(endsWith('hell', 'hello')).toEqual(false);
});

test('should return true for an exact match', () => {
    expect(endsWith('abc', 'abc')).toEqual(true);
});

test('should throw a TypeError if the first argument is not a string', () => {
    expect(() => endsWith(123, 'hello')).toThrow(TypeError);
});

test('should throw a TypeError if the second argument is not a string', () => {
    expect(() => endsWith('hello', 123)).toThrow(TypeError);
});