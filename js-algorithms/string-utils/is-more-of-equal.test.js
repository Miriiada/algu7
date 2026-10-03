import { test, expect } from 'bun:test';
import { isMoreOfEqual } from './is-more-of-equal.js';

test('should return true if a is greater', () => {
    expect(isMoreOfEqual('cat', 'car')).toEqual(true);
});

test('should return true if the strings are equal', () => {
    expect(isMoreOfEqual('hello', 'hello')).toEqual(true);
});

test('should return false if a is less', () => {
    expect(isMoreOfEqual('car', 'cat')).toEqual(false);
});

test('should return true if a is longer and the characters match', () => {
    expect(isMoreOfEqual('hello!', 'hello')).toEqual(true);
});

test('should return false if a is shorter and the characters match', () => {
    expect(isMoreOfEqual('hello', 'hello!')).toEqual(false);
});

test('should return true for empty strings', () => {
    expect(isMoreOfEqual('', '')).toEqual(true);
});

test('should throw a TypeError if the first argument is not a string', () => {
    expect(() => isMoreOfEqual(123, 'hello')).toThrow(TypeError);
});

test('should throw a TypeError if the second argument is not a string', () => {
    expect(() => isMoreOfEqual('hello', null)).toThrow(TypeError);
});