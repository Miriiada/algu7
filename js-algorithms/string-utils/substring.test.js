import { test, expect } from 'bun:test';
import { substring } from './substring.js';

test('should return hello for hello, 0, 5',() => {
    expect(substring('hello', 0, 5)).toEqual('hello');
})