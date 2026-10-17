import { len } from './len.js';
import { slice } from './slice.js';

/**
 * Pads a string to a specified length.
 * Supports left, right, and both-side padding.
 * Multi-character padding strings are repeated and truncated as needed.
 *
 * @param {string} str - The original string.
 * @param {number} length - The target length.
 * @param {string} char - The string used for padding.
 * @param {'left' | 'right' | 'both'} side - The padding direction
 * @returns {string} The padded string.
 * @throws {TypeError} If str or char is not a string, or length is not a number.
 * @throws {TypeError} If the padding string is empty.
 * @throws {Error} If side is invalid.
 *
 * @example
 *  pad('hi', 5, '-', 'left'); // '---hi'
 *  pad('hi', 5, '-', 'right'); // 'hi---'
 *  pad('hi', 5, '-', 'both'); // '-hi--'
 * pad('hi', 7, 'ab', 'left'); // 'ababahi'
 */

export function pad(str, length, char, side) {

    if (typeof str !== 'string' || typeof char !== 'string') {
        throw new TypeError('Argument must be a string');
    }

    if (typeof length !== 'number') {
        throw new TypeError('Argument must be a number');
    }

    if (char === '') {
        throw new TypeError('Padding string must not be empty');
    }

    if (side !== 'left' && side !== 'right' && side !== 'both') {
        throw new Error('Invalid padding side');
    }

    if (length <= len(str)) {
        return str;
    }

    const padding = length - len(str);
    let paddingText = '';
    const charLength = len(char);

    for (let i = 0; i < padding; i++) {
        paddingText += char[i % charLength];
    }

    if (side === 'left') {
        return paddingText + str;
    }

    if (side === 'right') {
        return str + paddingText;
    }

    if (side === 'both') {
        const left = Math.floor(padding / 2);
        const right = padding - left;

        return slice(paddingText, 0, left) + str + slice(paddingText, 0, right);
    }

}