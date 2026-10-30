import { len } from './len.js';

/**
 * Adds an item to the end of an array.
 * Mutates the original array.
 *
 * @param {Array} arr - The array to modify.
 * @param {*} item - The item to add.
 * @returns {number} The new length of the array.
 * @throws {TypeError} If arr is not an array.
 */

export function push(arr, item) {
    arr[len(arr)] = item;

    return len(arr);
}

