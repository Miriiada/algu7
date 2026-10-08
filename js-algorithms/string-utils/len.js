/**
 * Returns the length of a string.
 *
 * @param {string} str - The input string.
 * @returns {number} The Length of the string.
 * @throws {TypeError} If the argument is not a string.
 *
 * @example
 *  len('hello'); // 5
 *  len('')       // 0
 */

export function len(str) {
    let count = 0;

    if (typeof str !== 'string') {
        throw new TypeError('Argument must be a string');
    }

    while (str[count] !== undefined) {
        count++
    }
    return count;
}

