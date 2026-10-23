import { len } from './len.js';

/**
 * Adds at item to the beginning of an array.
 * Shift all existing elements one position to the right.
 * Mutates the original array.
 *
 * @param {Array} arr - The input array.
 * @param {item} item - The item add to the beginning.
 * @returns {number} - The new item in array.
 * @throws {TypeError} - If arr is not an array.
 */

export function unshift(arr, item) {
    const size = len(arr);

    for (let i = size; i > 0; i--) {
        arr[i] = arr[i - 1];
    }

    arr[0] = item;
    return len(arr);
}