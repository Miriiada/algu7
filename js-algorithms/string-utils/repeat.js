export function repeat(str, count) {

    if (typeof str !== 'string') {
        throw new TypeError('Argument must be a string');
    }

    if (count === undefined) {
        return '';
    }

    if (typeof count !== 'number' ) {
        throw new TypeError('Argument must be a number');
    }

    if (count < 0) {
        throw new RangeError('Count must not be negative');
    }

    count = Math.floor(count)
    let result = '';

    for (let i = 0; i < count; i++) {
        result += str;
    }

    return result;

}

