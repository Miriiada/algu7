import { test, expect } from 'bun:test';
import { indexOf } from './index-of.js';

test('should return 0 for substring at the beginning', () => {
    expect(indexOf('hello', 'he')).toEqual(0);
})