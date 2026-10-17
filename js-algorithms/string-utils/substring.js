import { len } from './len.js';

/**
 * Extracts a substring between two normalized indices.
 * Negative indices and NaN are treated as zero.
 * Indices are clamped to the string length and swapped if necessary.
 *
 * @param {string} str - The original string.
 * @param {number} start - The Starting index (inclusive).
 * @param {number} [end] - The ending index (exclusive). Defaults to the string length.
 * @returns {string} The extracted substring.
 * @throws {TypeError} If str or start has an invalid type, or end is neither a number nor undefined.
 *
 * @example
 *   substring('hello', 1, 4); // 'ell'
 *   substring('hello', 2);    // 'llo'
 *   substring('hello', 4, 1); // 'ell'
 */

export function substring(str, start, end) {
    if (typeof str !== 'string') {
        throw new TypeError('Argument must be a string');
    }

    if (typeof start !== 'number') {
        throw new TypeError('Argument must be a number');
    }

    if (typeof end !== 'number' && typeof end !== 'undefined') {
        throw new TypeError('Argument must be a number or undefined');
    }

    if (end === undefined) {
        end = len(str);
    }

    if (start < 0 || Number.isNaN(start)) {
        start = 0
    }

    if (end < 0 || Number.isNaN(end)) {
        end = 0;
    }

    // Remove fractional parts
    start = Math.trunc(start);
    end = Math.trunc(end);

    // Clamp indices to the string length
    if (start > len(str)) {
        start = len(str);
    }

    if (end > len(str)) {
        end = len(str);
    }

    if (start > end) {
        let temp = start;
        start = end;
        end = temp;
    }

    let result = '';

    for (let i = start; i < end; i++) {

        result += str[i];

    }

    return result;

}