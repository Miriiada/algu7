import { describe, test, expect } from 'bun:test';
import { len } from './len.js';

describe('Test len', () => {
    test('it should return 5 for the string "hello"', () => {
        expect(len('hello')).toEqual(5);
    });
});

    test('it should return 0 for an empty string', () => {
        expect(len('')).toEqual(0);
});

    test('it should return 3 for the three spaces', () => {
        expect(len('   ')).toEqual(3);
});

    test('it should return 6 for cyrillic text', () => {
        expect(len('привет')).toEqual(6);
});

    test('it should throw TypeError for a number', () => {
        expect(() => len(123)).toThrow(TypeError);
});

