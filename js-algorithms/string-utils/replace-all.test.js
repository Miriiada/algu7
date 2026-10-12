import { test, expect } from 'bun:test';
import { replaceAll } from './replace-all.js';

test('should replace a single occurrence', () => {
    expect(replaceAll('hello', 'll', 'LL')).toEqual('hello');
});