export function len(str) {
    let count = 0;

    if (typeof str !== 'string') {
        throw new TypeError('Argument must be a string');
    }

    while (str[count] !== undefined) {
        count++
    }
    return count;
}

