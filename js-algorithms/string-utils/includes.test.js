import { test, expect } from 'bun:test';
import { includes } from './includes.js';

test('should return true for a substring at the beginning', () => {
    expect(includes('hello', 'he')).toEqual(true);
});

test('should return true for a substring in the middle', () => {
    expect(includes('hello', 'll')).toEqual(true);
});

test('should return true for a substring at the end', () => {
    expect(includes('hello', 'lo')).toEqual(true);
});

test('should return false if the substring is not found', () => {
    expect(includes('hello', 'li')).toEqual(false);
});

test('should return true for an empty search string', () => {
    expect(includes('hello', '')).toEqual(true);
});

test('should return false if the search string is longer than the original', () => {
    expect(includes('hello', 'hello!')).toEqual(false);
});

test('should return true for identical strings', () => {
    expect(includes('abc', 'abc')).toEqual(true);
});

test('should return true for multiple matches', () => {
    expect(includes('ababa', 'ba')).toEqual(true);
});

test('should find a substring that starts within a previous partial match', () => {
    expect(includes('abababc', 'ababc')).toEqual(true);
});

test('should return true when searching for a single character at the beginning', () => {
    expect(includes('hello', 'h')).toEqual(true);
});

test('should return true when searching for a character in the middle', () => {
    expect(includes('hello', 'l')).toEqual(true);
});

test('should return true when searching for a character at the end', () => {
    expect(includes('hello', 'o')).toEqual(true);
});

test('should work with Cyrillic', () => {
    expect(includes('привет', 'иве')).toEqual(true);
});

test('should throw a TypeError if the first argument is not a string', () => {
    expect(() => includes(123, 'hello')).toThrow(TypeError);
});

test('should throw a TypeError if the second argument is not a string', () => {
    expect(() => includes('hello', 123)).toThrow(TypeError);
});