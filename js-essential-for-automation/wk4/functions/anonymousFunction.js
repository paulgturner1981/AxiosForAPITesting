"use strict";

/**
 * Anonymous functions - function expression
 *
 * Scenarios:
 * 1. Function (without name is assigned to a variable)
 * 2. Function with name is assigned to a variable
 Usage:
 * Mainly used as a callback function (a function that requires another function as its argument)
 */

// 1. Function (without name is assigned to a variable)
// let addTwoNumbers = function (num1, num2) {
//   let sum = num1 + num2;
//   return sum;
// };
//  console.log(typeof addTwoNumbers);
// let value = addTwoNumbers(2, 2);
// console.log(value);

// 2. Function with name is assigned to a variable
let sumFunction = function addTwoNumbers (num1, num2) {
    let sum = num1 + num2;
    return sum;
  };
  let value = sumFunction(2,2)
  console.log(value);