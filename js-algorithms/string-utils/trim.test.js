import { test, expect } from 'bun:test';
import { trim } from './trim.js';

test('should remove spaces from both sides', () => {
    expect(trim('  hello  ')).toEqual('hello');
});

test('should remove spaces only from the left side',() => {
    expect(trim('  hello')).toEqual('hello');
});

test('should remove spaces only from the right side',() => {
    expect(trim('hello  ')).toEqual('hello');
});

test('should return the string unchanged if there are no spaces', () => {
    expect(trim('hello')).toEqual('hello');
});

test('should return an empty string for a string containing only spaces', () => {
    expect(trim('   ')).toEqual('');
});

test('should return an empty string for an empty string', () => {
    expect(trim('')).toEqual('');
});

test('should preserve spaces inside the string', () => {
    expect(trim('  he llo  ')).toEqual('he llo');
});

test('should preserve tabs and newlines', () => {
    expect(trim(' \t hello \n ')).toEqual('\t hello \n');
});

test('must work with Cyrillic', () => {
    expect(trim('  привет  ')).toEqual('привет');
});

test('must throw a TypeError if the argument is not a string', () => {
    expect(() => trim(123)).toThrow(TypeError);
});

test('should throw a TypeError if the argument is null', () => {
    expect(() => trim(null)).toThrow(TypeError);
});

