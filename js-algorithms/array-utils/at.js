import { len } from './len.js';

/**
 * Returns an array element by index.
 * Supports negative indices without modifying the array.
 *
 * @param {Array} arr - The input array.
 * @param {number} index - The index of the element.
 * @returns {*} The element at the index, or undefined if out of bounds.
 * @throws {TypeError} If arr is not an array or index is not a number.
 */

export function at(arr, index) {

    if (!Array.isArray(arr)) {
        throw new TypeError('Argument must be an array');
    }

    if (typeof index !== 'number') {
        throw new TypeError('Argument must be a number');
    }

    let position = index;

    if (index < 0) {
        position = len(arr) + index;
    }

    if (position < 0 || position >= len(arr)) {
        return undefined;
    }

    return arr[position];
}