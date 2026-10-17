import { len } from './len.js';
import { slice } from './slice.js';

/**
 * Removes spaces from the beginning and end of a string.
 * Preserves spaces inside the string.
 * Does not remove tabs or newline characters.
 *
 * @param {string} str - The original string.
 * @returns {string} A new string without leading or trailing spaces.
 * @throws {TypeError} If the argument is not a string.
 *
 * @example
 *   trim('  hello  '); // 'hello'
 *   trim('  he llo  '); // 'he llo'
 *   trim('   '); // ''
 */

export function trim(str) {

    if (typeof str !== 'string') {
        throw new TypeError('Argument must be a string');
    }

    let start = 0;
    let end = len(str);

    while (start < end && str[start] === ' ') {
        start++;
    }

    while (end > start && str[end - 1] === ' ') {
        end--;
    }

    return slice(str, start, end);
}