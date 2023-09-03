"use strict";

/**
 * About length property for arrays.
 * 1. Length property returns the total index + 1 of the array.
 * 2. Length property can be set manually.
 */

// 1. Length property returns the total index + 1 of the array.
var arr = [1, 2, 3];
// console.log(arr.length); // INdex would be [0, 1, 2] but length property is 3 as it returns the total index + 1.

// 2. Length property can be set manually.
let array = arr.length = 10;
console.log(array);