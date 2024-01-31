// 1.1
// let number = 5;

// if (number < 0) {
//     console.log('Число отрицательное');
// } else if (number > 0) {
//     console.log('Число положительное');
// } else {
//     console.log('Число равно нулю');
// }

// 1.2

// let str = 'string'

// console.log(str.length)

// 1.3
// let string = 'string'

// console.log(string[5])

// 1.4

// let num = 10

// if (num % 2 == 0){
//     console.log('Четное')
// } else if (num % 2 != 0){
//     console.log('Не четное')
// };

// 1.5
// let word1 = "первое";
// let word2 = "второе";

// if (word1[0] === word2[0]) {
//     console.log('Первые буквы совпадают');
// } else {
//     console.log('Первые буквы не совпадают');
// }

// 1.6 
// let word = "примерь";

// if (word.endsWith("ь")) {
//     let last2 = word.charAt(word.length - 2);
//     console.log('Предпоследняя буква:', last2);
// } else {
//     let last = word.charAt(word.length - 1);
//     console.log('Последняя буква:', last);
// }

// 1.7

// let number = 12345;
// let firstDigit = Number(number.toString()[0]);
// console.log('Первая цифра числа:', firstDigit);

// 1.8 Дано число. Выведите в консоль последнюю цифру этого числа.

// let number = 12345;
// let lastDigit = Number(number.toString().slice(-1));
// console.log('Последняя цифра числа:', lastDigit);

// 1.9 Дано число. Выведите в консоль сумму первой и последней цифры этого числа.

// let number = 12345;
// let firstDigit = Number(number.toString()[0]);
// let lastDigit = Number(number.toString().slice(-1));
// let sum = firstDigit + lastDigit;
// console.log('Сумма первой и последней цифры числа:', sum);


// 1.10 Дано число. Выведите количество цифр в этом числе.

// let number = 12345;
// let result = number.toString().length;
// console.log('Количество цифр в числе:', result);

// 1.11 Даны два числа. Проверьте, что первые цифры этих чисел совпадают.

// let number1 = 12345;
// let number2 = 15678;
// let firstDigit1 = Number(number1.toString()[0]);
// let firstDigit2 = Number(number2.toString()[0]);

// if (firstDigit1 === firstDigit2) {
//     console.log('Первые цифры совпадают');
// } else {
//     console.log('Первые цифры не совпадают');
// }

// 1.12 Дана строка. Если в этой строке более одного символа, выведите в консоль предпоследний символ этой строки.
// let str = "example";

// if (str.length > 1) {
//     let last2 = str.charAt(str.length - 2);
//     console.log('Предпоследний символ строки:', last2);
// } else {
//     console.log('В строке меньше или равно одного символа.');
// }

// 1.13 Даны два целых числа. Проверьте, что первое число без остатка делится на второе.

// let num1 = 10;
// let num2 = 2;

// if (num1 % num2 === 0) {
//     console.log('Первое число делится на второе без остатка.');
// } else {
//     console.log('Первое число не делится на второе без остатка.');
// }

// 1.14 Выведите в консоль все целые числа от 1 до 100.

// for (let i = 1;i < 101; i++){
//     console.log(i)
// };

// 1.15 Выведите в консоль все целые числа от -100 до 0.

// for (let i = -100;i < 1; i++){
//     console.log(i)
// };

// 1.16 Выведите в консоль все целые числа от 100 до 1.
// for (let i = 100; i >= 1; i--) {
//     console.log(i);
// }

// 1.17  Выведите в консоль все четные числа из промежутка от 1 до 100.
// for (let i = 2; i <= 100; i += 2) {
//     console.log(i);
// }

// 1.18

// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0) {
//         console.log(i);
//     }
// }

// 1.19 Найдите сумму всех целых чисел от 1 до 100.

// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//     sum += i;
// }
// console.log('Сумма всех целых чисел от 1 до 100:', sum);

// 1.20 Найдите сумму всех целых нечетных чисел в промежутке от 1 до 100.

// let sum = 0;
// for (let i = 2; i <= 100; i += 2) {
//     sum += i;
// }
// console.log('Сумма всех целых четных чисел от 1 до 100:', sum);

// 1.21  Найдите сумму всех целых нечетных чисел в промежутке от 1 до 100.

// let sum = 0;

// for (let i = 1; i <= 100; i++) {
//     if (i % 2 !== 0) {
//         sum += i;
//     }
// }

// console.log('Сумма всех целых нечетных чисел от 1 до 100:', sum);

// 1.22 Даны два целых числа. Найдите остаток от деления первого числа на второе.

// let num1 = 10;
// let num2 = 3;
// let result = num1 % num2;
// console.log('Остаток от деления', num1, 'на', num2, 'равен', result);

// 1.23 Дана некоторая строка. Переберите и выведите в консоль по очереди все символы с конца строки.

// let str = "Строка";
// for (let i = str.length - 1; i >= 0; i--) {
//     console.log(str[i]);
// }

// 1.24  Дан массив с числами. Найдите сумму квадратов элементов этого массива.

// let numbers = [1, 2, 3, 4, 5];
// let result = 0;

// for (let number of numbers) {
//     result += number ** 2;
// }

// console.log('Сумма квадратов элементов массива:', result);

// 1.25 Дан массив с числами. Найдите сумму квадратных корней элементов этого массива.

// let numbers = [1, 4, 9, 16, 25];
// let result = 0;

// for (let number of numbers) {
//     result += Math.sqrt(number);
// }

// console.log('Сумма квадратных корней элементов массива:', result);

// 1.26 Дан массив с числами. Найдите сумму положительных элементов этого массива.
// let numbers = [-1, 2, -3, 4, -5];
// let result = 0;

// for (let number of numbers) {
//     if (number > 0) {
//         result += number;
//     }
// }

// console.log('Сумма положительных элементов массива:', result);

// 1.27 Дан массив с числами. Найдите сумму тех элементов этого массива, которые больше нуля и меньше десяти.

// let numbers = [2, 5, 12, 7, 8, 1];
// let result = 0;

// for (let number of numbers) {
//     if (number > 0 && number < 10) {
//         result += number;
//     }
// }

// console.log('Сумма элементов массива в диапазоне (0, 10):', result);

// 1.28 Получите массив букв этой строки.

// let str = 'abcde';
// let result = str.split(''); 
// console.log('Массив букв:', result);

// 1.29 Дано некоторое число: Получите массив цифр этого числа.

// let number = 12345;
// let result = Array.from(String(number), Number);
// console.log('Массив цифр:', result);

// 1.30

// let number = 12345;
// let reversedNumber = parseInt(number.toString().split('').reverse().join(''));
// console.log('Перевернутое число:', reversedNumber);

// 1.31
// let number = 12345;
// let sumOfDigits = 0;

// while (number > 0) {
//     sumOfDigits += number % 10;
//     number = Math.floor(number / 10);
// }

// console.log('Сумма цифр числа:', sumOfDigits);

// 1.32

// let array = [];
// for (let i = 1; i <= 10; i++) {
//     array.push(i);
// }
// console.log('Массив целых чисел от 1 до 10:', array);

// 1.33

// let array = [];
// for (let i = 2; i <= 100; i += 2) {
//     array.push(i);
// }
// console.log('Массив четных чисел от 1 до 100:', array);

// 1.34

// let nums = [1.456, 2.125, 3.32, 4.1, 5.34];

// let result = nums.map(num => Math.round(num * 10) / 10);
// console.log('Округленные дроби до одного знака:', result);

// 1.35

// let strings = ["http://example.com", "https://google.com", "ftp://ftp.com", "http://test.com"];
// let filteredStrings = strings.filter(str => str.startsWith("http://"));
// console.log('Строки, начинающиеся на http://:', filteredStrings);

// 1.36

// let strings = ["index.html", "page.htm", "document.html", "image.jpg"];
// let filteredStrings = strings.filter(str => str.endsWith(".html"));
// console.log('Строки, заканчивающиеся на .html:', filteredStrings);

// 1.37

// let numbers = [10, 20, 30, 40, 50];
// let increasedNumbers = numbers.map(num => num * 1.1);
// console.log('Числа, увеличенные на 10%:', increasedNumbers);

// 1.38

// let array = [];
// for (let i = 0; i < 10; i++) {
//     let randomNumber = Math.floor(Math.random() * 100) + 1; // Генерируем случайное число от 1 до 100
//     array.push(randomNumber);
// }
// console.log('Массив случайных чисел:', array);

// 1.39

// let number = 12345;
// let strNumber = number.toString();
// for (let i = strNumber.length - 1; i >= 0; i--) {
//     console.log(strNumber[i]);
// }

// 1.40

// let array = [1, 2, 3, 4, 5, 6];
// for (let i = 0; i < array.length; i += 2) {
//     let subArray = array.slice(i, i + 2);
//     console.log(subArray);
// }

// 1.41

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];

// let mergedArray = arr1.concat(arr2);
// console.log('Объединенный массив:', mergedArray);