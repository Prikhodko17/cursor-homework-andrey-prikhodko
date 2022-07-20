function *createIdGenerator() {
    for (let i = 1; i > 0; i++) {
        yield i
    }
}

const idGenerator = createIdGenerator()

console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);

function* newFontGenerator(size) {
    while (typeof size === 'number' && size >= 0) {
        let force = yield size
        if (force === 'up') {
            size += 2
        } else if (force === 'down') {
            const result = size - 2
            size = result < 0 ? size : result
        }
    }
}

const fontGenerator = newFontGenerator(14)

console.log(fontGenerator.next("up").value);
console.log(fontGenerator.next("up").value);
console.log(fontGenerator.next("up").value);
console.log(fontGenerator.next("up").value);
console.log(fontGenerator.next("down").value);
console.log(fontGenerator.next("down").value);
console.log(fontGenerator.next("down").value);
console.log(fontGenerator.next("down").value);
