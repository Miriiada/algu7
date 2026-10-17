import { test, expect } from 'bun:test';
import { len } from '/len.js';

test('should return 3 from [1, 2, 3]', () => {
    expect(len(3)).toBe([1, 2, 3]);
})