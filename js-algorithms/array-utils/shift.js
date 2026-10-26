import { len } from './len.js';

/**
 * Removes the first element from an array.
 * Shifts all remaining elements one position to the left.
 * Mutates the original array.
 *
 * @param {Array} arr - The array to modify.
 * @returns {*} - The removed first element, or undefined if empty.
 * @throws {TypeError} - If arr is not an array.
 */

export function shift(arr) {
    const size = len(arr);

    if (size === 0) {
        return undefined;
    }

    const firstItem = arr[0];

    for (let i = 0; i < size - 1; i++) {
        arr[i] = arr[i + 1];
    }

    delete arr[size - 1];
    return firstItem;
}