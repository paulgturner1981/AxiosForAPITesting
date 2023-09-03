"use strict";

/**
 * Merging objects.
 * @scenario Merging two config objects
 * 1. Using Object.assign
 * 2. Using spread operator
 */

let obj1 = {
  a: 1,
  b: 2,
  c: 3,
};

let obj2 = {
  d: 4,
  e: 5,
  f: 6,
};

// Merging two objects using Object.assign
// Object.assign(obj1, obj2);
// console.log(obj1); // { a: 4, b: 5, c: 6 }
 
// Merging two objects using spread operator
let obj3 = {
    ...obj1,
    ...obj2 
};
console.log(obj3);