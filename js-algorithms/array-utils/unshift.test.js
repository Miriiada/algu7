import { describe, test, expect } from 'bun:test';
import { unshift } from './unshift.js';

describe('unshift()', () => {
   test('should add an element to the beginning and return the new length', () => {
      const arr = [2, 3];

      expect(unshift(arr, 1)).toBe(3);
      expect(arr).toEqual([1, 2, 3]);
   });

   test('should work with an empty array', () => {
      const arr = [];

      expect(unshift(arr, 'a')).toBe(1);
      expect(arr).toEqual(['a']);
   });

   test('should add an item to a single-element array', () => {
      const arr = [20];

      expect(unshift(arr, 10)).toBe(2);
      expect(arr).toEqual([10, 20]);
   });

   test('should preserve the order of existing elements', () => {
      const arr = ['b', 'c', 'd'];
      const result = unshift(arr, 'a');

      expect(result).toBe(4);
      expect(arr).toEqual(['a', 'b', 'c', 'd']);
   });

   test('should move the first inserted item to the second position', () => {
      const arr = ['b', 'c', 'd'];

      expect(unshift(arr, 'a')).toBe(4);
      expect(unshift(arr, 'x')).toBe(5);
      expect(arr).toEqual(['x', 'a', 'b', 'c', 'd']);
   });

   test('should throw TypeError if arr is not an array', () => {
      expect(() => unshift('hello', 1)).toThrow(TypeError);
   });
});
