import { len } from './len.js';

/**
 * Converts uppercase Latin and Cyrillic letters to lowercase.
 *
 * @param {string} str - The original string.
 * @returns {string} The converted string.
 * @throws {TypeError} If str is not a string.
 */

export function lowerCase(str) {
    if (typeof str !== 'string') {
        throw new TypeError('Argument must be a string');
    }

    let result = '';

    for (let i = 0; i < len(str); i++) {
        const code = str[i].charCodeAt(0);

        if ((code >= 65 && code <= 90) || (code >= 1040 && code <= 1071)) {
            result += String.fromCodePoint(code + 32);
        } else {
            result += str[i];
        }
    }

    return result;
}