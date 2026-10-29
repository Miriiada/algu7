import { len } from './len.js';

/**
 * Fills an array or a specified range with a given value.
 * Mutates the original array in place.
 *
 * @param {Array} arr - The array to modify.
 * @param {*} value - The value to fill the array with.
 * @param {number} [start=0] - The starting index (inclusive).
 * @param {number} [end] - The ending index (exclusive). Defaults to the array length.
 * @returns {Array} - The original array after modification.
 * @throws {TypeError} - If arr is not an array or start/end are not numbers.
 */

export function fill(arr, value, start = 0, end = len(arr)) {
    const size = len(arr);

    if (typeof start !== 'number' || typeof end !== 'number') {
        throw new TypeError('Argument must be a number');
    }

    if (start < 0) {
        start = size + start;
    }

    if (start < 0) {
        start = 0;
    }

    if (start > size) {
        start = size;
    }

    if (end < 0) {
        end = size + end;
    }

    if (end < 0) {
        end = 0;
    }

    if (end > size) {
        end = size;
    }

    for (let i = start; i < end; i++) {
        arr[i] = value;
    }

    return arr;
}