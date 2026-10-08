/**
 * Checks whether the first string is lexicographically greater than the second.
 * The comparison is care-sensitive.
 *
 * @param {string} a - The first string.
 * @param {string} b - The second string.
 * @returns {boolean} True if the first string is greater, otherwise false.
 * @throws {TypeError} if either argument is not a string.
 *
 * @example
 *  isMore('cat', 'car'); // true
 *  isMore('car', 'cat'); // false
 */

import { len } from './len.js'

export function isMore(a, b) {

    if (typeof a !== 'string') {
        throw new TypeError('Argument must be a string');
    }
    if (typeof b !== 'string') {
        throw new TypeError('Argument must be a string');
    }

    for (let i = 0; i < len(a) && i < len(b); i++) {
        if (a[i].charCodeAt(0) !== b[i].charCodeAt(0)) {
            return a[i].charCodeAt(0) > b[i].charCodeAt(0);
        }
    }
    return len(a) > len(b);
}