async function getRandomChinese(length) {
    let result = ''

    while (length != 0) {
        result += await new Promise((resolve, rej) => {
            setTimeout(() => {
                const sign = Date.now().toString().slice(-5)
                char = String.fromCharCode(sign)
                if (char) {resolve(char)} else {rej('Error with data')}
            }, 50)
        })
        length--
    }
    return result
}


getRandomChinese(4).then((resolve) => console.log(resolve)).catch(err => {console.log(err);})