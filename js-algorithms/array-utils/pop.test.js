import { describe, test, expect } from 'bun:test';
import { pop } from './pop.js';
import { len } from './len.js';

describe('pop()', () => {
   test('should remove the last element and return it', () => {
      const arr = [1, 2, 3]
      const result = pop(arr);

      expect(result).toBe(3);
      expect(len(arr)).toBe(2)
   });

   test('should return undefined for an empty array', () => {
      const arr = [];
      const result = pop(arr);

      expect(result).toBeUndefined();
   });

   test('should remove the only element', () => {
      const arr = [42];

      expect(pop(arr)).toBe(42);
      expect(len(arr)).toBe(0);
   });

   test('should work with an array of string', () => {
      const arr = ['a', 'b'];

      expect(pop(arr)).toBe('b');
      expect(len(arr)).toBe(1);
   });

   test('should correctly remove zero and false', () => {
      const arr = [0, false];

      expect(pop(arr)).toBe(false);
      expect(pop(arr)).toBe(0);
      expect(len(arr)).toBe(0);
   });

   test('should decrease the array length by two after two pops', () => {
      const arr = [10, 20, 30, 40];

      expect(len(arr)).toBe(4);
      expect(pop(arr)).toBe(40);
      expect(pop(arr)).toBe(30);
      expect(len(arr)).toBe(2);
   });

   test('should throw TypeError if arr is not an array', () => {
      expect(() => pop('hello')).toThrow(TypeError);
   });
});