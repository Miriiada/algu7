/**
 * Checks whether a string ends with a given substring.
 * The comparison is case-sensitive.
 *
 * @param {string} str - The original string.
 * @param {string} sea - The suffix to check.
 * @returns {boolean} True if the string ends with the suffix, otherwise false.
 * @throws {TypeError} If either argument is not a string.
 *
 * @example
 * endsWith('hello', 'lo'); // true
 * endsWith('hello', 'ell'); // false
 * endsWith('hello', ''); // true
 */

import { len } from './len.js';

export function endsWith(str, search) {
    const start = len(str) - len(search);

    for (let i = 0; i < len(search); i++) {
        if (str[start + i] !== search[i]) {
            return false;
        }
    }

    return true;

}