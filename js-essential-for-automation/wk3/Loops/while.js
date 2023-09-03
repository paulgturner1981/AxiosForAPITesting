"use strict";

/**
 * While loop
 * - Used when you want to do something UNTIL something you have defined happens
 * - Or until the end condition is not known.
 * e.g Retry until you get an API response, retry a max of 10 times.
 */

let count = 1;
let isDataReturned = false

while (isDataReturned === false && count <= 10) {
  console.log(count);
  // if (count == 5) {
  //   isDataReturned = true;
  // }
  count++;
}


// REVISIT THIS ONE.