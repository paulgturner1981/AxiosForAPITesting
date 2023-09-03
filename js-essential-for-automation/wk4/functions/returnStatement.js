"use strict";

/**
 * Return statement
 *
 * @Scenarios
 * 1. Return a single primitive value
 * 2. Return an expression (that evals to a value)
 * 3. Return an obj
 * 4. Return a function itself
 * 5. Return a statement in a conditional statement
 */

// 1. Return a single primitive value
// function addTwoNumbers(num1, num2) {
//     let sum = num1 + num2;
//     return sum;
//   }

// 2. Return an expression (that evals to a value)
// function addTwoNumbers(num1, num2) {
//   return num1 + num2;
// }
// let total = addTwoNumbers(3, 3);
// console.log(total);

// 3. Return an object
// function addThreeNumbers(num1, num2, num3) {
//   let sum = num1 + num2 + num3;
//   return { total: sum }; // This is the object which will be returned
// }

// let total = addThreeNumbers(6, 5, 3);
// console.log(total);
// console.log(typeof total);

// 4. Return a function itself
// function addFourNumbers(num1, num2, num3, num4) {
//   return function () {
//     return num1 + num2 + num3 + num4;
//   };
// }
// let total1 = addFourNumbers(1, 5, 2, 3);
// console.log(total1());

// 5. Return a statement in a conditional statement
function addTNumbers(num1, num2) {
  if (!num1) {
    return;
  }
  let sum1 = num1 + num2;
  return sum1;
}
let tot = addTNumbers(undefined, 5);
console.log(tot);
