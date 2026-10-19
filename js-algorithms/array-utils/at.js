import { len } from './len.js';

/**
 * Returns an array element by index.
 * Supports negative integer indices without modifying the array.
 *
 * @param {Array} arr - The input array.
 * @param {number} index - An integer index. Negative indices count from the end.
 * @returns {*} The element at the index, or undefined if out of bounds.
 * @throws {TypeError} If arr is not an array or index is not an integer.
 */

export function at(arr, index) {

    if (!Array.isArray(arr)) {
        throw new TypeError('Argument must be an array');
    }

    if (typeof index !== 'number' || !Number.isInteger(index)) {
        throw new TypeError('index must be an integer');
    }

    const arrLen = len(arr);
    let position = index;

    if (index < 0) {
        position = arrLen + index;
    }

    if (position < 0 || position >= arrLen) {
        return undefined;
    }

    return arr[position];
}