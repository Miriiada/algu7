import { len } from './len.js';
import { slice } from './slice.js';
import { indexOf } from './index-of.js';

/**
 * Replaces the first occurrence of a substring with another string.
 * Returns the original string if no match is found.
 * The search is case-sensitive.
 *
 * @param {string} str - The original string.
 * @param {string} search - The substring to find.
 * @param {string} replacement - The replacement string.
 * @returns {string} A new string with the first occurrence replaced.
 * @throws {TypeError} If any argument is not a string.
 *
 * @example
 *  replace('hello world', 'world', 'everyone'); // 'hello everyone'
 *  replace('banana', 'na', 'ba'); // 'babana'
 *  replace('hello', 'll', '') // 'heo'
 */

export function replace(str, search, replacement) {

    if (typeof str !== 'string' || typeof search !== 'string' || typeof replacement !== 'string') {
        throw new TypeError('Argument must be a string.')
    }

    const position = indexOf(str, search);
    if (position === -1) {
        return str;
    }

    const before = slice(str, 0, position);
    const after = slice(str, position + len(search));

    return before + replacement + after;
}