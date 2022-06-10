/*Створіть функцію getRandomArray(length, min, max) – яка повертає масив випадкових цілих чисел. 
У функції є параметри: length - довжина масиву, min – мінімальне значення цілого числа, max – максимальне значення цілого числа. 
Приклад: getRandomArray(15, 1, 100) –> [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2]*/

function getRandomArray(length, min, max) {
    let arr = []
    if (min > max) {
    return "Мінімальне значення не може бути більше максимального"
} else {

for (let i = 0; i < length;i++) {
    
    arr.push(Math.ceil(Math.random() * (max - min) + 1))
}
}
    return arr
}

console.log(getRandomArray(40,1,40))

console.log(getRandomArray(40,50,40))

/* 
Створіть функцію getModa(...numbers) – яка вираховує моду всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ 
Приклад: getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 2
*/

function getModa (...numbers) {
    const distinctNumbers = new Set (numbers.filter(item => Number.isInteger(item)))
    let max = 0;
    const result = [];
    distinctNumbers.forEach(num => {
        const count = numbers.filter(number => number === num).length
        if (max < count) max = count
        result.push({num, count})
    });
    return result.filter((item) => item.count == max).map(i => i.num).join()
    }

    console.log(getModa(1,3,4,5,5,6))
    
/*
 Створіть функцію getAverage(...numbers) – яка рахує середнє арифметичне всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
Приклад: getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 34.4
*/

function getAverage(...numbers) {
    const intNumbers = numbers.filter(item => Number.isInteger(item))
    const sumArr = intNumbers.reduce((sum, curr) => { 
        return sum + curr
    }, 0)
    return sumArr / intNumbers.length
}

console.log(getAverage(1,5,7,5,4))

/*
Створіть функцію getMedian(...numbers) – яка рахує медіану всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
Приклад: getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 23 
Приклад: getMedian(1, 2, 3, 4) –> 2.5 Приклад: getMedian(1, 2, 3, 4, 5) –> 3
*/

function getMedian(...numbers) {
    const intNumbers = numbers.filter(item => Number.isInteger(item))

    if (intNumbers.length % 2 != 0) {
        console.log(intNumbers[(intNumbers.length - 1)/2]);
    }    else {
        console.log((intNumbers[intNumbers.length / 2 - 1] + intNumbers[intNumbers.length / 2 ])/2);
    }
}

getMedian(1,2,3,4,5)
getMedian(1,2,3,4,5,6,7,8)
/*
Створіть функцію filterEvenNumbers(...numbers) – яка фільтрує парні числа передані як аргументи функції
Приклад: filterEvenNumbers(1, 2, 3, 4, 5, 6) -> [1, 3, 5]
*/

function filterEvenNumbers(...numbers) {
    const evenNumbers = []
    numbers.forEach(num => {
        if (num % 2 === 0)
        evenNumbers.push(num)
    })
    return evenNumbers
}

console.log(filterEvenNumbers(1,2,3,4,5,6))

/*
Створіть функцію countPositiveNumbers(...numbers) – яка порахує кількість чисел більших 0
Приклад: countPositiveNumbers(1, -2, 3, -4, -5, 6) -> 3
*/

function countPositiveNumbers(...numbers) {
    const positiveNumbers = []
    numbers.forEach(num => {
        if (num > 0)
        positiveNumbers.push(num)
    })
    return positiveNumbers.length
}

console.log(countPositiveNumbers(1,2,3,4,-5))

/*
Створіть функцію getDividedByFive(...numbers) – яка відфільтрує усі елементи в масиві та залишить тільки ті, які діляться на ціло на 5
Приклад: getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) -> [55, 55]
*/
function getDividedByFive(...numbers) {
    divideByFive = numbers.filter(num => num % 5 === 0)
    return divideByFive
}

console.log(getDividedByFive(20,15,11,22,30,60));

/*
Створіть функцію replaceBadWords(string) – яка 1) розіб'є фразу на слова, 2) замінить погані слова на зірочки (*). 
При вирішенні цього завдання необхідно розбити масив на слова за допомогою функції .split(" "),
після чого масив необхідно буде склеїти .join(" ") Погані слова: shit та fuck. Передбачте можливість розширювати список цих слів у майбутньому.
*/

