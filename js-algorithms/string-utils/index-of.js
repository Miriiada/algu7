/**
 * Finds the first occurrence of a substring within a string.
 * Returns -1 if the substring is not found.
 *
 * @param {string} str - The string to search in.
 * @param {string} search - The substring to find.
 * @returns {number} The index of the first occurrence, or -1 if not found.
 * @throws {TypeError} If either argument is not a string.
 *
 * @example
 *  indexOf('hello','ll'); // 2
 *  indexOf('hello', 'li'); // -1
 *  indexOf('hello', ''); // 0
 */

import { len } from './len.js';

export function indexOf(str, search) {

    if (typeof str !== 'string' || typeof search !== 'string') {
    throw new TypeError('Argument must be a string');
    }

    for (let i = 0; i <= len(str) - len(search); i++) {
        let matched = true;

        for (let j = 0; j < len(search); j++) {
            if (str[i + j] !== search[j]) {
                matched = false;
                break;
            }
        }

        if (matched) {
            return i;

        }
    }

    return -1;
}