import { indexOf } from './index-of.js';

/**
 * Checks whether an array contains an item.
 * Does not mutate the original array.
 *
 * @param {Array} arr - The array to search.
 * @param {*} item - The item to search for.
 * @returns {boolean} - True if the item is found, otherwise false.
 * @throws {TypeError} - If arr is not an array.
 */

export function includes(arr, item) {
    return indexOf(arr, item) !== -1;
}