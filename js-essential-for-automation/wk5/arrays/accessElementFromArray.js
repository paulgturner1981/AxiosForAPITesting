"use strict";

/**
 * Traversing arrays and accessing elements
 * 1. Access an inner object property
 * 2. Access an inner array property
 * 3. Access elements across different objects, by finding the path
 */

// // 1. Access an inner object property
// let arr = [
//     {
//         name: "John",
//         age: 30
//     },
//     {
//         name: "Mary",
//         age: 20
//     },
// ];

// console.log(arr[1].name);
// console.log(arr[1].age);

// 2. Access an inner array property
let arr2 = [
    [1, 2, 3],
    ["apples", "banana", "peaches"]
];

console.log(arr2[1][1]); // "banana"

// 3. Access elements across different objects, by finding the path
let books = [
    {
        title: "The Hobbit",
        author: "<NAME>",
        price: 12.99
    },
    {
        title: "The Dark Tower",
        author: "<NAME>",
        price: 15.99
    },
    {
        title: "The Lord of the Rings",
        author: "<NAME>",
        price: 9.99
    }
]; 

let prices = [];

for (let i = 0; i < books.length; i++) {
    prices.push(books[i].price);
}
console.log(prices);