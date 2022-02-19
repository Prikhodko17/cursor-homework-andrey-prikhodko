do {
    n = +prompt("Введіть число від якого ми будемо складати", 1);
}while (n % 1 !== 0);
    

do {
    m = +prompt("Введіть число до якого ми будемо складати", 2);
}while (m < n || m % 1 !== 0);
    
const skipPairs = confirm("Пропускать парные числа?");

let summary = 0;

for (let i = n; i <= m; i++) {
    if (skipPairs && i % 2 == 0) {
        continue;
    }
    summary += i;
}

alert(`Сумма чисел між ${n} і ${m} складає ${summary}`)