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
