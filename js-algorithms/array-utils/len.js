/**
 * Counts the elements of an array without modifying it.
 *
 * @param {Array} arr - The input array.
 * @returns {number} The number of elements.
 * @throws {TypeError} If the argument is not an array.
 */

export function len(arr) {

    if (!Array.isArray(arr)) {
        throw new TypeError('Argument must be an array');
    }

    let count = 0;

    for (let i = 0; arr[i] !== undefined; i++) {
        count++;
    }

    return count;
}