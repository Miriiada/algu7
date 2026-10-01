function repeat(text, count) {
    if (typeof text !== "string") {
        throw new TypeError('text должен быть строкой');
    }
    if (typeof count !== "number") {
        throw new TypeError('count должен быть числом');
    }
    if (count <= 0) {
        throw new RangeError('count должен быть числом больше 0');
    }
    let result = '';
    for (let i = 0; i < count; i++) {
        result += text;
    }
    return result;
}

try {
    console.log(repeat('JS', 3))
    console.log(repeat(123, 3))
} catch (error) {
    if (error instanceof TypeError) {
        console.log('TypeError:', error.message);
    } else if (error instanceof RangeError) {
        console.log('RangeError:', error.message)
    }
}

try {
    console.log(repeat('JS', 'abc'))
} catch (error) {
    if (error instanceof TypeError) {
        console.log('TypeError:', error.message);
    } else if (error instanceof RangeError) {
        console.log('RangeError:', error.message)
    }
}

try {
    console.log(repeat('JS', 0))
} catch (error) {
    if (error instanceof TypeError) {
        console.log('TypeError:', error.message);
    } else if (error instanceof RangeError) {
        console.log('RangeError:', error.message)
    }
}

console.log('Конец программы')