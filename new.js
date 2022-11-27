/////////////////////////////////////////////////////////////////////////////////////////////////////////// 
// function array (mass) {
//     mass.forEach((element, index) => {
//         Number(element) && mass.splice(index, 1, "?");
//     });
// }

// const mass = ['1', 's', '4', 'g', 'g'];
// array (mass);
// console.log(mass);

///////////////////////////////////////////////////////////////////////////////////////////////////////////

// function split (firstStr, secondStr) {
//     const the = [];
//     firstStr.split('').forEach(element => {
//         secondStr.split('').includes(element) && the.push(element);
//     });
//     return the;
// }

// console.log(split('qwerty', 'wersdfgh'));

///////////////////////////////////////////////////////////////////////////////////////////////////////////

// class Car {
//     // Change code below this line
//     #price;

//     static MAX_PRICE = 50000;

//     constructor({ price }) {
//       this.#price = price;
//     }

//     get price() {
//       return this.#price;
//     }

//     set price(newPrice) {
//         Car.MAX_PRICE >= newPrice 
//             ? this.#price = newPrice 
//             : console.log('pam')
//     }
//     // Change code above this line
//   }

//   const audi = new Car({ price: 35000 });
//   console.log(audi.price); // 35000

//   audi.price = 49000;
//   console.log(audi.price); // 49000

//   audi.price = 51000;
//   console.log(audi.price); // 49000

///////////////////////////////////////////////////////////////////////////////////////////////////////////

// function letterCount (string, letter) {
//   const lowerString = string.toLowerCase();
//   const letterArray = lowerString.split('');
//   console.log(letterArray);

//   const arr = letterArray.filter(elem => elem === letter)
//   console.log(arr.length);
//   return arr.length;

// }

// letterCount ('trcytvBVGYYTVBLLKUEqodekmk', 'u');

///////////////////////////////////////////////////////////////////////////////////////////////////////////


// function letterCount (string, letter) {
//   const lowerString = string.toLowerCase();
//   const letterArray = lowerString.split('');
//   console.log(letterArray);

//   return letterArray.reduce((lettersCount, el) => {el === letter ? lettersCount += 1 : lettersCount}, 0);
// }

// console.log(letterCount('ovJOIQIiewiedmlkmarg[ijtetbnt', 'a'));

// ???????????????????????????????????????????????????????????

// Добро пожаловать. В этой ката вас просят возвести в квадрат каждую цифру числа и соединить их.

// Например, если мы пропустим через функцию 9119, получится 811181, потому что 9 2 равно 81, а 1 2 равно 1.

// Примечание . Функция принимает целое число и возвращает целое число.

// function squareDigits(num) {
//   const arr = String(num).split('');
//   let value = '';

//   const pimp = arr.map(number =>
//     number = Math.pow(number, 2))
//     .reduce((previousValue, element) => { value += String(element); }, 0);

//   return value;
// }

// console.log(squareDigits(567));

// function squareDigits(num){
//   return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));

// }
///////////////////////////////////////////////////////////////////////////////////////////////////////////

// Завершите функцию, которая принимает строковый параметр и переворачивает каждое слово в строке.
// Все пробелы в строке должны быть сохранены.

// function reverseWords(str) {
//   return str.split(' ').map(elem => {return elem.split("").reverse().join('')}).join(' ');

// }

// console.log(reverseWords("Lorem"));
// console.log(reverseWords("Lorem  ipsum  cata  is  pre  pimp good"));

///////////////////////////////////////////////////////////////////////////////////////////////////////////

// Цифровой корень — это рекурсивная сумма всех цифр числа.

// Учитывая n, возьмите сумму цифр n. Если это значение имеет более одной цифры, 
// продолжайте уменьшать таким образом, пока не будет получено однозначное число. 
// Ввод будет неотрицательным целым числом.

// function digitalRoot(n) {

//   while (String(n).split('').length > 1) {
//     n = String(n).split('').reduce((previousValue, element) => { return previousValue + Number(element) }, 0);
//     console.log(n)
//   }

//   return Number(n);
// }
// console.log(digitalRoot(285));

// function digital_root(n) {
//   return (n - 1) % 9 + 1;
// }
// console.log(digital_root(285));

///////////////////////////////////////////////////////////////////////////////////////////////////////////

// В этом небольшом задании вам дается строка чисел, разделенных пробелами, и вы должны вернуть наибольшее и наименьшее число.

// function highAndLow(numbers){
//   const nmbrs = numbers.split(' ').map((el) => {return Number(el)}).sort((a,b) => a-b);
//   console.log(nmbrs);
//   return `${nmbrs[nmbrs.length -1]} ${nmbrs[0]}`
// }

// function highAndLow(numbers){
//   numbers = numbers.split(' ').map(Number);
//   return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
// }

// console.log(highAndLow('5 18 9 6 30 7 4 -3 5'));

// ///////////////////////////////////////////////////////////////////////////////////////////////////////////

// Завершите метод/функцию, чтобы она преобразовывала слова, разделенные тире/подчеркиванием, в верблюжий регистр.
// Первое слово в выводе должно быть написано с заглавной буквы только в том случае, если исходное слово было
// написано с заглавной буквы (известный как верхний верблюжий регистр, также часто называемый регистром Паскаля).
// Следующие слова всегда должны быть написаны с большой буквы.

// Примеры
// "the-stealth-warrior"превращается в "theStealthWarrior"
// "The_Stealth_Warrior"превращается в"TheStealthWarrior"

// function toCamelCase(str) {
//     const arrays = str.includes('-')
//         ? str.split('-').map(el => el.split(''))
//         : str.split('_').map(el => el.split(''));

//     arrays.forEach(function (el, index) {
//         if (index === 0) {
//             return arrays.splice(index, 1, el.join(''));
//         }

//         el[0] = el[0].toUpperCase();
//         return arrays.splice(index, 1, el.join(''));
//     });
//     console.log(arrays);
//     return arrays.join('');
// }

// console.log(toCamelCase('pom-pam-pim'));
// console.log(toCamelCase('pom_pam_pim'));

// function toCamelCase(str) {
//     return str.split('-')
//         .flatMap(el => el.split('_'))
//         .map((el, index) => index === 0
//             ? el
//             : el[0].toUpperCase() + el.slice(1)).join('');
// }

// console.log(toCamelCase('pom-pam-pim'));
// console.log(toCamelCase('pom_pam_pim'));
// console.log(toCamelCase('pom-pam_pim'));

/////////////////////////////////////////////////////////////////////////////////////////////////////////

// Вам дан массив (который будет иметь длину не менее 3, но может быть очень большим), содержащий целые числа. 
// Массив либо полностью состоит из нечетных целых чисел, либо полностью состоит из четных целых чисел, 
// за исключением одного целого числа N. Напишите метод, который принимает массив в качестве аргумента и возвращает этот «выброс» N.

// Примеры
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

// function findOutlier(int) {
//     let value = 0;
//     int.forEach(i => i % 2 !== 0? value += 1 : i);
    
//     if (value <= 1) { return int.find(f => f % 2 !== 0) }
//     else if (value > 1) { return int.find(f => f % 2 === 0) };
// }

// function findOutlier(int) {
//     const twin = int.filter(f => f % 2 === 0);
//     const odd = int.filter(f => f % 2 !== 0);

//     return twin.length > odd.length ? odd[0] : twin[0];
// }

// console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]));
// console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]));

/////////////////////////////////////////////////////////////////////////////////////////////////////////

