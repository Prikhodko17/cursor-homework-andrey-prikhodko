import {calcMaxValue, summaryNum, getMaxDigit, division, getModa, getSubjects, getMyTaxes, Students, generateBlocksInterval, getRandomChinese, getPlanets, createIdGenerator} from "./functions"

import "./styles/style.css"

import "./img/back.jpg"

// HW 1 
console.log(calcMaxValue());
// HW 2
summaryNum()

// HW 3
console.log(getMaxDigit(+prompt("Введіть число для 1 функції")))

// HW 4 

const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"]
const arrBoys = []
const arrGirls = []
division(students, arrBoys, arrGirls)
console.log(arrBoys)
console.log(arrGirls)

// HW 5

console.log(getModa(1,3,4,5,5,6))

// HW 6

const arrStudents = [{
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4]
    }
  }, {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5]
    }
  }, {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5]
    }
  }];

console.log(getSubjects(arrStudents[0]))

// HW 7
const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 }

console.log(getMyTaxes.call(ukraine, 3000))

// HW 8 

const ostap = new Students('Вищої Школи Психотерапії м.Одеса', 'Студент 1го курсу', 'Остап Бендер', [5, 4, 4, 5])

console.log(ostap)

// HW 9

generateBlocksInterval()

// Hw 10 

getRandomChinese(4).then((resolve) => console.log(resolve)).catch(err => {console.log(err);})

// HW 11 

getPlanets ()

// HW 12

const idGenerator = createIdGenerator()

console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);