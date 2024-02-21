// 1. Вивести на сторінку в один рядок через кому числа від 10 до 20.

// let num1 = 10;
// let num2 = 21;

// for (let i = num1; i < num2; i++) {
//     if (i == num2 - 1){
//         document.write(i)
//     }else {
//      document.write (i + ",");
//     }
// }

// 2. Вивести квадрати чисел від 10 до 20.
// Question: (how to add an "\n" ??)!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// let num1 = 10;
// let num2 = 21;

// for (let i = num1; i < num2; i++) {
//     if (i == num2 - 1){
//         document.write(i ** 2)
//     }else {
//      document.write (i ** 2 + ",");
//     }
// }

// 3. Вивести таблицю множення на 7.

// let num1 = 1;
// let num2 = 10;

// for (let i = num1; i < num2; i++) {
//     document.write (i * 7 + ",");
// }

// 4. Знайти суму всіх цілих чисел від 1 до 15.
// let i = 0;
// let sum = 0;

// while(true) {
//     i++
//     if (i > 15)
//     break;
//     sum += i;
// }
// document.write(sum);

// 5. Знайти добуток усіх цілих чисел від 15 до 35.  (1.1852891154611371e+29)

// let num1 = 1;
// let num2 = 5; 
// let sum = 1; 

// for (let i = num1; i <= num2; i++) {
//     sum *= i;
// }
// document.write(sum);

// 6. Знайти середнє арифметичне всіх цілих чисел від 1 до 500.

// let num1 = 1;
// let num2 = 500; 
// let sum = 0; 

// for (let i = num1; i <= num2; i++) {
//     sum += i;
// }

// let result = (sum / 500)
// document.write(result);

// 7. Вивести суму лише парних чисел в діапазоні від 30 до 80.

// let num1 = 30;
// let num2 = 80; 
// let sum = 0; 

// for (let i = num1; i <= num2; i++) {
//     if (i % 2 == 0) {
//     sum += i;
//     }
// }
// document.write(sum);

// 8. Вивести всі числа в діапазоні від 100 до 200 кратні 3

// let num1 = 100;
// let num2 = 200; 

// for (let i = num1; i <= num2; i++) {
//     if(i % 3 == 0) {
//         document.write(`${i} &nbsp;`);
//     };
// };

// 9.Дано натуральне число. Знайти та вивести на сторінку всі його дільники..

// let n = 12;

// for (let i = 1; i <= 12; i++) {
//     if (n % i == 0) {
//         document.write(`${i} &nbsp;`);
//     }
// }
// 10. Визначити кількість його парних дільників.

// let n = 12;

// for (let i = 1; i <= 12; i++) {
//     if (n % i == 0) {
//         if (i % 2 == 0) {
//             document.write(`${i} &nbsp;`);
//         }
//     }
// }

// 11. Знайти суму його парних дільників.

// let n = 12;
// let sum = 0;

// for (let i = 1; i <= 12; i++) {
//     if (n % i == 0) {
//         if (i % 2 == 0) {
//             sum += i;
//         }
//     }
// }
// document.write(`${sum} &nbsp;`)

// 12. Надрукувати повну таблицю множення від 1 до 10.

// let a = 10; 

// for (let i = 1; i <= 10; i++) {
//     for (let j = 1; j <= 10; j++ ) {
//         document.write(` i * j = ${i} * ${j} = ${ i * j}`);
//     }
//     document.write("<br>")
// }

// 13. Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….)

// for (let i = 20; i <= 30; i += .5)
// console.log(i)

// 14. Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.

// for (let i = 10; i <= 100; i += 10)
// console.log(i*27 + ' ' + 'грн')

// 15. Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.

// let N = +prompt("Write a Number");
// for (let i = 1; i <=100; i++) {
// if (i**2 < N) console.log(i)
// }

// 16. Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).
// let n = +prompt("Write a Number");
// let isPrime = true;

// if (n === 1) {
//     console.log(1 + " " + 'is not a prime number lol');
// }

// else if (n > 1) {
//     for (let i = 2; i < n; i++) {
//         if (n % i == 0) {
//             isPrime = false;
//             break;
//         }
//     }
//     if (isPrime) {
//         console.log(`${n} is a prime number`);
//     } else {
//         console.log(`${n} is not a prime number`);
//     }
// }

// else {
//     console.log('The entered number is not a prime number');
// }

// 17.Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).

// let n = +prompt("Write a Number");
// let isNumber = false 

// for (let i = 1; i <= n; i ++) {
//     if (3**i == n) {
//         isNumber = true
//     } 
// }
//     if(isNumber) {
//         console.log('The Number can be obtained by raising' + " " + 3 + " " + 'in Degree');
//     } else {
//         console.log('The Number can not be obtained by raising' + " " + 3 + " " + 'in Degree');
//     }

