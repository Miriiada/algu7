import { test, expect } from 'bun:test';
import { at } from './at.js';
import { len } from './len.js';

test('should return an element at a positive index', () => {
    expect(at([10, 20, 30], 1)).toBe(20);
});

test('should return the first element', () => {
    expect(at([10, 20, 30], 0)).toBe(10);
});

test('should return the last element using a negative index', () => {
    expect(at([10, 20, 30], -1)).toBe(30);
});

test('should return the secont-to-last element', () => {
    expect(at([10, 20, 30], -2)).toBe(20);
});

test('should return the first element using a negative length', () => {
    expect(at([10, 20, 30], -3)).toBe(10);
});

test('should return undefined then the index exceds the upper bound', () => {
    expect(at([10, 20, 30], 5)).toBe(undefined);
});

test('should return undefined when the index is below the lower bound', () => {
    expect(at([10, 20, 30], -5)).toBe(undefined);
});

test('should return undefined for an empty array', () => {
    expect(at([], 0)).toBe(undefined);
});

test('should return undefined for empty an empty array with a negative index', () => {
    expect(at([], -1)).toBe(undefined);
});

test('should return an element from a string array', () => {
    expect(at(['a', 'b', 'c'], 2)).toBe('c');
});

test('should not mutate the original array', () => {
    const arr = [10, 20, 30];

    const originalLength = len(arr);
    const first = arr[0];
    const second = arr[1];
    const third = arr[2];

    at(arr, -1);

    expect(len(arr)).toBe(originalLength);
    expect(arr[0]).toBe(first);
    expect(arr[1]).toBe(second);
    expect(arr[2]).toBe(third);
});

test('should throw TypeError if arr is not an array', () => {
    expect(() => at(123, 0)).toThrow(TypeError);
});

test('should throw TypeError if index is not at a number', () => {
    expect(() => at([1], 'a')).toThrow(TypeError);
});