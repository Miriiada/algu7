import { len } from './len.js';

/**
 * Concatenates two arrays into a new array.
 * Does not mutate the original arrays.
 *
 * @param {Array} arr1 - The first input array.
 * @param {Array} arr2 - The second input array.
 * @returns {Array} - A new array containing elements from both arrays.
 * @throws {TypeError} - If either argument is not an array.
 */

export function concat(arr1, arr2) {
    const size1 = len(arr1);
    const size2 = len(arr2);

    const result = [];

    for (let i = 0; i < size1; i++) {
        result[i] = arr1[i];
    }

    for (let i = 0 ; i < size2; i++) {
        result[size1 + i] = arr2[i];
    }

    return result;
}