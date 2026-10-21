import { describe, test, expect } from 'bun:test';
import { push } from './push.js';
import { len } from './len.js';

describe('push()', () => {
    test('should add an item to the end and return the new length', () => {
        const arr = [1, 2];
        const result = push(arr, 3);

        expect(result).toBe(3);
        expect(arr).toEqual([1, 2, 3]);
    });

    test('should add an item to an empty array', () => {
        const arr = [];
        const result = push(arr, 'a');

        expect(result).toBe(1);
        expect(arr).toEqual(['a']);
    });

    test('should add two items sequentially', () => {
        const arr = [10];
        const first = push(arr, 20);
        const second = push(arr, 30);

        expect(first).toBe(2);
        expect(second).toBe(3);

        expect(arr[1]).toBe(20);
        expect(arr[2]).toBe(30);
        expect(arr).toEqual([10, 20, 30]);
    });

    test('should add falsy values as array elements', () => {
        const arr = [];
        const first = push(arr, 0);
        const second = push(arr, false);
        const third = push(arr, null);

        expect(first).toBe(1);
        expect(second).toBe(2);
        expect(third).toBe(3);

        expect(arr[0]).toBe(0);
        expect(arr[1]).toBe(false);
        expect(arr[2]).toBe(null);
        expect(arr).toEqual([0, false, null]);
    });

    test('should add an object to the array', () => {
        const arr = [];
        const item = { a: 1 };
        const result = push(arr, item);

        expect(result).toBe(1);
        expect(arr[0]).toBe(item);
        expect(arr).toEqual([{ a: 1 }]);
    });

    test('should mutate the original array', () => {
        const arr = [10, 20];
        const result = push(arr, 30);

        expect(result).toBe(3);
        expect(arr[len(arr) - 1]).toBe(30);
    });

    test('should add an item to a single-element array', () => {
        const arr = [10];
        const result = push(arr, 20);

        expect(result).toBe(2);
        expect(arr[len(arr) - 1]).toBe(20);
        expect(arr).toEqual([10, 20]);
    });

    test('should throw TypeError if arr is not an array', () => {
        expect(() => push('hello', 1)).toThrow(TypeError);
    });
});