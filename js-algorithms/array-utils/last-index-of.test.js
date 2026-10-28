import { describe, test, expect } from 'bun:test';
import { lastIndexOf} from "./last-index-of.js";
import { len } from './len.js';

describe('lastIndexOf()', () => {
   test('should return last index of the last occurrence', () => {
       expect(lastIndexOf([1, 2, 1, 3], 1)).toBe(2);
   });

   test('should return -1 if the item is not found', () => {
       expect(lastIndexOf([1, 2, 3], 9)).toBe(-1);
   });

   test('should return 0 for a single occurrence at the beginning', () => {
       expect(lastIndexOf([5, 6, 7], 5)).toBe(0);
   });
   test('should return the last index for an item at the end', () => {
       expect(lastIndexOf([5, 6, 7], 7)).toBe(2);
   });

   test('should return -1 for an empty array', () => {
       expect(lastIndexOf([], 1)).toBe(-1);
   });

   test('should find a character', () => {
       expect(lastIndexOf(['a', 'b', 'a'], 'a')).toBe(2);
   });

   test('should find a string', () => {
       expect(lastIndexOf(['ab', 'cd', 'ab'], 'ab')).toBe(2);
   });

   test('should not mutate the original array', () => {
       const arr = [10, 'hello', false];
       const originalLength = len(arr);

       expect(lastIndexOf(arr, 'hello')).toBe(1);
       expect(len(arr)).toBe(originalLength);
       expect(arr).toEqual([10, 'hello', false]);
   });

   test('should return -1 when searching for undefined in an empty array', () => {
       expect(lastIndexOf([], undefined)).toBe(-1);
   });

   test('should throw TypeError if arr is not an array', () => {
       expect(() => lastIndexOf('hello')).toThrow(TypeError);
   });
});