import { len } from './len.js';

export function endsWith(str, search) {
    const start = len(str) - len(search);

    for (let i = 0; i < len(search); i++) {
        if (str[start + i] !== search[i]) {
            return false;
        }
    }

    return true;

}