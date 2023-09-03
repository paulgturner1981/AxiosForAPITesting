"use strict";

/**
 * Different ways to create an array
 * 1. Literal arrays - This is the most common way to create an array.
 * 2. Constructors
 * 3. Object creation using the new keyword
 */

/**
 * 1. Literal arrays
 */

let arr1 = [1, 2, 3, 4, 5];

/**
 * 2. Constructors
 */

let arr2 = new Array(5);

/**
 * 3. Object creation using the new keyword
 */

let arr3 = new Array("apples", "oranges", "pears");

// Getting the complete value of the array
console.log(arr3); // [ "apples", "oranges", "pears" ]

// Getting  the first value of the array
console.log(arr3[0]); // "apples"

// Getting the typeof of the array
console.log(typeof arr3); // "object"

// Getting the length of the array
console.log(arr3.length); // 3

// Getting the constructor of the array
console.log(arr3.constructor); // Array