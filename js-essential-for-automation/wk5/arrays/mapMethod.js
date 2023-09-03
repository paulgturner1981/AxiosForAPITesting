"use strict";

/**
 * Using map method to create a new array of numbers.
 * @usecase
 * Converting numbers in a strong into numbers.
 * 1. Using a loop
 * 2. Using the map method
 */

let givenArr = ["123", "456", "789"];

// 1. Using a loop
// let newArr = [];
// for (let i = 0; i < givenArr.length; i++) {
//   newArr.push(parseInt(givenArr[i]));
// }

// console.log(newArr);

let modifiedArr = givenArr.map(ele => parseInt(ele));

console.log(modifiedArr);

// 2. Using the map method
// let newArr2 = givenArr.map(function (item) {
//   return parseInt(item);
// });

// console.log(newArr);
// console.log(newArr2);