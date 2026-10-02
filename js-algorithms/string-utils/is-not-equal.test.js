import { test, expect } from 'bun:test';
import {isNotEqual} from "./is-not-equal.js";

test('should return true for different strings', () => {
    expect(isNotEqual('hello', 'world')).toEqual(true);
});

test('should return false for identical string', () => {
    expect(isNotEqual('abc', 'abc')).toEqual(false);
});

test('should return true for string of different length', () => {
    expect(isNotEqual('hi', 'hello')).toEqual(true);
});

test('should return false for empty strings', () => {
    expect(isNotEqual('', '')).toEqual(false);
});

test('should throw a TypeError if the argument is not a string (first)', () => {
    expect(() => isNotEqual(123, 'hello')).toThrow(TypeError);
})

test('should throw a TypeError if the argument is not a string (second)', () => {
    expect(() => isNotEqual('hello', null)).toThrow(TypeError);
})