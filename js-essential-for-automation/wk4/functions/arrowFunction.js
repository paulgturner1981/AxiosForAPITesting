"use strict";

/**
 * Arrow functions =>
 *
 * @scenario
 * 1. Convert a normal function into an arrow function
 * 2. No param
 * 3. Single param
 * 4. Multiple params
 * 5. forEach() method example
 */

// 1. Convert a normal function into an arrow function
// let sum = (num1, num2) => {
//   let sum = num1 + num2;
//   return sum;
// }
// let total = sum(2,3)
// console.log(total);

// 2. No param
// let noParams = () => 10 > 9
// let result = noParams()
// console.log(result);
// console.log(typeof result);

// 3. Single parameter
let greet = (name) => console.log(`Hello ${name}`);
greet("Paul");

// 4. More than one statement
let sum = (num1, num2) => (sum = num1 + num2);
let total = sum(2, 2);
console.log(total);
