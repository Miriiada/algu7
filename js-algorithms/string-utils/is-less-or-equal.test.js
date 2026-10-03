import { test, expect } from 'bun:test';
import { isLessOrEqual } from './is-less-or-equal.js';

test('should return false if a is greater', () => {
    expect(isLessOrEqual('cat', 'car')).toEqual(false);
});

test('should return true if the strings are equal', () => {
    expect(isLessOrEqual('hello', 'hello')).toEqual(true);
});

test('should return true if a is less', () => {
    expect(isLessOrEqual('car', 'cat')).toEqual(true);
});

test('should return false if a is longer and the characters match', () => {
    expect(isLessOrEqual('hello!', 'hello')).toEqual(false);
});

test('should return true if a is shorter and the characters match', () => {
    expect(isLessOrEqual('hello', 'hello!')).toEqual(true);
});

test('should return true for empty strings', () => {
    expect(isLessOrEqual('', '')).toEqual(true);
});

test('should throw a TypeError if the first argument is not a string', () => {
    expect(() => isLessOrEqual(123, 'hello')).toThrow(TypeError);
});

test('should throw a TypeError if the second argument is not a string', () => {
    expect(() => isLessOrEqual('hello', null)).toThrow(TypeError);
});