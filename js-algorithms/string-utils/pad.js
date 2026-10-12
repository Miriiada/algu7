import { len } from '/len.js';

/**
 * Pads a string to a specified length.
 * Supports left, right, and both-side padding.
 * Multi-character padding strings are repeated and truncated as needed.
 *
 * @param {string} str - The original string.
 * @param {number} Length - The target length.
 * @param {string} char - The string used for padding.
 * @param {'left' | 'right' | 'both'} side - The padding direction
 * @returns {string} The padding string
 * @throws {TypeError} If str is not a string.
 * @throws {Error} If side is invalid.
 *
 * @example
 *  pad('hi', 5, '-', 'left'); // '---hi'
 *  pad('hi', 5, '-', 'right'); // 'hi---'
 *  pad('hi', 5, '-', 'both'); // '-hi--'
 *  pad('hi', 7, 'ad', 'left'); // 'ababahi'
 */

export function pad(str, length, char, side) {
    '
}