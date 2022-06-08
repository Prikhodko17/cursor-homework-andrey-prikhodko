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
