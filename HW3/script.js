// Створити функцію getMaxDigit(number) – яка отримує будь-яке число та виводить найбільшу цифру в цьому числі. Приклади: 1236 -> 6, 987 -> 9, 385 -> 8

function getMaxDigit(number) { 
    let numberSplit = number.toString().split('');
    
    let maxValue = 0;

    numberSplit.forEach(function(e) {
        if (e > maxValue) {
            maxValue = e}
        }
    )
    return maxValue
} 
console.log(getMaxDigit(+prompt("Введіть число для 1 функції")))

// Створити функцію, яка визначає ступінь числа. Не використовуючи Math.pow та **. Використовуйте цикл


function exalt (number, elevate) {
    if (elevate === 0) {
        result = 1 
        return result
    } else {

    let result = number
    for (let i = 0; i < elevate - 1; i++) {
        result = result * number
            }
            return result
        }
    }


console.log(exalt(+prompt("Введіть число для 1 функції"),+prompt("Введіть число для 1 функції")))

//Створити функцію, яка форматує ім'я, роблячи першу букву великою. ("влад" -> "Влад", "вЛАД" -> "Влад" і так далі);

function editName (name) {
   let result = name[0].toUpperCase() + name.slice(1).toLowerCase();
   return result;
}

console.log(editName("vlad"))

// Створити функцію, яка вираховує суму, що залишається після оплати податку від зарабітньої плати. (Податок = 18% + 1.5% -> 19.5%). Приклад: 1000 -> 805

function tax (salary) {
    let taxes = 0.195
    result = salary * (1 - taxes);
    return result
}

console.log(tax(1000));

// Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M. Приклад: getRandomNumber(1, 10) -> 5

function getRandom(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }

console.log(getRandom(5,10));