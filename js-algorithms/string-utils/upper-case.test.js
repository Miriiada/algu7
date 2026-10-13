import { test, expect } from 'bun:test';
import { upperCase } from './upper-case.js';

test('converts lowercase Latin letters to uppercase', () => {
    expect(upperCase('hello')),toBe('HELLO');
});