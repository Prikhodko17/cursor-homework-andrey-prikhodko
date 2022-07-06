async function getRandomChinese(length) {
    let result = ''

    while (length != 0) {
        result += await new Promise(resolve => {
            setTimeout(() => {
                const sign = Date.now().toString().slice(-5)
                char = String.fromCharCode(sign)
                resolve(char)
            }, 50)
        })
        length--
    }
    return result
}


getRandomChinese(4).then((resolve) => console.log(resolve)) 