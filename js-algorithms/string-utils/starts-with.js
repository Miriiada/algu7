import { len } from './len.js';

export function startsWith (str, search) {

    if (typeof str !== 'string' || typeof search !== 'string') {
        throw new TypeError('Argument must be a string');
    }

    for (let i = 0; i < len(search); i++) {
        if (str[i] !== search[i]) {
            return false;
        }
    }

    return true;

}
