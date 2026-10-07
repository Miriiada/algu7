import { test, expect } from 'bun:test';
import { indexOf } from './index-of.js';

test('should return 0 for substring at the beginning', () => {
    expect(indexOf('hello', 'he')).toEqual(0);
});

test('should return 2 for a substring in the middle ', () => {
    expect(indexOf('hello', 'll')).toEqual(2);
});

test('should return 3 for a substring at the end ', () => {
    expect(indexOf('hello', 'lo')).toEqual(3);
});

test('should return -1 if the substring is not found', () => {
    expect(indexOf('hello', 'li')).toEqual(-1);
});

test('should return 0 for an empty search string', () => {
    expect(indexOf('hello', '')).toEqual(0);
});

test('should return -1 if the search string is longer than the original', () => {
    expect(indexOf('hello', 'hello!')).toEqual(-1);
});

test('should return 0 for identical string', () => {
    expect(indexOf('abc', 'abc')).toEqual(0);
});

test('should return the index of the first occurrence when there are multiple matches', () => {
    expect(indexOf('ababa', 'ba')).toEqual(1);
});

test('should find a substring that starts within a previous partial match', () => {
    expect(indexOf('abababc', 'ababc')).toEqual(2);
});

test('should return 0 when searching for a single character', () => {
    expect(indexOf('hello', 'h')).toEqual(0);
});

test('should return 2 when searching for a single character', () => {
    expect(indexOf('hello', 'l')).toEqual(2);
});

test('should work with Cyrillic characters', () => {
    expect(indexOf('привет', 'иве')).toEqual(2);
});

test('should throw a TypeError if the first argument is not a string', () => {
    expect(() => indexOf(123, 'hello')).toThrow(TypeError);
})

test('should throw a TypeError if the second argument is not a string', () => {
    expect(() => indexOf('hello', 123)).toThrow(TypeError);
});