"use strict";

/**
 * There are 2 ways to create a string:
 * 1. Literals
 * - single quote
 * - double quote
 * - template literals
 * 2. Object
 */

// 
let str1 = 'Hello World' // Single quote
let str2 = "Hello World" // Double quote
let str3 = `Hello World` // this is template literal and is the preferred way to create a string.
let str4 = String("Hello World") // Object 

console.log(str1 === str3); // This will return true as they are all strings no matter which method you use.