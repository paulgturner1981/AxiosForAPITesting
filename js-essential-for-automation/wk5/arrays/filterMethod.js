"use strict";

/**
 * Use of filter methods
 * Find elements which match a given selector
 */

let books = [
    {
        title: "The Hobbit",
        author: "<NAME>",
        price: 12.99
    },
    {
        title: "The Dark Tower",
        author: "<NAME>",
        price: 5.99
    },
    {
        title: "The Lord of the Rings",
        author: "<NAME>",
        price: 9.99
    }
]; 

// List all books which are less than 10
// let lessThan10 = books.filter(function(book) {
//     return book.price < 10;
// });

// console.log(lessThan10);

let lessThan10 = books.filter(ele => ele.price > 10);

console.log(lessThan10);