import { len } from './len.js';

export function isLess(a, b) {

    if (typeof a !== 'string') {
        throw new TypeError('Argument must be a string');
    }
    if (typeof b !== 'string') {
        throw new TypeError('Argument must be a string');
    }

    for (let i = 0; i < len(a) && i < len(b); i++) {
        if (a[i].charCodeAt(0) !== b[i].charCodeAt(0)) {
            return a[i].charCodeAt(0) < b[i].charCodeAt(0);
        }
    }
    return len(a) < len(b);
}