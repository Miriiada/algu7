/**
 * Checks whether the first string is lexicographically less than the second.
 * The comparison is case-sensitive.
 *
 * @param {string} a - The first string.
 * @param {string} b - The second string.
 * @returns {boolean} True if the first string is smaller, otherwise false.
 * @throws {TypeError} If either argument is not a string.
 *
 * @example
 *   isLess('car', 'cat'); // true
 *   isLess('cat', 'car'); // false
 */

import { len } from './len.js';

export function isLess(a, b) {

    if (typeof a !== 'string') {
        throw new TypeError('Argument must be a string');
    }
    if (typeof b !== 'string') {
        throw new TypeError('Argument must be a string');
    }

    for (let i = 0; i < len(a) && i < len(b); i++) {
        if (a[i].charCodeAt(0) !== b[i].charCodeAt(0)) {
            return a[i].charCodeAt(0) < b[i].charCodeAt(0);
        }
    }
    return len(a) < len(b);
}