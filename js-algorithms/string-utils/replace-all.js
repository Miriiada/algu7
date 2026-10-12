import { len } from './len.js';
import { slice } from './slice.js';
import { indexOf } from './index-of.js';

/**
 * Replaces all non-overlapping occurrences of a substring.
 * Replacement text is not searched again.
 * An empty search inserts replacement between and around characters.
 *
 * @param {string}  str -The original string.
 * @param {string}  search - The substring to find.
 * @param {string}  replacement - The replacement string.
 * @returns {string} A new string with all occurrences replaced.
 * @throws {TypeError}  if any argument is not a string.
 *
 * @example
 *  replaceAll('banana', 'na', 'NA'); // 'baNANA'
 *  replaceALL('aaa', 'aa', 'ba'); // 'baa'
 *  replaceAll('abc', '', 'X'); // 'XaXbXcX'
 */

export function replaceAll(str, search, replacement) {

    if (typeof str !== 'string' || typeof search !== 'string' || typeof replacement !== 'string') {
        throw new TypeError('Argument must be a string');
        }

    if (search === '') {
        let result = replacement;

        for (let i = 0; i < len(str); i++) {
            result += str[i] + replacement;
        }

        return result;

    }

    let result = '';
    let remaining = str;

    while (true) {
        const position = indexOf(remaining, search);

        if (position === -1) {
            return result + remaining;
        }

        result += slice(remaining, 0, position) + replacement;

        remaining = slice(remaining, position + len(search));
    }

}
