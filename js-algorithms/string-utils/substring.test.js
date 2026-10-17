import { test, expect } from 'bun:test';
import { substring } from './substring.js';

test('should return the entire string',() => {
    expect(substring('hello', 0, 5)).toEqual('hello');
});

test('should return ell for hello, 1, 4', () => {
    expect(substring('hello', 1, 4)).toEqual('ell');
});

test('should return h for the first character', () => {
    expect(substring('hello', 0, 1)).toEqual('h')
});

test('should return e for a single character when start and end are swapped', () => {
    expect(substring('hello', 2, 1)).toEqual('e');
});

test('should return o for the last character', () => {
    expect(substring('hello', 4, 5)).toEqual('o');
});

test('should clamp end to the string length', () => {
    expect(substring('hello', 0, 10)).toEqual('hello');
});

test('should return the rest of the string when end is omitted', () => {
    expect(substring('hello', 2)).toEqual('llo');
});

test('should swap start and end if start is greater than end', () => {
    expect(substring('hello', 4, 1)).toEqual('ell');
});

test('should clamp a negative start to 0', () => {
    expect(substring('hello', -2, 3)).toEqual('hel');
});

test('should clamp a negative end to 0', () => {
    expect(substring('hello', 3, -1)).toEqual('hel');
});

test('should convert NaN to 0', () => {
    expect(substring('hello', NaN, 3)).toEqual('hel');
});

test('should return an empty string if start is greater than or equal to the string length', () => {
    expect(substring('hello', 5, 7)).toEqual('');
});

test('should return an empty string for an empty input string', () => {
    expect(substring('', 0, 1)).toEqual('');
});

test('should handle Cyrillic characters correctly', () => {
    expect(substring('привет', 1, 4)).toEqual('рив');
});

test('should clamp start and end to the string length', () => {
    expect(substring('hello', 7, 10)).toEqual('');
});

test('should truncate fractional indices', () => {
    expect(substring('hello', 1.7, 4.2)).toEqual('ell');
});

test('should throw a TypeError if str is not a string', () => {
    expect(() => substring(123, 0, 3)).toThrow(TypeError);
});

test('should throw a TypeError if start is omitted', () => {
    expect(() => substring('hello')).toThrow(TypeError);
});

test('should throw a TypeError if start is not a number', () => {
    expect(() => substring('hello', '1', 3)).toThrow(TypeError);
});

test('should throw a TypeError if end is not a number', () => {
    expect(() => substring('hello', 0, '3')).toThrow(TypeError);
});


