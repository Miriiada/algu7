import { len } from './len.js';

/**
 * Converts lowercase Latin and Cyrillic letters to uppercase.
 *
 * @param {string} str - The original string.
 * @returns {string} The converted string.
 * @throws {TypeError} If str is not a string.
 */

export function upperCase(str) {
    if (typeof str !== 'string') {
        throw new TypeError('Argument must be a string');
    }

    let result = '';

    for (let i = 0; i < len(str); i++) {
        const code = str[i].charCodeAt(0);

        if ((code >= 97 && code <= 122) || (code >= 1072 && code <= 1103)) {
            result += String.fromCodePoint(code - 32);
        } else {
            result += str[i];
        }
    }

    return result;
}