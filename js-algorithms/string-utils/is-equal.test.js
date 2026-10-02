import { test, expect } from 'bun:test';
import { isEqual } from './is-equal.js';

test('should return true for equal string', () =>{
    expect(isEqual('hello', 'hello')).toEqual(true);
});

test('should return true for equal empty string', () => {
    expect(isEqual('', '')).toEqual(true);
});

test('should return false for different string of the same length', () => {
   expect(isEqual('hello', 'world')).toEqual(false);
});

test('should return false for string of different length', () => {
    expect(isEqual('hi', 'hello')).toEqual(false);
});

test('should return false if spaces are present', () => {
    expect(isEqual(' a', 'a')).toEqual(false);
});

test('should return false for string with space', () => {
    expect(isEqual('hi','hi ')).toEqual(false);
});

test('should return false if one string is empty and the other is not', () => {
    expect(isEqual('', 'a')).toEqual(false);
});

test('should return true for Cyrillic', () => {
    expect(isEqual('привет', 'привет')).toEqual(true);
});

test('should throw a TypeError if the first argument is not a string', () => {
    expect(() => isEqual(123, 'hello')).toThrow(TypeError);
});

test('should throw a TypeError if second argument is not a string', () => {
    expect(() => isEqual('hello', null)).toThrow(TypeError);
});