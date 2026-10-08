/**
 * Checks whether a string starts with a given substring.
 * The comparison is case-sensitive.
 *
 * @param {string} str - The original string.
 * @param {string} search - The prefix to check.
 * @returns {boolean} True if the string starts with the prefix, otherwise false.
 * @throws {TypeError} if either argument is not a string.
 *
 * @example
 *  startsWith('hello', 'he'); // true
 *  startsWith('hello', 'el'); // false
 *  startsWith('hello', ''); // true
 */

import { len } from './len.js';

export function startsWith (str, search) {

    if (typeof str !== 'string' || typeof search !== 'string') {
        throw new TypeError('Argument must be a string');
    }

    for (let i = 0; i < len(search); i++) {
        if (str[i] !== search[i]) {
            return false;
        }
    }

    return true;

}
