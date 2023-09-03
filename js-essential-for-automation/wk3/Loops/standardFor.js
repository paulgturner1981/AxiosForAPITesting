"use strict";

/**
 * Standard for loop
 * Important:
 * 1. Define a starting point
 * Define an end/exit condition
 * Decide and increment/decrement
 */

// Print a number from 0-10
// "i = 0" is the initial value, "i <=10" is the exit condition, "i++"" is the increment.
// for (let i = 0; i <= 10; i++){
//     console.log(i);
// }

// Using a loop with an array
let arr = ["Apple", 10, "Orange", 20, "Grapes", 30];
let numberCount = 0
let fruitCount = 0

for (let i = 0; i < arr.length; i++){
  let arrElement = arr[i];
  if (typeof arrElement === "number") {
    numberCount += arrElement;
  } else if (typeof arrElement === "string") {
    fruitCount++;
  }
}
console.log(`The value of numbers is ${numberCount}`);
console.log(`The number of fruits is ${fruitCount}`);