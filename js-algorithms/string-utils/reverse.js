import { len } from './len.js';

export function reverse(str) {

    if (typeof str !== 'string') {
        throw new TypeError('Argument must be a string');
    }

    let result = '';

    for (let i = len(str) -1; i >= 0; i--) {
        result += str[i];
    }
    return result;
}