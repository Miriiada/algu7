import { test, expect } from 'bun:test';
import { pad } from './pad.js';

test('should pad on the left', () => {
    expect(pad('hi', 5, 'left')).toEqual('hi');
});
