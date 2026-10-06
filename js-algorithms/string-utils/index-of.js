import { len } from './len.js';

export function indexOf(str, search) {

    if (typeof str !== 'string' || typeof search !== 'string') {
    throw new TypeError('Argument must be a string');
    }

    for (let j = 0; j < len(search); j++) {
        if (str[j] !== search[j]) {
            return -1;
        }
    }
    return 0;
}