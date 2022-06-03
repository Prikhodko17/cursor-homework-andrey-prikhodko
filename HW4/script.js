// Розділіть студентів на пари(хлопець + дівчина) для работи над проєктом. У вас повинен вийти вкладений масив з парами студентів: [["Олександр", "Олена"], [..], [...]];
const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];

const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];

const marks = [4, 5, 5, 3, 4, 5];

const boys = [];

const girls = [];

students.forEach(function(e) {
    if (e[e.length - 1] === "а") {
        girls.push(e)
   } else {  boys.push(e)}
}
)

function makePairs (boysArr, girlsArr) {
    const pairs = []
    for (let i = 0; i < boysArr.length; i++) {
    pairs.push([`${boysArr[i]} i ${girlsArr[i]}`])
    }
    return pairs
}

const pairs = makePairs(boys, girls);

console.log(pairs);

// Зіставте пари з попереднього завдання та теми проєктів, над якими студенти будуть працювати. 
// Повинен вийти вкладений масив виду: [["Олександр і Олена", "Теорія автоматів"], [...], [...]]



function makePairsWithThemes (namePairs, themesTopic) {
    const pairsAndThemes = [];
    for (let i = 0; i < namePairs.length; i++) {
        pairsAndThemes.push([`${namePairs[i]}, ${themesTopic[i]}`])
    }
    return pairsAndThemes
}

console.log(makePairsWithThemes(pairs, themes));