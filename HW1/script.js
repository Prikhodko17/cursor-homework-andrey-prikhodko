const tomatos = 15.678;
const potatos = 123.965;
const cabbage = 90.2345;

const productsMaxValue = Math.max(tomatos, potatos, cabbage); // Максимальное значение

const productsMinValue = Math.min(tomatos, potatos, cabbage); // Минимальное значение 

const productsSum = tomatos + potatos + cabbage; // Сумма продуктов

const productSumFloor = Math.floor(tomatos) + Math.floor(potatos) + Math.floor(cabbage); // Сумма с округлением

const productSumRound = Math.round(productsSum / 100) * 100; // Окргуление до сотен

const valueBoolean = Math.floor(productsSum) % 2 === 0 ? true : false; // Деленеие на цело на 2 

const residue = 500 - productsSum; // Остаток с оплаты

const averageProductsPrice = Number((productsSum / 3).toFixed(2)); // Среднее с округлением до 2 знаков после ","

const discount = Number(Math.random(0,1).toFixed(2)); // Скидка

const payment = +(productsSum - (productsSum * discount)).toFixed(2); // Оплата с учётом скидки

const profit = payment - (productsSum / 2); // Чистая прибыль

document.write(`Максимальная цена товара: ${productsMaxValue} <br>`);
document.write(`Минимальная цена товара: ${productsMinValue} <br>`);
document.write(`Стоимость всех товаров: ${productsSum} <br>`);
document.write(`Сумма всех продуктов с округленеим к меньшему: ${productSumFloor} <br>`);
document.write(`Сумма всех продуктов с округленеим к сотням: ${productSumRound} <br>`);
document.write(`Делится ли округленная сумма всех товаров нацело на 2: ${valueBoolean} <br>`);
document.write(`Остаток с оплаты 500 грн: ${residue} <br>`);
document.write(`Среднее с округлением до 2 знаков после ",": ${averageProductsPrice} <br>`);
document.write(`Cкидка: ${discount} <br>`);
document.write(`Оплата с учётом скидки: ${payment} <br>`);
document.write(`Чистая прибыль: ${profit}`);

