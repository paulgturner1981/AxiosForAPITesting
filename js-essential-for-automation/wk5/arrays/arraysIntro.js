"use strict";

/**
 * Learning about arrays in JavaScript:
 * 1. Arrays are mutable
 * 2. Arrays are internally an Object
 */

// 1. Arrays are mutable
let str = `Hello!`;
let arr = [1,2,3];

// console.log(str.toUpperCase()); // Hello!
// console.log(str.toLowerCase()); // hello!
// console.log(str); // Hello!

console.log(arr.push(4)); // 4
console.log(arr); // [1,2,3,4]

console.log(arr[2]); // 3
console.log(arr["2"]); // 3