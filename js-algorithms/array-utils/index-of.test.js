import { describe, test, expect } from 'bun:test';
import { indexOf } from './index-of.js';
import { len } from './len.js';

describe('indexOf()', () => {
   test('should find an item in the middle of an array', () => {
      expect(indexOf([10, 20, 30], 20)).toBe(1);
   });

   test('should find the first element', () => {
      expect(indexOf([10, 20, 30], 10)).toBe(0);
   });

   test('should find the last element', () => {
      expect(indexOf([10, 20, 30], 30)).toBe(2);
   });

   test('should return -1 if the item is not found', () => {
      expect(indexOf([10, 20, 30], 99)).toBe(-1);
   });

   test('should return the index of the first occurrence for duplicates', () => {
      expect(indexOf([1, 2, 1, 3], 1)).toBe(0);
   });

   test('should return -1 for an empty array', () => {
      expect(indexOf([], 1)).toBe(-1);
   });

   test('should find a string by values', () => {
      expect(indexOf(['a', 'b', 'c'], 'b')).toBe(1);
   });

   test('should find a strings in an array of strings', () => {
      expect(indexOf(['abc', 'def', 'xyz'], 'def')).toBe(1);
   });

   test('should distinguish zero from false', () => {
      expect(indexOf([0, false], 0)).toBe(0);
      expect(indexOf([0, false], false)).toBe(1);
   });

   test('should find false', () => {
      expect(indexOf([true, false], false)).toBe(1);
   });

   test('should not mutate the source array', () => {
      const arr = [10, 'hello', false];
      const originalLength = len(arr);

      expect(indexOf(arr, 'hello')).toBe(1);
      expect(len(arr)).toBe(originalLength);
      expect(arr).toEqual([10, 'hello', false]);
   });

   test('should throw TypeError if arr is not an array', () => {
      expect(() => indexOf('hello')).toThrow(TypeError);
   });
});