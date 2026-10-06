import { len } from './len.js'

export function isNotEqual(a, b) {

    if (typeof a !== 'string') {
        throw new TypeError('Argument must be a string');
    }
    if (typeof b !== 'string') {
        throw new TypeError('Argument must be a string');
    }
    if (len(a) !== len(b)) {
        return true;
    }

    for (let i = 0; i < len(a); i++) {
        if (a[i] !== b[i]) {
            return true;
        }
    }
    return false;
}