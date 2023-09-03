"use strict";

/**
 * Named functions - functions that have a name/identifier
 *
 * Scenarios:
 * 1. Function that returns a value
 * 2. Function that does an action
 * 3. Calling a function
 * 4. No checking is completed - any data type can be provided
 * 5. More/less args can be provided - and no check is performed
 * 6. Function name and typeof operator
 */

// 1. Function that returns a value
function addTwoNumbers(num1, num2) {
  let sum = num1 + num2;
  return sum;
}

// 2. Function that does an action
function click(ele) {
    console.log(`Clicking the ${ele}`);
    // in real world you would do elelment.click.....
}

// 3. Calling a function
let total = addTwoNumbers(5,5);
console.log(total);
// click("loginButton")

// 4. No checking is completed - any data type can be provided
// let total = addTwoNumbers("five","five");
// console.log(total);
// With JS here it will not check this and just print fivefieve, with typescript this wouldn't happen

// 5. More/less args can be provided - and no check is performed
// let total = addTwoNumbers(5,5,5);
// console.log(total);
// There is no logic to check this is valid, so it will end up NaN.
// It will do the same if you provide too many args (it will just ignore the extra ones).