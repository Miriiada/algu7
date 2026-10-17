/**
 * Checks whether a string contains a given substring.
 * The search is case-sensitive.
 *
 * @param {string} str - The string to search in.
 * @param {string} search - The substring to find.
 * @return {boolean} True if the substring is found, otherwise false.
 *
 * @example
 *  includes('hello', 'ell'); // true
 *  includes('hello', 'xyz'); // false
 *  includes('hello', ''); // true
 */

import { indexOf } from './index-of.js';

export function includes(str, search) {
    return indexOf(str, search) !== -1;
};