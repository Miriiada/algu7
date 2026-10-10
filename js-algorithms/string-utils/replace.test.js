import { test, expect } from 'bun:test';
import { replace } from './replace.js';

test('should replace world with everyone', () => {
    expect(replace('hello world', 'world', 'everyone')).toEqual('hello everyone')
});

test('should replace at the beginning', () => {
    expect(replace('hello world', 'hello', 'hi')).toEqual('hi world');
});

test('should replace at the end', () => {
    expect(replace('hello world', 'world', 'earth')).toEqual('hello earth');
});

test('should replace in the middle', () => {
    expect(replace('hello world', 'ello', 'i')).toEqual('hi world');
});

test('should return the original string if the search term is not found', () => {
    expect(replace('hello', 'help', 'hhhh')).toEqual('hello');
});

test('should replace with a longer string', () => {
    expect(replace('hi', 'i', 'ello')).toEqual('hello');
});

test('should replace with a shorter string', () => {
    expect(replace('hello', 'ello', 'i')).toEqual('hi');
});

test('should replace a substring with an empty string', () => {
    expect(replace('hello', 'll', '')).toEqual('heo');
});

test('should replace only the first occurrence', () => {
    expect(replace('banana', 'na', 'ba')).toEqual('babana');
});

test('must work with Cyrillic', () => {
    expect(replace('привет мир', 'мир', 'всем')).toEqual('привет всем');
});

test('should throw a TypeError if the first argument is not a string', () => {
    expect(() => replace(123, 'a', 'b')).toThrow(TypeError);
});

test('should throw a TypeError if the second argument is not a string', () => {
    expect(() => replace('hello', 123, 'b')).toThrow(TypeError);
});

test('should throw a TypeError if the third argument is not a string', () => {
    expect(() => replace('hello', 'a', 123)).toThrow(TypeError);
});