/**
 * Returns a string with its characters in reverse order.
 *
 * @param {string} str - The string to reverse.
 * @return {string} A new string with the characters reversed.
 * @throws {TypeError} If the argument is not a string.
 *
 * @example
 * reverse('hello'); // 'olleh'
 * reverse('racecar') // 'racecar'
 * reverse(''); // ''
 */

import { len } from './len.js';

export function reverse(str) {

    if (typeof str !== 'string') {
        throw new TypeError('Argument must be a string');
    }

    let result = '';

    for (let i = len(str) -1; i >= 0; i--) {
        result += str[i];
    }
    return result;
}