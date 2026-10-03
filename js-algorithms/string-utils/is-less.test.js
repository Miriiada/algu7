import { test, expect } from 'bun:test';
import { isLess } from './is-less.js';

test('should return true if a is strictly less', () => {
    expect(isLess('car', 'cat')).toEqual(true);
});

test('should return false if a is greater', () => {
    expect(isLess('cat', 'car')).toEqual(false);
});

test('should return false for equal strings', () => {
    expect(isLess('hello', 'hello')).toEqual(false);
});

test('should return true if a is shorter', () => {
    expect(isLess('hello', 'hello!')).toEqual(true);
});

test('should return true for uppercase vs. lowercase', () => {
    expect(isLess('A', 'a')).toEqual(true);
});

test('should return true for empty vs. non-empty', () => {
    expect(isLess('', 'a')).toEqual(true);
});

test('should throw a TypeError if the first argument is not a string', () => {
    expect(() => isLess(123, 'hello')).toThrow(TypeError);
});

test('should throw a TypeError if the second argument is not a string', () => {
    expect(() => isLess('hello', null)).toThrow(TypeError);
});