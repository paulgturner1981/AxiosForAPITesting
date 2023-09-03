"use strict";

/**
 * Using callback functions for async actions
 */

// Simple function that prints a message
function printMsg(msg) {
    console.log(`Calling the callback function...`);
  console.log(msg);
}

function greet(name, greeter) {
    console.log(`Calling the main function...`);
  let greetMsg = `Hello ${name}`; // Action of the async operation
 return greeter(greetMsg); // here the argument in line 12 becomes a callback function
}

// Option 1:
// greet(`Paul`, printMsg);

// Option 2:
// greet(`Paul`, function(value){
//     console.log(`The received value from the main function: ${value}`);
// })

// Option 3:
// greet(`Rob`, (res) => {
//     console.log(`The received value from the main function: ${res}`);
// })

/**
 * How the return statement works in callback functions
 */
let res = greet(`Rob`, (res) => {
    return `The received value from the main function: ${res}`;
})

console.log(res);