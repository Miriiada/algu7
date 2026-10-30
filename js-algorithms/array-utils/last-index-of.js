import { len } from './len.js';

/**
 * Finds the index of the last occurrence of an item in an array.
 * Does not mutate the original array.
 *
 * @param {Array} arr - The array to search.
 * @param {*} item - The item to search for.
 * @returns {number} - The index of the last match, or -1 if not found.
 * @throws {TypeError} - If arr is not an array.
 */

export function lastIndexOf(arr, item) {
    const size = len(arr);

    for (let i = size - 1; i >= 0; i--) {
        if (arr[i] === item)
            return i;
    }

    return -1;
}