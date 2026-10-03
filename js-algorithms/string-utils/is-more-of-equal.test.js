import { test, expect } from 'bun:test';
import { isMoreOrEqual } from './is-more-or-equal.js';

test('should return true if a is greater', () => {
    expect(isMoreOrEqual('cat', 'car')).toEqual(true);
});

test('should return true if the strings are equal', () => {
    expect(isMoreOrEqual('hello', 'hello')).toEqual(true);
});

test('should return false if a is less', () => {
    expect(isMoreOrEqual('car', 'cat')).toEqual(false);
});

test('should return true if a is longer and the characters match', () => {
    expect(isMoreOrEqual('hello!', 'hello')).toEqual(true);
});

test('should return false if a is shorter and the characters match', () => {
    expect(isMoreOrEqual('hello', 'hello!')).toEqual(false);
});

test('should return true for empty strings', () => {
    expect(isMoreOrEqual('','')).toEqual(true);
});

test('should throw a TypeError if the first argument is not a string', () => {
    expect(() => isMoreOrEqual(123, 'hello')).toThrow(TypeError);
});

test('should throw a TypeError if the second argument is not a string', () => {
    expect(() => isMoreOrEqual('hello', null)).toThrow(TypeError);
});