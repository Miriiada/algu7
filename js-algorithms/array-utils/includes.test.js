import { describe, test, expect } from 'bun:test';
import { includes } from './includes.js';
import { len } from './len.js';

describe('includes()', () => {
    test('should return true if an element is  found', () => {
        expect(includes([1, 2, 3], 2)).toBe(true);
    });

    test('should return false if an element is not found', () => {
        expect(includes([1, 2, 3], 9)).toBe(false);
    });

    test('should return false for an empty array', () => {
        expect(includes([], 1)).toBe(false);
    });

    test('should return true for the first element',() => {
        expect(includes([1, 2, 3], 1)).toBe(true);
    });

    test('should return true for the last element', () => {
        expect(includes([1, 2, 3], 3)).toBe(true);
    });

    test('should find a string', () => {
        expect(includes(['a', 'b'], 'b')).toBe(true);
    });

    test('should distinguish between 0 and false', () => {
        expect(includes([0], false)).toBe(false);
        expect(includes([0], 0)).toBe(true);
    });

    test('should not the mutate original array', () => {
        const arr = [1, 'hello', false];
        const originalLength = len(arr);

        expect(includes(arr, 'hello')).toBe(true);
        expect(len(arr)).toBe(originalLength);
        expect(arr).toEqual([1, 'hello', false]);
    });

    test('should throw TypeError if arr is not an array', () => {
        expect(() => includes('hello')).toThrow(TypeError);
    });
});