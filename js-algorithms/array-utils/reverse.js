import { len } from './len.js';

/**
 * Reverses an array.
 * Mutates the original array in place and returns the same array.
 *
 * @param {Array} arr - The array to reverse.
 * @returns {Array} The reversed original array.
 * @throws {TypeError} - If arr is not an array.
 */

export function reverse(arr) {
    const size = len(arr);

    let left = 0;
    let right = size - 1;

    while (left < right) {
        const temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;

        left++;
        right--;
    }

    return arr;
}

