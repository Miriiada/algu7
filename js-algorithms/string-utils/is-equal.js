/**
 * Checks whether two strings are equal.
 * The comparison is care-sensitive.
 *
 * @param {string} a — The first string.
 * @param {string} b — The second string.
 * @returns {boolean} — True if the string are equal, otherwise false.
 * @throws {TypeError} — If either argument is not a string.
 *
 * @example
 *   isEqual('hello', 'hello'); // true
 *   isEqual('hi', 'hello');    // false
 */

import { len } from './len.js';

export function isEqual(a, b) {

    if (typeof a !== 'string') {
        throw new TypeError('Argument must be a string');
    }
    if (typeof b !== 'string') {
        throw new TypeError('Argument must be a string');
    }
    if (len(a) !== len(b)) {
        return false;
    }

    for (let i = 0; i < len(a); i++) {
        if (a[i] !== b[i]) {
            return false;
        }
    }
    return true;
}


