import { describe, test, expect } from 'bun:test';
import { unshift } from './unshift.js';

describe('unshift()', () => {
   test('should add an element to the beginning', () => {
      expect(unshift([2, 3], 1)).toBe(3);
   });

   test('should work with empty array', () => {
      expect(unshift([], 'a')).toBe(1)
   });

   test('should add one element in the array', () => {
      expect(unshift([20], 10)).toBe(2);
   });

   test('should save the order of all elements', () => {
      const arr = ['b', 'c', 'd'];
      const result = unshift(arr, 'a');

      expect(result).toBe(4);
      expect(arr).toEqual(['a', 'b', 'c', 'd']);
   });
});
