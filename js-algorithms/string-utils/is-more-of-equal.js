/**
 * Checks whether the first string is lexicographically greater than or equal to the second.
 * The comparison is case-sensitive.
 *
 * @param {string} a - The first string.
 * @param {string} b - The second string.
 * @returns {boolean} True if the first string is greater or equal, otherwise false.
 * @throws {TypeError} If either argument is not a string.
 *
 * @example
 *   isMoreOrEqual('cat', 'car'); // true
 *   isMoreOrEqual('hello', 'hello'); // true
 *   isMoreOrEqual('car', 'cat'); // false
 */


import { isMore } from './is-more.js';
import { isEqual } from './is-equal.js';

export function isMoreOfEqual(a, b) {
    return isMore(a, b) || isEqual(a, b);
}