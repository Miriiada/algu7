import { test, expect } from 'bun:test';
import { repeat } from './repeat.js';

test('should repeat 3 times: repeat', () => {
    expect(repeat('ab', 3)).toEqual('ababab');
});

test('should return the original string for count = 1: repeat', () => {
    expect(repeat('hello', 1)).toEqual('hello');
});

test('should return empty string for count = 0', () => {
    expect(repeat('', 0)).toEqual('');
});

test('should return empty string for an empty original string: repeat', () => {
    expect(repeat('', 5)).toEqual('');
});

test('should repeat a single character: repeat', () => {
    expect(repeat('x', 4)).toEqual('xxxx');
});

test('should truncate the fractional part: repeat', () => {
    expect(repeat('a', 2.7)).toEqual('aa');
});

test('should return empty string for count < 1: repeat', () => {
    expect(repeat('a', 0.5)).toEqual('');
});

test('should return empty string if count is omitted: repeat', () => {
    expect(repeat('a')).toEqual('');
});

test('should work with Cyrillic: repeat', () => {
    expect(repeat('да', 3)).toEqual('дадада');
});

test('should throw a RangeError for a negative count: repeat', () => {
    expect(() => repeat('a', -1)).toThrow(RangeError);
});

test('should throw a TypeError if count is not a number: repeat', () => {
    expect(() => repeat('a', '3')).toThrow(TypeError);
});

test('should throw a TypeError if str is not a string: repeat', () => {
    expect(() => repeat(123, 3)).toThrow(TypeError);
});