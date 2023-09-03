"use strict";

/**
 * Common Error objects in JavaScript.
 * @types
 * 1. Error - base object for user error
 * 2. ReferenceError
 * 3. SyntaxError
 * 4. TypeError
 */

// 2. ReferenceError
// console.log(x); // ReferenceError as x is not defined

//  3. SyntaxError
// let a = 10
// let a = 20
// console.log(a); // SyntaxError: You can't declare the same variable more than once

// 4. TypeError
const BROWSER = "chrome";
BROWSER = "firefox";
console.log(BROWSER); // TypeError: As this is a const you can't change it

