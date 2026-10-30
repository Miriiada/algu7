import { describe, test, expect } from 'bun:test';
import { concat } from './concat.js';

describe('concat()', () => {
    test('should concatenate two non-empty arrays', () => {
        const arr1 = [1, 2];
        const arr2 = [3, 4];
        const result = concat(arr1, arr2);

        expect(result).toEqual([1, 2, 3, 4]);
        expect(arr1).toEqual([1, 2]);
        expect(arr2).toEqual([3, 4]);
    });

    test('should return a copy of the first array if the second is empty', () => {
        const arr1 = [1, 2];
        const arr2 = [];
        const result = concat(arr1, arr2);

        expect(result).toEqual([1, 2]);
        expect(result).not.toBe(arr1);
        expect(arr1).toEqual([1, 2]);
        expect(arr2).toEqual([]);
    });

    test('should return a copy of the second array if the first is empty', () => {
        const arr1 = [];
        const arr2 = [3, 4];
        const result = concat(arr1, arr2);

        expect(result).toEqual([3, 4]);
        expect(result).not.toBe(arr2);
        expect(arr1).toEqual([]);
        expect(arr2).toEqual([3, 4]);
    });

    test('should return an empty array when both inputs are empty', () => {
        const arr1 = [];
        const arr2 = [];
        const result = concat(arr1, arr2);

        expect(result).toEqual([]);
        expect(result).not.toBe(arr1);
        expect(result).not.toBe(arr2);
        expect(arr1).toEqual([]);
        expect(arr2).toEqual([]);
    });

    test('should return a new array instead of the original arrays', () => {
        const arr1 = [1];
        const arr2 = [2];
        const result = concat(arr1, arr2);

        expect(result).not.toBe(arr1);
        expect(result).not.toBe(arr2);
    });

    test('should not mutate the first array', () => {
        const arr1 = [1, 2];
        const arr2 = [3, 4];

        concat(arr1, arr2);

        expect(arr1).toEqual([1, 2]);
    });

    test('should not mutate the second array', () => {
        const arr1 = [1, 2];
        const arr2 = [3, 4];

        concat(arr1, arr2);

        expect(arr2).toEqual([3, 4]);
    });

    test('should work with arrays of strings', () => {
        const arr1 = ['a'];
        const arr2 = ['b', 'c'];
        const result = concat(arr1, arr2);

        expect(result).toEqual(['a', 'b', 'c']);
        expect(arr1).toEqual(['a']);
        expect(arr2).toEqual(['b', 'c']);
    });

    test('should work with arrays of mixed types', () => {
        const arr1 = [1, 'hello'];
        const arr2 = ['a', false];
        const result = concat(arr1, arr2);

        expect(result).toEqual([1, 'hello', 'a', false]);
        expect(arr1).toEqual([1, 'hello']);
        expect(arr2).toEqual(['a', false]);
    });

    test('should throw TypeError if arr1 is not an array', () => {
        const arr1 = 'hello';
        const arr2 = ['hello'];

        expect(() => concat(arr1, arr2)).toThrow(TypeError);
    });

    test('should throw TypeError if arr2 is not an array', () => {
        const arr1 = ['hello'];
        const arr2 = 'hello';

        expect(() => concat(arr1, arr2)).toThrow(TypeError);
    });
});