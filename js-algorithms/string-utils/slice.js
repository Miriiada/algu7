import { len } from './len.js';

/**
 * Extracts a portion of a string between two indices.
 * Negative indices are counted from the end of the string.
 * Returns an empty string if start is greater than or equal to end.
 *
 * @param {string} str - The original string.
 * @param {number} start - The starting index (inclusive).
 * @param {number} [end] - The ending index (exclusive). Defaults to the string length.
 * @returns {string} The extracted portion of the string.
 * @throws {TypeError} If str or start has an invalid type, or end is neither a number nor undefined.
 *
 * @example
 *  slice('hello', 1, 4); // 'ell'
 *  slice('hello', -3); // 'llo'
 *  slice('hello', 0, -1); // 'hell'
 *  slice('hello', 4, 1); // ''
 */

export function slice(str, start, end) {

    if (typeof str !== 'string') {
        throw new TypeError('Argument must be a string');
    }

    if (typeof start !== 'number') {
        throw new TypeError('Argument must be a number');
    }

    if (typeof end !== 'number' && typeof end !== 'undefined' ) {
        throw new TypeError('Argument must be a number or undefined')
    }

    if (end === undefined) {
        end = len(str);
    }

    if (Number.isNaN(start)) {
        start = 0;
    }

    if (Number.isNaN(end)) {
        end = 0;
    }

    start = Math.trunc(start);
    end = Math.trunc(end);

    if (start < 0) {
        start = len(str) + start;
    }

    if (end < 0) {
        end = len(str) + end;
    }

    if (start < 0) {
        start = 0;
    }

    if (start > len(str)) {
        start = len(str);
    }

    if (end > len(str)) {
        end = len(str);
    }

    let result = '';

    for (let i = start; i < end; i++) {
        result += str[i];
    }

    return result;
}