"use strict";

/**
 * Learning about ECMAScript modules.
 * @rules
 * 1. Only a single default export is allowed.
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

export default { greet, object, variable };
