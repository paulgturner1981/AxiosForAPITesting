"use strict";

/**
 * Extracting a substring - using slice
 * Rules:
 * 1. Needs a start index (inclusive) and an end index (not inclusive)
 * 2. You can specify only the start index
 * 3. You can specify the negative range
 */

/**
 * Scenario:
 * 1. Extract only yy-mm-dd format
 * 2. Extract year (4 digits)
 * 3. Extract month
 * Extract date 
*/

let date = `2023-03-25`

// Extract only yy-mm-dd format
let yymmdd = date.slice(2);
console.log(yymmdd);

// Year
let year = date.slice(0,4)
console.log(year);

// Month
let month = date.slice(5,7)
console.log(month);

// Day
let day = date.slice(8,10)
console.log(day);

// Day using negative index
let dayNegativeIndex = date.slice(-2)
console.log(dayNegativeIndex);