import { describe, test, expect } from 'bun:test';
import { fill } from './fill.js';

describe('fill()', () => {
   test('should fill the entire array', () => {
       const arr = [1, 2, 3];
       const result = fill(arr, 0);

       expect(result).toBe(arr);
       expect(arr).toEqual([0, 0, 0]);
   });

   test('should fill from the start index to the end', () => {
       const arr = [1, 2, 3];
       const result = fill(arr, 0, 1);

       expect(result).toBe(arr);
       expect(arr).toEqual([1, 0, 0]);
   });

   test('should fill a range from start to end', () => {
       const arr = [1, 2, 3, 4];
       const result = fill(arr, '*', 1, 3);

       expect(result).toBe(arr);
       expect(arr).toEqual([1, '*', '*', 4]);
   });

   test('should handle an end index beyond the array length', () => {
       const arr = [1, 2, 3, 4];
       const result = fill(arr, '*', 1, 7);

       expect(result).toBe(arr);
       expect(arr).toEqual([1, '*', '*', '*']);
   });

   test('should return the same array', () => {
        const arr = [1, 2, 3];
        const result = fill(arr, 9, 1, 3);

        expect(result).toBe(arr);
        expect(arr).toEqual([1, 9, 9]);
   });

   test('should work with an empty array', () => {
        const arr = [];
        const result = fill(arr, 5);

        expect(result).toBe(arr);
        expect(arr).toEqual([]);
   });

   test('should not modify the array if start is greater than or equal to end', () => {
        const arr = [1, 2, 3];
        const result = fill(arr, 0, 2, 1);

        expect(result).toBe(arr);
        expect(arr).toEqual([1, 2, 3]);
   });

   test('should support a negative start index', () => {
        const arr = [1, 2, 3, 4];
        const result = fill(arr, '*', -2);

        expect(result).toBe(arr);
        expect(arr).toEqual([1, 2, '*', '*']);
   });

   test('should support a negative end index', () => {
        const arr = [1, 2, 3, 4];
        const result = fill(arr, '*', 0, -1);

        expect(result).toBe(arr);
        expect(arr).toEqual(['*', '*', '*', 4]);
   });

   test('should handle a negative start beyond the array bounds', () => {
        const arr = [1, 2, 3, 4];
        const result = fill(arr, '*', -5);

        expect(result).toBe(arr);
        expect(arr).toEqual(['*', '*', '*', '*']);
   });

   test('should use default start and end indices', () => {
        const arr = [1, 2, 3];
        const result = fill(arr, 'a');

        expect(result).toBe(arr);
        expect(arr).toEqual(['a', 'a', 'a']);
   });

   test('should clamp start to the array length', () => {
        const arr = [1, 2];
        const result = fill(arr, 5, 5);

        expect(result).toBe(arr);
        expect(arr).toEqual([1, 2]);
   });

    test('should clamp an out-of-bounds negative start to zero', () => {
        const arr = [1, 2, 3];
        const result = fill(arr, '*', -10, 2);

        expect(result).toBe(arr);
        expect(arr).toEqual(['*', '*', 3]);
    });

    test('should clamp an out-of-bounds negative end to zero', () => {
        const arr = [1, 2, 3, 4];
        const result = fill(arr, '*', 0, -5);

        expect(result).toBe(arr);
        expect(arr).toEqual([1, 2, 3, 4]);
    });

    test('should throw TypeError if arr is not an array', () => {
        expect(() => fill('hello')).toThrow(TypeError);
    });

    test('should throw TypeError if start or end is not a number', () => {
        expect(() => fill([1, 2, 3], '*', 'hello', 2)).toThrow(TypeError);
        expect(() => fill([1, 2, 3], '*', 2, 'hello')).toThrow(TypeError);
    });
});