// Уровень 3.1 задачника JavaScript

// 1

// function find(number) {
//     let strNumber = number.toString();
//     for (let i = 1; i < strNumber.length; i++) {
//         if (parseInt(strNumber[i]) < parseInt(strNumber[i - 1])) {
//             return false;
//         }
//     }
//     return true;
// }

// let number = 12345;
// console.log(find(number));

// 2

// let arr = [1, '', 2, 3, '', 5]

// for (let i = 0; i <= arr.length; i++) {
//     if (arr[i] == '') {
//         arr.splice(i, 1);
//     }
// }
// console.log(arr)

// 3
// let arr_res = []
// let arr = [
// 	[2, 1, 4, 3, 5],
// 	[3, 5, 2, 4, 1],
// 	[4, 3, 1, 5, 2],
// ]

// for (let i = 0; i < arr.length; i++){
//     arr_res.push(arr[i].sort());
// }

// console.log(arr_res);

// 4 

// let arr1 = [1, 2, 3];
// let arr2 = [1, 2, 3, 4, 5];

// arr2.splice(3)

// console.log(arr1, arr2)

// Уровень 3.2 задачника JavaScript

// 1


// for (let number = 10; number <= 1000; number++) {
//     let secondLastDigit = Math.floor(number / 10) % 10;
//     if (secondLastDigit % 2 === 0) {
//         console.log(number);
//     }
// }


// 2

// arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

// for (let i = arr.length - 1; i >= 0; i--) {
//     if ((i + 1) % 5 === 0) {
//         arr.splice(i, 1);
//     }
// }

// console.log(arr);

// 3

// let num = 5;
// let str = ''

// for (let i = 0; i < num; i++) {
//     str += '0'
// }

// console.log(str)

// 4

// let str = 'aaa bbb ccc eee fff'

// let words = str.split(' ');
// let res = [];

// for (let i = 0; i < words.length; i++) {
//     if (i % 2 === 0) {
//         res.push(words[i]);
//     }
// }

// let newStr = res.join(' '); 

// console.log(newStr); 

// 5

// let arr = [
// 	[1, 2, 3],
// 	[4, 5, 6],
// 	[7, 8, 9],
// ]

// let i;
// let j;
// let res = 0;

// for (i = 0; i < arr.length; i++){
//     for (j = 0; j < arr[i].length; j++){
//         res += arr[i][j]
//         console.log(arr[i])
//         console.log(arr[i][j])
//     }
// }

// console.log(res)

// Уровень 3.3 задачника JavaScript

// 1

// let arr = ['hello', 'word', 'world', '!d']

// for (let i = arr.length - 1; i >= 0; i--) {
//     if (arr[i].length > 3) {
//         arr.splice(i, 1);
//     }
// }

// console.log(arr); 

// 2

// let number = 1357;
// let res = true;

// while (number > 0) {
//     let digit = number % 10;
//     if (digit % 2 === 0) {
//         res = false;
//         break;
//     }
//     number = Math.floor(number / 10);
// }

// console.log(res); 

// 3 

// let string = 'abcba';
// let palindrome = true;

// for (let i = 0; i < string.length / 2; i++) {
//     if (string[i] !== string[string.length - 1 - i]) {
//         palindrome = false;
//         break;
//     }
// }

// console.log(palindrome);

// 4

// let arr = [
//     [
//         [11, 12, 13],
//         [14, 15, 16],
//         [17, 17, 19]
//     ],
//     [
//         [21, 22, 23],
//         [24, 25, 26],
//         [27, 27, 29]
//     ],
//     [
//         [31, 32, 33],
//         [34, 35, 36],
//         [37, 37, 39]
//     ]
// ];

// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//         for (let k = 0; k < arr[i][j].length; k++) {
//             sum += arr[i][j][k];
//         }
//     }
// }

// console.log(sum);

// Уровень 3.4 задачника JavaScript

// 1

// for (let number = 10; number <= 1000; number++) {
//     if (number % 2 === 0) {
//         console.log(number);
//     }
// }

// 2

// let array = [1, 2, 3, 4, 5, 6];

// for (let i = 0; i < array.length - 1; i += 2) {
//     let temp = array[i];
//     array[i] = array[i + 1];
//     array[i + 1] = temp;
// }

// console.log(array);

// 3

// let obj = {
//     1: {
//         1: 11,
//         2: 12,
//         3: 13,
//     },
//     2: {
//         1: 21,
//         2: 22,
//         3: 23,
//     },
//     3: {
//         1: 24,
//         2: 25,
//         3: 26,
//     },
// };

// let sum = 0;

// for (let key1 in obj) {
//     for (let key2 in obj[key1]) {
//         sum += obj[key1][key2];
//     }
// }

// console.log(sum); 

// Уровень 3.5 задачника JavaScript

// 1

// let text = 'apple banana apricot orange apple';

// let words = text.split(' ');
// let res = [];

// for (let i = 0; i < words.length; i++) {
//     if (words[i][0] === 'a' || words[i][0] === 'A') {
//         res.push(words[i]);
//     }
// }

// console.log(res); 


// 2

// let numbers = [15, 23, 45, 30, 32, 40];

// let res = numbers.filter(function (number) {
//     return number % 5 === 0;
// });

// console.log(res);

// 3

// let numbers = [102, 305, 407, 512, 619, 720];

// let res = numbers.filter(function (number) {
//     return number.toString().includes('0');
// });

// console.log(res); 

// 4

// let numbers = [12, 35, 47, 82, 96];

// let res = numbers.some(function (number) {
//     return number.toString().includes('3');
// });

// console.log(res);

// 5

// let number = 35142;

// let res = number.toString().split('').sort().join('');

// console.log(res);

// 6

// let result = '-';
// for (let i = 1; i <= 5; i++) {
//     result += i + '-';
// }

// console.log(result);

// 7

// let obj = {
//     1: {
//         1: {
//             1: 111,
//             2: 112,
//             3: 113,
//         },
//         2: {
//             1: 121,
//             2: 122,
//             3: 123,
//         },
//     },
//     2: {
//         1: {
//             1: 211,
//             2: 212,
//             3: 213,
//         },
//         2: {
//             1: 221,
//             2: 222,
//             3: 223,
//         },
//     },
//     3: {
//         1: {
//             1: 311,
//             2: 312,
//             3: 313,
//         },
//         2: {
//             1: 321,
//             2: 322,
//             3: 323,
//         },
//     },
// };

// let sum = 0;

// for (let key1 in obj) {
//     for (let key2 in obj[key1]) {
//         for (let key3 in obj[key1][key2]) {
//             sum += obj[key1][key2][key3];
//         }
//     }
// }

// console.log(sum);

// Уровень 3.6 задачника JavaScript

// 1

// let numbers = [123, 45, 6789, 9876, 321, 13];

// let res = numbers.filter(function (number) {
//     return number < 1000;
// });

// console.log(res); 

// 2

// let num = 12345;
// let numStr = num.toString();
// let res = true;

// for (let i = 0; i < numStr.length; i++) {
//     if (parseInt(numStr[i]) <= 0) {
//         res = false;
//         break;
//     }
// }

// console.log(res);

// 3

// let data = [123, 456, 789];

// let merge = data.reduce((accumulator, currentValue) => {
//     return accumulator.concat(currentValue.toString().split('').map(Number));
// }, []);

// console.log(merge);

// 4

// let data = [
//     {
//         1: 11,
//         2: 12,
//         3: 13,
//     },
//     {
//         1: 21,
//         2: 22,
//         3: 23,
//     },
//     {
//         1: 24,
//         2: 25,
//         3: 26,
//     },
// ];

// let sum = data.reduce((accumulator, currentValue) => {
//     for (let key in currentValue) {
//         accumulator += currentValue[key];
//     }
//     return accumulator;
// }, 0);

// console.log(sum);

// Уровень 3.7 задачника JavaScript

// 1

// let str = 'banana apple cherry datebase';

// let res = str.split(' ').sort().join(' ');

// console.log(res);


// 2

// function getDivisors(number) {
//     let divisors = [];
//     for (let i = 1; i <= number; i++) {
//         if (number % i === 0) {
//             divisors.push(i);
//         }
//     }
//     return divisors;
// }

// let number = 12;
// let res = getDivisors(number);

// console.log(res);

// 3

// function getDivisors(number1, number2) {
//     let Divisors = [];
//     for (let i = 1; i <= Math.min(number1, number2); i++) {
//         if (number1 % i === 0 && number2 % i === 0) {
//             Divisors.push(i);
//         }
//     }
//     return Divisors;
// }

// let number1 = 12;
// let number2 = 18;
// let res = getDivisors(number1, number2);

// console.log(res);

// 4

// function divisor(number) {
//     if (number <= 1) {
//         return false;
//     }
//     for (let i = 2; i <= Math.sqrt(number); i++) {
//         if (number % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }

// let number = 13;
// let res = divisor(number);

// console.log(res);

// 5

// let numbersStr = '5, 10, 2, 8, 7';

// let numbersArray = numbersStr.split(',').map(Number);
// let res = Math.max(...numbersArray);

// console.log(res);

// 6

// let numbers = [1, 2, 34, 5, 6, 7];

// for (let i = numbers.length - 1; i >= 0; i--) {
//     if (numbers[i] < 10) {
//         numbers.splice(i + 1, 0, numbers[i]);
//     }
// }

// console.log(numbers);

// 7
// let str = "Hello World";
// function remove(str) {
//     return str.replace(/[aeiouAEIOU]/g, '');
// }


// console.log(remove(str));

// 8

// function upper(str) {
//     return str.replace(/\b\w\b/g, match => match.toUpperCase());
// }

// let str = "hello world";

// console.log(upper(str));

// 9

// let data = [
//     {
//         1: [1, 2, 3],
//         2: [1, 2, 3],
//         3: [1, 2, 3],
//     },
//     {
//         1: [1, 2, 3],
//         2: [1, 2, 3],
//         3: [1, 2, 3],
//     },
//     {
//         1: [1, 2, 3],
//         2: [1, 2, 3],
//         3: [1, 2, 3],
//     },
// ];

// let sum = 0;

// for (let i = 0; i < data.length; i++) {
//     let obj = data[i];
//     for (let key in obj) {
//         if (Array.isArray(obj[key])) {
//             let arr = obj[key];
//             for (let j = 0; j < arr.length; j++) {
//                 sum += arr[j];
//             }
//         }
//     }
// }

// console.log(sum); 

// Уровень 3.8 задачника JavaScript

// 1

// let numbers = [123, 456, 789];
// console.log(numbers.every(number => /3/.test(number.toString())));


// 2

// let kebabString = 'kebab-case';
// console.log(kebabString.replace(/-/g, '_'));

// 3

// let snakeString = 'snake_case';
// console.log(snakeString.replace(/_([a-z])/g, (match, letter) => letter.toUpperCase()));


// 4

// let camelString = 'camelCase';
// console.log(camelString.replace(/[A-Z]/g, match => `_${match.toLowerCase()}`));

// 5

// let arr = [];

// for (let i = 0; i < 5; i++) {
//     let innerArr = [];
//     for (let j = 1; j <= 3; j++) {
//         innerArr.push(j);
//     }
//     arr.push(innerArr);
// }

// console.log(arr);

// Уровень 3.9 задачника JavaScript

// 1

// function only_digit(str) {
//     for (let i = 0; i < str.length; i++) {
//         if (isNaN(parseInt(str[i]))) {
//             return false;
//         }
//     }
//     return true;
// }

// let str = "12345";
// console.log(only_digit(str));

// 2

// function only_digit_even(str) {
//     for (let i = 0; i < str.length; i++) {
//         let digit = parseInt(str[i]);
//         if (isNaN(digit) || digit % 2 !== 0) {
//             return false;
//         }
//     }
//     return true;
// }

// let str = "2468";
// console.log(only_digit_even(str));

// 3

// function delete_nums(numbers) {
//     let filteredNumbers = [];
//     for (let i = 0; i < numbers.length; i++) {
//         let strNumber = numbers[i].toString();
//         let zeroCount = 0;
//         for (let j = 0; j < strNumber.length; j++) {
//             if (strNumber[j] === '0') {
//                 zeroCount++;
//             }
//         }
//         if (zeroCount <= 1) {
//             filteredNumbers.push(numbers[i]);
//         }
//     }
//     return filteredNumbers;
// }

// let numbers = [102, 200, 303, 4004, 5005];
// console.log(delete_nums(numbers));

// 4

// function find_digits() {
//     let result = [];
//     for (let number = 1; number <= 1000; number++) {
//         let strNumber = number.toString();
//         let digitSum = 0;
//         for (let i = 0; i < strNumber.length; i++) {
//             digitSum += parseInt(strNumber[i]);
//         }
//         if (digitSum === 13) {
//             result.push(number);
//         }
//     }
//     return result;
// }

// console.log(find_digits());

// 5

// function generate_array() {
//     let resultArray = [];
//     for (let i = 1; i <= 3; i++) {
//         let innerArray = [];
//         for (let j = 1; j <= 3; j++) {
//             innerArray.push((i - 1) * 3 + j);
//         }
//         resultArray.push(innerArray);
//     }
//     return resultArray;
// }

// console.log(generate_array());

// Уровень 3.10 задачника JavaScript

// 1
// function dublicate(arr) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         result.push(arr[i], arr[i]);
//     }
//     return result;
// }

// let originalArray = [1, 2, 3, 4];
// console.log(dublicate);

// 2

// function divisible_numbers(arr, divisor) {
//     return arr.filter(number => number % divisor === 0);
// }

// const arr2 = [1, 2, 3, 4, 5, 6];
// const divisor2 = 3;

// console.log(divisible_numbers(arr2, divisor2));

// 3

// function get_arr_digits(number1, number2) {
//     const strNumber1 = number1.toString();
//     const strNumber2 = number2.toString();
//     const commonDigits = [...strNumber1].filter(digit => strNumber2.includes(digit));
//     return commonDigits.map(digit => parseInt(digit));
// }

// let number_1 = 12345;
// let number_2 = 56789;

// console.log(get_arr_digits(number_1, number_2));

// 4

// function find_3_positions(number) {
//     let strNumber = number.toString();
//     let positions = [];
//     for (let i = 1; i < strNumber.length - 1; i++) {
//         if (strNumber[i] === '3') {
//             positions.push(i);
//         }
//     }
//     return positions;
// }

// let num = 1343543;
// console.log(find_3_positions(num));

// 5

// function none_unique_filter(arr) {
//     return arr.filter(number => {
//         let strNumber = number.toString();
//         let uniqueDigits = new Set(strNumber);
//         return uniqueDigits.size === strNumber.length;
//     });
// }

// let numbers = [123, 444, 789, 555];
// console.log(none_unique_filter(numbers));

// 6

// let arr = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// function one_dimensional_array(arr) {
//     return arr.reduce((result, innerArray) => result.concat(innerArray), []);
// }

// console.log(one_dimensional_array(arr));
