"use strict";

/**
 * Rest paramter and arguments object
 *
 * Definition:
 * 1. Denoted by ...<paramName>
 * Rest paramter syntax allows us to represent an indefinite number of arguments as an array
 * 2. The arguments object is made available within the function body
 * 3. The arguments can be accessed by array-like notation arguments[i]
 * 4. It has length property
 */

//
function sum(num1, num2, ...numN) {
  let total = 0;
  console.log(arguments.length);
  for (let i = 0; i < arguments.length; i++);
  {
    total += arguments[i];
  }
  return total;
}
let value = sum(2,2,3,3)
console.log(value);