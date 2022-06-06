// Створити функцію getMaxDigit(number) – яка отримує будь-яке число та виводить найбільшу цифру в цьому числі. Приклади: 1236 -> 6, 987 -> 9, 385 -> 8

function getMaxDigit(number) {
    const numberSplit = number.toString().split('')

    let maxValue = 0

    numberSplit.forEach(function(e) {
        if (e > maxValue) {
            maxValue = e
        }
    })
    return +maxValue
}

console.log(getMaxDigit(+prompt("Введіть число для 1 функції")))

// Створити функцію, яка визначає ступінь числа. Не використовуючи Math.pow та **. Використовуйте цикл


function exalt(number, elevate) {
    if (elevate === 0) {
        result = 1
        return result
    } else if (elevate < 0) {
        number = Math.abs(number)
        let result = 1/number
        result = result * 1/number
        for (let i = 0; i < elevate - 1; i++) {
            result = result * 1/number
        }
        return result
    } else {
        let result = number
        for (let i = 0; i < elevate - 1; i++) {
            result = result * number
        }
        return result
    }
}

console.log(exalt(+prompt("Введіть число"), +prompt("Введіть степінь")))

// Створити функцію, яка форматує ім'я, роблячи першу букву великою. ("влад" -> "Влад", "вЛАД" -> "Влад" і так далі)

function editName(name) {
    const result = name[0].toUpperCase() + name.slice(1).toLowerCase()
    return result
}

console.log(editName("vlad"))

// Створити функцію, яка вираховує суму, що залишається після оплати податку від зарабітньої плати. (Податок = 18% + 1.5% -> 19.5%). Приклад: 1000 -> 805

function tax(salary) {
    const taxes = 0.195
    result = salary * (1 - taxes)
    return result.toFixed(2)
}

console.log(tax(1000))

// Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M. Приклад: getRandomNumber(1, 10) -> 5

function getRandom(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}

console.log(getRandom(5, 10))

// Створити функцію, яка рахує скільки разів певна буква повторюється в слові. Приклад: countLetter("а", "Асталавіста") -> 4

function countLetter(letter, word) {
    let counter = 0
    for (let i = 0; i < word.length; i++) {
        if (word[i].toLowerCase() === letter.toLowerCase()) counter++
    }
    return counter
}

console.log(countLetter("a", "Ababab"))

// Створіть функцію, яка конвертує долари в гривні та навпаки в залежності від наявності символа $ або UAH в рядку. 
// Приклад: convertCurrency("100$") -> 2500 грн. або convertCurrency("2500UAH") -> 100$

function convertCurrency(data) {
    const exchRate = 33
    let message
    value = data.toLowerCase()
    if (
        isNaN(parseInt(value)) || 
        value
          .replace(`${parseInt(value)}`, "")
          .replace("$", "")
          .replace("uah","").length > 0
    ) { console.log("Введіть коректне значення")
  }else if (value.includes("$")) {
      message = `${parseInt(value)}$ = ${(parseInt(value) * exchRate).toFixed(2)}UAH`
  } else if (value.includes("uah")) {
      message = `${parseInt(value)}UAH = ${(parseInt(value) / exchRate).toFixed(
        2
      )}$`
  } else {
      console.log("Введіть коректну валюту")
  }
  return message
}

console.log(convertCurrency("2500 UAH"))

// Створіть функцію генерації випадкового паролю (тільки числа), довжина встановлюється користувачем або по замовчуванню = 8 символам.

function getRandomPassword(length = 8) {
    let result = ''
    for (let i = 0; i < length; i++) {
        result += Math.floor(Math.random() * 10)
    }
    return result
}

console.log(+getRandomPassword(5))

// Створіть функцію, яка видаляє всі букви з речення. Приклад: deleteLetters('a', "blablabla") -> "blblbl"

const deleteLetters = (letter, text) => text.toLowerCase().split('').filter(item => item !== letter.toLowerCase()).join('')

console.log(deleteLetters('a', "blablabla"))

// 10)Створіть функцію, яка перевіряє, чи є слово паліндромом. Приклад: isPalyndrom("мадам") -> true, isPalyndrom("кокос") -> false, isPalyndrom("Я несу гусеня") -> true

function isPalindrome(word) {
    const removeChar = word.replace(/[^A-Z0-9А-Я]/ig, "").toLowerCase();
    const checkPalindrome = removeChar.split('').reverse().join('');
    return (removeChar === checkPalindrome) ? 'Polindrome - true' : 'is a not Polindrome - false'
}

console.log(isPalindrome("мадам"));

// 11) Створіть функцію, яка видалить з речення букви, які зустрічаються більше 1 разу. Приклад: deleteDuplicateLetter("Бісквіт був дуже ніжним") -> "сктдеим"

const deleteDuplicateLetter = (text) => {
    let str = text.toLowerCase();
    for (let i = 0; i < str.length; i++) {
        if (i != str.lastIndexOf(str[i])) {
            str = str.split(str[i]).join('');
            i--;
        }
    }
    return str;
}

console.log(deleteDuplicateLetter("Бісквіт був дуже ніжним"));