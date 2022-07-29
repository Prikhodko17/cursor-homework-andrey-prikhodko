'use strict';

// HW 1

export function calcMaxValue () {
    const tomatos = 15.678
    const potatos = 123.965
    const cabbage = 90.2345
    const productsMaxValue = Math.max(tomatos, potatos, cabbage)
    return productsMaxValue
}

// HW 2 

export function summaryNum () {
    let n
    let m
    do {
        n = +prompt("Введіть число від якого ми будемо складати", 1);
        if (n % 1 !== 0)  alert("Введіть ціле число");
    }while (n % 1 !== 0);
        
    
    do {
         m = +prompt("Введіть число до якого ми будемо складати", 2);
        if (m % 1 !== 0)  alert("Введіть ціле число");
    }while (m % 1 !== 0);
        
    const skipPairs = confirm("Пропускать парные числа?");
    
    let summary = 0;
    if (m > n) {
    for (let i = n; i <= m; i++) {
        if (skipPairs && i % 2 == 0) {
            continue;
        }
        summary += i;
    }
    } else {
        for (let i = n; i >= m; i--) {
            if (skipPairs && i % 2 == 0) {
                continue;
            }
            summary += i;
        }
    }
    
    console.log(`Сумма чисел між ${n} і ${m} складає ${summary}`)
}

// HW 3

export function getMaxDigit(number) {
    const numberSplit = number.toString().split('')

    let maxValue = 0

    numberSplit.forEach(function(e) {
        if (e > maxValue) {
            maxValue = e
        }
    })
    return +maxValue
}

// HW 4

export function division (students, boys, girls) {
    students.forEach(function(e) {
        if (e[e.length - 1] === "а") {
            girls.push(e)
       } else {  boys.push(e)}
    }
    )
    }

// HW 5 
export function getModa (...numbers) {
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

// HW 6 
export function getSubjects(student) {
    let arrKeys = Object.keys(student.subjects)
    let arrKeysUpp = []
    let arrFinalEdit = []
    arrKeys.forEach(key => {arrKeysUpp.push(key[0].toUpperCase() + key.slice(1).toLowerCase())})
    for (let key of arrKeysUpp) {
        arrFinalEdit.push(key.replace('_', ' '))
    }
    return arrFinalEdit
  }

// HW 7

export function getMyTaxes(salary) {
    return  salary * this.tax
}

// HW 8 

export class Students {
    constructor(university, course, fullName, marks) {
        this.university = university
        this.course = course
        this.fullName = fullName
        this.marks = marks
        this.dismiss = false
    }

    get getMarks() {
        return this.dismiss ? null : this.marks
    }

    set setMarks(number) {
        if (this.dismiss) {
            return null            
        } else {
            this.marks.push(number)
        }
    }

    getAverageMark() {
       if (this.dismiss) {
        return null            
    } else {return this.marks.reduce((sum, curr) => { 
            return sum + curr / this.marks.length
        }, 0)}
    }
    
    getInfo() {
        return `${this.course} ${this.university} ${this.fullName}`
    }

    dismissed() {
        this.dismiss = true
    }

    recover() {
        this.dismiss = false
    }
}

// HW 9 

export function generateBlocksInterval () {
    function getRandomInt() {
        return Math.floor(Math.random() * 256);
      }
    const block = document.createElement("div");
    block.className = "box";
    document.body.append(block);

    for (let el = 0; el < 25; el++) {
        const elem = document.createElement("div");
        elem.className = "elem";
        block.append(elem);

        setInterval(() => elem.style.background = `rgb(${getRandomInt()}, ${getRandomInt()}, ${getRandomInt()})`, 1000);
    }
}

// HW 10
export async function getRandomChinese(length) {
    let result = ''
  
    while (length != 0) {
        result += await new Promise((resolve, rej) => {
            setTimeout(() => {
                const sign = Date.now().toString().slice(-5)
                let char = String.fromCharCode(sign)
                if (char) {resolve(char)} else {rej('Error with data')}
            }, 50)
        })
        length--
    }
    return result
  }

  // HW 11

  export async function getPlanets () {
    await fetch("https://swapi.dev/api/planets/?page=1")
    .then(
      (response) => response.json())
    .then(
      (res) => {
        let plans = []
        let nextPage = res.next
        let previousPage = res.previous
        res.results.forEach(el => plans.push(el.name))
        document.body.insertAdjacentHTML( 
          "beforeend",
          `<div>
          <p>${plans}</p>
          </div>`
        )
      } )
  }
  
  // HW 12

  export function *createIdGenerator() {
    for (let i = 1; i > 0; i++) {
        yield i
    }
}
  