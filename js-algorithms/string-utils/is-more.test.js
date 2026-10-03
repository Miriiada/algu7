import { test, expect } from 'bun:test';
import { isMore } from './is-more.js';

test('should return true if a is strictly greater the difference is at the third character', () => {
    expect(isMore('cat', 'car')).toEqual(true);
});

test('should return false if a is cleary smaller', () => {
    expect(isMore('car', 'cat')).toEqual(false);
});

test('should return false for equal strings', () => {
   expect(isMore('hello','hello')).toEqual(false);
});

test('should return true if a is longer but the characters match', () => {
    expect(isMore('hello!', 'hello')).toEqual(true);
});

test('should return false if a is shorter but the characters match', () => {
    expect(isMore('hello', 'hello!')).toEqual(false);
});

test("should return true if the first character of a is greater — length doesn't matter", () => {
    expect(isMore('b', 'aaaaa')).toEqual(true);
});

test("should return false for uppercase vs. lowercase — 'A'(65) < 'a'(97)", () => {
    expect(isMore('Admin', 'admini')).toEqual(false);
});

test('should return false if a starts with a space and b with a letter', () => {
    expect(isMore(' a', 'aa')).toEqual(false);
});

test('should return true if a ends with a space', () => {
    expect(isMore('aa ', 'aa')).toEqual(true);
});

test('should return false for empty strings', () => {
    expect(isMore('', '')).toEqual(false);
});

test('should return false if a is empty but b is not', () => {
    expect(isMore('', 'a')).toEqual(false);
});

test('should throw TypeError if the first argument is not a string', () => {
    expect(() => isMore (123, 'hello')).toThrow(TypeError);
});

test('should throw TypeError if the second argument is not a string', () => {
    expect(() => isMore ('hello', null)).toThrow(TypeError);
});