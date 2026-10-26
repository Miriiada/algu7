import { describe, test, expect } from 'bun:test';
import { shift } from './shift.js';
import { len } from './len.js';

describe('shift()', () => {
    test('should remove the first element and return it', () => {
        const arr = [1, 2, 3];

        expect(shift(arr)).toBe(1);
        expect(len(arr)).toBe(2);
    });

    test('should return undefined for an empty array', () => {
        expect(shift([])).toBe(undefined);
    });

    test('should remove the only element', () => {
        const arr = [42];

        expect(shift(arr)).toBe(42);
        expect(len(arr)).toBe(0);
    });

    test('should preserve the order of remaining elements', () => {
        const arr = ['a', 'b', 'c'];

        expect(shift(arr)).toBe('a');
        expect(arr[0]).toBe('b');
        expect(arr[1]).toBe('c');
        expect(len(arr)).toBe(2);
    });

    test('should correctly remove a falsy value', () => {
        const arr = [0, 1];

        expect(shift(arr)).toBe(0);
        expect(len(arr)).toBe(1);
    });

    test('should decrease the length by two after two shifts', () => {
        const arr = [1, 2, 3];

        expect(shift(arr)).toBe(1);
        expect(shift(arr)).toBe(2);
        expect(arr[0]).toBe(3);
        expect(len(arr)).toBe(1);
    });

    test('should throw TypeError if arr is not an array', () => {
        expect(() => shift('hello')).toThrow(TypeError);
    });
});
