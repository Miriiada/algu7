import { test, expect } from 'bun:test';
import { reverse } from './reverse.js';

test('should reverse a string', () => {
    expect(reverse('hello')).toEqual('olleh');
});

test('should return an empty string for an empty string', () => {
    expect(reverse('')).toEqual('');
});

test('should return \'a\' for a single-character string', () => {
    expect(reverse('a')).toEqual('a');
});

test('should return the same string for a palindrome: reverse', () => {
    expect(reverse('racecar')).toEqual('racecar');
});

test('should reverse a string with spaces: reverse', () => {
    expect(reverse('a b c')).toEqual('c b a');
});

test('should work with Cyrillic: reverse', () => {
    expect(reverse('привет')).toEqual('тевирп');
});

test('should throw a TypeError if the argument is not a string', () => {
    expect(() => reverse(123)).toThrow(TypeError);
});

test('should throw a TypeError if the argument is null', () => {
    expect(() => reverse(null)).toThrow(TypeError);
});

