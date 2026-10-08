/**
 * Checks whether the first string is lexicographically less than or equal to the second.
 * The comparison is case-sensitive.
 *
 * @param {string} a - The first string.
 * @param {string} b - The second string.
 * @returns {boolean} True if the first string is smaller or equal, otherwise false.
 * @throws {TypeError} If either argument is not a string.
 *
 * @example
 *   isLessOrEqual('car', 'cat'); // true
 *   isLessOrEqual('hello', 'hello'); // true
 *   isLessOrEqual('cat', 'car'); // false
 */

import { isLess } from './is-less.js';
import { isEqual } from './is-equal.js';

export function isLessOrEqual(a, b) {
    return isLess(a, b) || isEqual(a, b);
}