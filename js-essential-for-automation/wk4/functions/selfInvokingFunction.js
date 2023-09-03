"use strict";

/**
 * Self invoking function
 */

(function greet(name, greeting = `Hello`) {
  console.log(`${greeting} ${name}`);
})(`Paul`) // You can do the call by surrounding the function in (), then outside you can add the call.