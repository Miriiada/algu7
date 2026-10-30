import { describe, test, expect } from 'bun:test';
import { reverse } from './reverse.js';

describe('reverse()', () => {
    test('should reverse an array with an odd number of elements', () => {
        const arr = [1, 2, 3];

        reverse(arr);

        expect(arr).toEqual([3, 2, 1]);
    });

    test('should reverse an array with an even number elements', () => {
        const arr = [1, 2, 3, 4];
        const result = reverse(arr);

        expect(result).toBe(arr);
        expect(arr).toEqual([4, 3, 2, 1]);
    });

    test('should reverse an array of two elements', () => {
        const arr = [1, 2];
        const result = reverse(arr);

        expect(result).toBe(arr);
        expect(arr).toEqual([2, 1]);
    });

    test('should return the same array', () => {
        const arr = [1, 2, 3];
        const result = reverse(arr);

        expect(result).toBe(arr);
    });

    test('should reverse an array with one element', () => {
        const arr = [42];
        const result = reverse(arr);

        expect(result).toBe(arr);
        expect(arr).toEqual([42]);
    });

    test('should return an empty array', () => {
        const arr = [];
        const result = reverse(arr);

        expect(result).toBe(arr);
        expect(arr).toEqual([]);
    });

    test('should work with an array of strings', () => {
        const arr = ['a', 'b', 'c'];
        const result = reverse(arr);

        expect(result).toBe(arr);
        expect(arr).toEqual(['c', 'b', 'a']);
    });

    test('should work with an array of mixed types ', () => {
        const arr = [1, 'two', null];
        const result = reverse(arr);

        expect(result).toBe(arr);
        expect(arr).toEqual([null, 'two', 1]);
    });

    test('should reverse twice and restore the original array', () => {
        const arr =  [1, 2, 3];
        const result = reverse(reverse(arr));

        expect(result).toBe(arr);
        expect(arr).toEqual([1, 2, 3]);
    });

    test('should throw TypeError if arr is not an array', () => {
        expect(() => reverse('hello')).toThrow(TypeError);
    });
});