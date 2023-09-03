"use strict";

/**
 * Learning about CommonJS modules.
 * @see https://www.npmjs.com/package/common-js
 * 1. A module is a file that contains code.
 * 2. CommonJS is the default module system.
 *
 * @scenario Learn about CommonJS modules.
 * 1. Export a function, object and variable.
 */

// 1. Export a function
function greet() {
  return `Hello, I am a function`;
}

// An object
let object = {
  name: "John",
  age: 25,
  sex: "male",
};

// A variable
let variable = "Hello, I am a variable";

module.exports = { greet, object, variable }; // This will export a function, object and variable so it can be used in other modules

// console.log(module);
