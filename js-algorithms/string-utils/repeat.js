/**
 * Repeats a string a specified number of times.
 * Fractional counts are rounded down.
 * Returns an empty string if the count is zero or omitted.
 *
 * @param {string} str - The string to repeat.
 * @param {number} [count] - The number of repetitions.
 * @returns {string} A new string containing the repeated text.
 * @throws {TypeError} If str not a string or count is a number.
 * @throws {RangeError} If count is negative.
 *
 * @example
 * repeat('ab', 3); // 'ababab'
 * repeat('a', 2.7); // 'aa'
 * repeat('a', 0); // ''
 * repeat('a'); // ''
 */

export function repeat(str, count) {

    if (typeof str !== 'string') {
        throw new TypeError('Argument must be a string');
    }

    if (count === undefined) {
        return '';
    }

    if (typeof count !== 'number' ) {
        throw new TypeError('Argument must be a number');
    }

    if (count < 0) {
        throw new RangeError('Count must not be negative');
    }

    count = Math.floor(count)
    let result = '';

    for (let i = 0; i < count; i++) {
        result += str;
    }

    return result;

}

