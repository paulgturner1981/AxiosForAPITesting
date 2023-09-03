"use strict";

/**
 * Merge an array using the spread operator.
 */

// Merge an array using the spread operator.
let array = [1, 2, 3, 4];
let array1  = ["apple", "banana", "cherry", "grapes"];

let mergedArray = [...array,...array1];
console.log(mergedArray);
console.log(array.length);