// find needle in Haystack
// Game
// Find needle in the Haystack
// const haystack = ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]

// // Царик
// // function findNeedle() {
// //   array.forEach((item, index) => {
// // if (item === "needle") {
// //   return `found the needle at position ${index}`
// // }})}

// // CodeWars
// // function findNeedle(haystack) {
// //   // your code here
// // for (i = 0 ; i < haystack.length ; i++){
// // if(haystack[i]==="needle"){
// //   return "found the needle at position " + i
// //     }
// //   }
// // }

// // Блюдник
// // function findNeedle() {
// //   let findItem = haystack.indexOf("needle")
// //   console.log(findItem)
// //   return console.log(`"found the needle at position " + ${findItem}`)
// // }
// // findNeedle()

// // Как нужно
// function findNeedle(haystack) {
//   return "found the needle at position " + haystack.indexOf("needle")
// }
// console.log(findNeedle(haystack))

// Even or Odd
// function evenOrOdd(number) {
//     if (Math.abs(number) % 2 === 0) {
//     return 'Even'
//   } if (Math.abs(number) % 2 === 1) {
//     return 'Odd'
//   }
// }
// console.log(evenOrOdd(-7))

// Sum of Multiples
// function sumMul(n,m) {
//     let sum = 0
//   for (let i = 0; i * n < m; i ++) {
//       sum = sum + i * n
//   }
//   if (n < 0 || m < 0) {
//   return 'INVALID'
//   }
//   return sum
// }
// console.log(sumMul(2,9))
// console.log(sumMul(3,13))
// console.log(sumMul(4,123))
// console.log(sumMul(4,-7))

// FIXME: Replace all dots
// var replaceDots = function(str) {
//     return str.replace(/\./g, '-');
//   }
//   console.log(replaceDots('hello...world'))

// const replaceDots = function (str) {
//     return str.replaceAll(".", "-");
//   };
//   console.log(replaceDots('hello...world'))

// const replaceDots = (str) => str.replace(/\./g, '-')
// console.log(replaceDots('hello...world'))

// Add Length
// function addLength(str) {
//     const aL = str.split(' ').map(item => (item + " " +item.length))
//     return aL
//     }
//     console.log(addLength("apple ban"))
// тоже самое только с функцией
// function addLength(str){
//     return str.split(' ').map(function(item) {
//         return item+' '+item.length})
//   }
// console.log(addLength("apple ban"))

// To square(root) or not to square(root)
// const array = [4,3,9,7,2,1]
// function squareOrSquareRoot(array) {
//   return array.map(x => Math.sqrt(x) % 1 ? x * x : Math.sqrt(x));
// }
// console.log(squareOrSquareRoot(array))
// Внизу то же самое только с if
/*const array = [4,3,9,7,2,1]
function squareOrSquareRoot(array) { 
      return array.map(x => { 
    if (Math.sqrt(x) % 1) { 
      return x * x; 
    } else { 
      return Math.sqrt(x); 
    } 
  }); 
}
console.log(squareOrSquareRoot(array))
*/

// Neutralisation
// let str = []
// function neutralise(a = [], b = []) {
//   if (a === "+" && b === "+") {
//   str.push("+")
//   } else if (a === "-" && b === "-") {
//   str.push("-")
//   } else
//   str.push("0")
//   return newStr = str.join('')
//   }
// neutralise("-","-")
// neutralise("+","-")
// neutralise("-","+")
// neutralise("+","+")
// console.log(str)
// console.log(newStr)
//Царик решение
/*
function neutralise(a = string, b = string) { 
  const arraySymbols = a.split('').map((item, index) => { 
    const symbol = (`${item}${b.split('')[index]}`); 
 
    if ('++' === symbol) { 
      return '+'; 
    } else if ('--' === symbol) { 
      return '-'; 
    } else { 
      return 0; 
    } 
  }); 
 
  return arraySymbols.join('') 
}
*/
// Понятное и наглядное решение проблемы
// function neutralise(s1, s2) {
//   let res = '';

//   for (let i = 0; i < s1.length; i++){
//       if (s1[i] === s2[i]){
//           res += s1[i]
//       } else {
//           res += 0;
//       }
//   }

//   return res;
// }
// neutralise('+-+', '--+')
// то же решение но по сложному
// const neutralise = (a, b) => a.split('').map((el,i) => el === b[i] ? el : 0).join('')

//opposite number
// function opposite(number) {
//   return -number;
// }
// console.log(opposite(9));
// console.log(opposite(-5));
// console.log(opposite(0));
// console.log(opposite("5"));
// console.log(opposite("-5"));
// console.log(opposite("-0"));

// Negative num or make Negative
// function makeNegative(num) {
//   if (num >= 0) {
//     return -num;
//     }
//     return num
//     }
// или так
// function makeNegative(num) {
//   return num < 0 ? num : -num;
// }



//Reversed String (зеркальная строка)
// function solution(str){
//   return str.split('').reverse().join('');
// }
// console.log(solution("Hello"))
// //тоже самое через Цикл
// function solution(s){
//   var o = '';
//   for (var i = s.length - 1; i >= 0; i--)
//     o += s[i];
//   return o;
// }

// // Fuel Pump Reserve (остаток топлива до заправки)
// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//   if (distanceToPump <= mpg * fuelLeft) {
//     return true
//   }
//     return false
// }; 
// console.log(zeroFuel(50, 25, 2));

// same case Game (проверка на соответствие строчного элемента)
// function sameCase(a, b) {
//   return /[a-z]/i.test(a) && /[a-z]/i.test(b) ? Number(/[a-z]/.test(a) == /[a-z]/.test(b)) : -1;
// }
// console.log(sameCase('c', 'G'))
// проще но надо проверить!!!
// function sameCase(a, b){
//   if(a.toUpperCase() === a.toLowerCase() || b.toLowerCase() === b.toUpperCase()){
//      return -1
//    }else if(a === a.toLowerCase() && b === b.toLowerCase() || a === a.toUpperCase() && b === b.toUpperCase()){
//        return 1
//    }else{
//      return 0
//    }
//  }

// Grasshoper (среднне число из массива)
// const array = [1,3,5,7];
// const findAverage = (nums) => nums.reduce((a, c) => a + c) / nums.length;
// console.log(findAverage(array))

// is it Number (проверка на номер)
// function isDigit(s) {
//   return s == parseFloat(s) 
// }
// console.log(isDigit("5"))



// function flickSwitch(arr) {  (замена на булевое значени и обратное элементов массива)
//   let newArr.push()
//   let newArr = arr.map(function(elem) {
//     if(elem === "flick") {
//       return false
//     }})}

// function flickSwitch(arr){
//   let flick = true
//    return arr.map(item => item === 'flick'? flick = !flick: flick)
// }

// Хитро и не понятно ON,,,,,,? (что это)
// function flickSwitch(arr) {
//   let on = true;
//   return arr.map((item) => {
//     if (item === "flick") {
//       on = !on;
//     }
//     return on;
//   });
// }
// console.log(flickSwitch(['bicycle', 'jarmony', 'flick', 'sheep', 'flick']))

// Через цикл for
// function flickSwitch(arr){
//   let flag = true
//   for(let i = 0; i < arr.length; i++){
//     if(arr[i] == 'flick'){
//       flag == false ? flag = true : flag = false
//     } 
//     arr[i] = flag
//   }
//   return arr
// }



// ASCII (расшифровка символов строки на цифру)
// function uniTotal(string) {
//   let sum = 0;
//   for(let i = 0; i < string.length; i++){
//     sum += string.charCodeAt(i)
//   }
//   return sum
// }
//   uniTotal("ab")

// проверка свойств обьекта в массиве на наличие и отсутствие
// ОМГ спижжено
// function anyArrows(arrows){
//     // arrow it
//     return arrows.some(elem => !elem.damaged);
//   }
// Более понятно
//   function anyArrows(arrows){
//     return arrows.some(obj => obj.damaged ? false: true)
//   }

// рабочая функция REDUCE помоему умноженная на 2
// let arr = [1,2, "a"]
// function arr2bin(arr) {
//   return arr.reduce((sum, cur) => typeof(cur) === 'number' ? sum + cur : sum, 0).toString(2);
// }
// arr2bin(arr)


// Декада месяца (простое сравнение)
// // Quarter of the year (декада месяца) 
// function quarterOf(month) {
//   let x = Number(month);
//   if (1 <= x && x <= 3) {
//     return 1
//   }
//     if (4 <= x && x <= 6) {
//     return 2
//   }
//     if (7 <= x && x  <= 9) {
//     return 3
//   }
//     if (10 <= x && x <= 12) {
//     return 4  
//   }
//     }
//     console.log(quarterOf(8))
// короткая форма
// const quarterOf = (month) => {
//   return Math.ceil(month / 3);
// }

// Проверка на заглавную букву в строке
// function isIsogram(str){
//   for (let i = 0; i < str.length; i++) {
//     let result = str[i];
//     if(str[i] === str[i].toUpperCase())
//     return true
//   }
//     return false
// }
// console.log(isIsogram("privet"))


// is Isogram //Повторяющиеся буквы последовательно в строке, 
// и просто повторки: вернуть false, если нет повторяющихся символов вернуть True
function isIsogram(str) {
  //if empty return true.
  if (str.isEmpty) {
    return true;
  } else {
    // All lower case.
    str = str.toLowerCase();
  }
  //split string into individual characters. 
  var array = str.split(''); // разбиваем массив на элементы по одному
  var sortedArr = array.slice().sort(); // сортируем массив

  for (var i = 0; i < array.length; i++) {
    //if duplicate is found return false.
    if (sortedArr[i + 1] == sortedArr[i]) { // ищем одинаковые элементы
      return false;
    }
  }
  //else return true
  return true;
}
console.log(isIsogram('asdsdgfgdafsg'))