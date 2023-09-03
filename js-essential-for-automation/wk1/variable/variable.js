// Learning about variables

/**
 * Variable rules;
* Must start with a letter, underscore or $.
* Cannot use system reserved keywords e.g. if, else, throw, break.
* Are case-sensitive
* Cannot have the same name for a variable and a function/object.
* Can have multiple variables in a single, comma-separated line.
* If you declare a variable without giving it a value, it will default to “undefined”.
 */

let greeting = "Hello World!", greeting1 = "Goodbye World!", greeting2 = "The End!"
console.log(greeting, greeting1, greeting2);

/**
 * Practicing var, let and const
 */

// Exploring the let varaible
// let value = 0
// value = 10
// console.log("The value of this variable is", value);

// Exploring the const variable
// const APP_URL = "http://www.google.com"
// console.log(APP_URL);

let count = 0
if(true){
    let count = 10
    console.log("The value of", count, "if it is INSIDE of the if block");
}
console.log("The value of", count, "if it is OUTSIDE of the if block");
