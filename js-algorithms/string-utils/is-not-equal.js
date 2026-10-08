/**
 * Checks weather two strings are different
 * The comparison is case-sensitive
 *
 * @param {string} a - The first string.
 * @param {string} b - The second string.
 * @returns {boolean} True if the strings are different, otherwise false.
 * @throws {TypeError} if either argument is not a string.
 *
 * @example
 *  isNotEqual('hello', 'world'); // true
 *  isNotEqual('hello', 'hello'); // false
 */

import { len } from './len.js'

export function isNotEqual(a, b) {

    if (typeof a !== 'string') {
        throw new TypeError('Argument must be a string');
    }
    if (typeof b !== 'string') {
        throw new TypeError('Argument must be a string');
    }
    if (len(a) !== len(b)) {
        return true;
    }

    for (let i = 0; i < len(a); i++) {
        if (a[i] !== b[i]) {
            return true;
        }
    }
    return false;
}