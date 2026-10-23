import { len } from './len.js';

/**
 * Adds an item to the beginning of an array.
 * Shifts all existing elements one position to the right.
 * Mutates the original array.
 *
 * @param {Array} arr - The array to modify.
 * @param {*} item - The item to add.
 * @returns {number} - The new length of the array.
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