/**
 * 1. string
 * 2. number
 * 3. boolean
 * 4. object
 * 5. array
 * 6. regexp
 * 7. undefined and null
 */

// String example
let string = "I am a double quote string"
let strng2 = 'I am a single quote string'
let string3 = `${string}, isn't that cool`
console.log(string, strng2, string3);

// Number example
let number = 1
let number1 = 2
let number2 = 3
console.log(number + number1 + number2);

// Boolean example
let bool = true

//Object example
let obj = {}

// Array example
let arr = []

//Regexp example
let regex = /abcd/

// Undefined and null example
let value1
let value2 = null

console.log(`The type of string is: ${typeof(string)}`);
console.log(`The type of number is: ${typeof(number)}`);
console.log(`The type of bool is: ${typeof(bool)}`);
console.log(`The type of obj is: ${typeof(obj)}`);
console.log(`The type of array is: ${typeof(arr)}`);
console.log(`The type of regex is: ${typeof(regex)}`);
console.log(`The type of undefined is: ${typeof(value1)}`);
console.log(`The type of null is: ${typeof(value2)}`);