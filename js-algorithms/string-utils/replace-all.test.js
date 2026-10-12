import { test, expect } from 'bun:test';
import { replaceAll } from './replace-all.js';

test('should replace a single occurrence', () => {
    expect(replaceAll('hello', 'll', 'LL')).toEqual('heLLo');
});

test('should replace multiple occurrences', () => {
    expect(replaceAll('banana', 'na', 'NA')).toEqual('baNANA');
});

test('should not process the replacement string itself', () => {
    expect(replaceAll('aaa', 'aa', 'ba')).toEqual('baa');
});

test('should return the original string if the search string is not found', () => {
    expect(replaceAll('hello', 'eli', 'hhh')).toEqual('hello');
});

test('should handle replacing a character with a string', () => {
    expect(replaceAll('a', 'a', 'hello')).toEqual('hello')
});

test('should replace with a longer string', () => {
    expect(replaceAll('hi', 'i', 'ello')).toEqual('hello');
});

test('should replace with an empty string', () => {
    expect(replaceAll('hello', 'l', '')).toEqual('heo');
});

test('should return an empty string for an empty source string', () => {
    expect(replaceAll('', 'abc', 'X')).toEqual('');
});

test('should insert replacement around each character if search is empty', () => {
    expect(replaceAll('abc', '', 'X')).toEqual('XaXbXcX');
});

test('should throw a TypeError if str is not a string', () => {
    expect(() => replaceAll(123, 'a', 'b')).toThrow(TypeError);
});

test('should throw a TypeError if search is not a string', () => {
    expect(() =>  replaceAll('hello', 123, 'b')).toThrow(TypeError);
});

test('should throw a TypeError if replacement is not a string', () => {
    expect(() => replaceAll('hello', 'a', 123)).toThrow(TypeError);
});