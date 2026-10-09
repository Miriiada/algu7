import { test, expect } from 'bun:test';
import { slice } from './slice.js';

test('should return the entire string', () => {
    expect(slice('hello', 0, 5)).toEqual('hello');
});

test('should extract a substring from the middle', () => {
    expect(slice('hello', 1, 4)). toEqual('ell');
});

test('should return the rest of the string when end is omitted', () => {
    expect(slice('hello', 2)).toEqual('llo')
})

test('should return llo for hello, 2 no end specified goes to the end', () => {
    expect(slice('hello', 2)).toEqual('llo');
});

test('should return h for hello, 0 , 1', () => {
    expect(slice('hello', 0, 1)).toEqual('h');
});

test('should return l for hello, 2, 3', () => {
    expect(slice('hello', 2, 3)).toEqual('l');
});

test('should return o for hello, 4', () => {
    expect(slice('hello', 4)).toEqual('o');
});

test('should return llo for a negative start hello, -3', () => {
    expect(slice('hello', -3)).toEqual('llo');
});

test('should return hell for a negative end hello, 0, -1', () => {
    expect(slice('hello', 0, -1)).toEqual('hell');
});

test('should return ll for both negative indices', () => {
    expect(slice('hello', -3, -1)).toEqual('ll');
});

test('should return an empty string if start is greater than or equal to end', () => {
    expect(slice('hello', 4, 1)).toEqual('');
});

test('should return an empty string if start is out of bounds', () => {
    expect(slice('hello', 10, 15)).toEqual('');
});

test('should normalize an out-of-bounds negative start', () => {
    expect(slice('hello', -10, 3)).toEqual('hel');
});

test('should return an empty string for an empty input string', () => {
    expect(slice('', 0, 1)).toEqual('');
});

test('should work with Cyrillic characters', () => {
    expect(slice('привет', 1, 4)).toEqual('рив');
});

test('should truncate a negative fractional index', () => {
    expect(slice('hello', -2.7)).toEqual('lo');
});

test('should return ll for both negative indices', () => {
    expect(() => slice(123, 0, 3)).toThrow(TypeError);
});

test('should throw a TypeError if start is not a number', () => {
    expect(() => slice('hello', '1', 3)).toThrow(TypeError);
});

test('should throw a TypeError if end is not a number', () => {
    expect(() => slice('hello', 0, '3')).toThrow(TypeError);
});
