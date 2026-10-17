import { test, expect } from 'bun:test';
import { len } from './len.js';

test('should return 3 for [1, 2, 3]', () => {
    expect(len([1, 2, 3])).toBe(3);
});

test('should return 0 for an empty array []', () => {
    expect(len([])).toBe(0);
});

test('should return 1 for a single-element array', () => {
    expect(len([42])).toBe(1);
});

test('should return 4 for an array of string', () => {
    expect(len(['a', 'b', 'c', 'd'])).toBe(4);
});

test('should return 5 for an array with mixed types', () => {
    expect(len([1, 'two', true, null, 0])).toBe(5);
});

test('should not mutate the original array', () => {
    const arr = [1, 2, 3];

    len(arr);

    expect(arr).toEqual([1, 2, 3]);
});

test('should throw TypeError for a string argument', () => {
    expect(() => len('hello')).toThrow(TypeError);
});

test('should throw TypeError for a number argument', () => {
    expect(() => len(123)).toThrow(TypeError);
});

test('should throw TypeError for an object argument', () => {
    expect(() => len({0: 'a'})).toThrow(TypeError);
});

test('should throw TypeError when no argument is provided', () => {
    expect(() => len()).toThrow(TypeError);
});