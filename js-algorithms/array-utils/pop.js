import { len } from './len.js';

/**
 * Removes the last element from an array.
 * Mutates the original array.
 *
 * @param {Array} arr - The array to modify.
 * @returns {*} The removed element, or undefined if empty.
 * @throws {TypeError} If arr is not an array.
 */

export function pop(arr) {
    if (len(arr) === 0) {
        return undefined;
    }

    const lastItem = arr[len(arr) - 1];

    delete arr[len(arr) - 1];

    return lastItem;
}