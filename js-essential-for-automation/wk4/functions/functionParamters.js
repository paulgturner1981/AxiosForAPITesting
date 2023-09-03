"use strict";
const axios = require('axios').default;

/**
 * Function parameters
 *
 * Scenarios:
 * 1. Default param
 * 2. Passing undefined/falsy values if not known
 * 3. Passing primitives, obj types as args
 */

// 1. Default param
// function greet(name, greeting = `Nice to meet you `) {
//   console.log(`${greeting}${name}!`);
// } // As greeting is always the same we can assign it the default value as we have here.

// greet(`Paul`);
// console.log(greet);

// 2. Passing undefined/falsy values if not known
// function printFullName(firstName, middleName, lastName) {
//   if (middleName) {
//     console.log(`Your full name is: ${firstName} ${middleName} ${lastName}`);
//   } else {
//     console.log(`Your full name is: ${firstName} ${lastName}`);
//   }
// }
// printFullName(`Paul`, "", `Turner`);
// console.log(printFullName);

// 3. Passing primitives, obj types as args
function printFullName(personObj) {
  console.log(`${personObj.firstName} ${personObj.lastName}`);
}
printFullName({
  firstName: `Paul`,
  lastName: `Turner`,
});
console.log(typeof printFullName);