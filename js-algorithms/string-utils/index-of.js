import { len } from './len.js';

export function indexOf(str, search) {

    if (typeof str !== 'string' || typeof search !== 'string') {
    throw new TypeError('Argument must be a string');
    }

    for (let i = 0; i <= len(str) - len(search); i++) {
        let matched = true;

        for (let j = 0; j < len(search); j++) {
            if (str[i + j] !== search[j]) {
                matched = false;
                break;
            }
        }

        if (matched) {
            return i;

        }
    }

    return -1;
}