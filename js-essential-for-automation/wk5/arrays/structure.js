"use strict";

/**
 * Different data structures
 * 1. Same type of data
 * 2. Different data structures
 * 3. Array containing an object
 * 4. Array containing an array
 */


// 1. Same type of data
// let arr = ["car", "bike", "boat"];

// // 2. Different data structures
// let obj = {
//     name: "John",
//     age: 30,
//     electric: true,
// };
// console.log(obj);
// console.log(`Total elements: ${Object.keys(obj).length}`);

// 3. Array containing an object
// let arr2 = [
//     {
//         name: "Tesla",
//         mpg: 300,
//         electric: true,
//     },
//     {
//         name: "BMW",
//         mpg: 20,
//         electric: false,
//     },
// ];

// console.log(arr2);
// console.log(`Total elements: ${Object.keys(arr2).length}`);

// 4. Array containing an array
let arr3 = [
    [1, 2, 3],
    [4, 5, 6],
    "apple",
];

console.log(arr3);
console.log(arr3.length);