"use strict";

/**
 * Set up values via the assignments operator
 * 1. Top level properties
 * 2. Inner properties
 * 3. Assign to other objects
 */

let reportData = {
    status: "PASS",
    scope: ["unit", "functional", "integration", "e2e"],
    previousRun: {
        status: "FAIL",
        runID: "001",
    },
};

// Top level properties
// reportData.status = "FAIL";
// reportData.previousRun = {
//     status: "PASS",
//     runID: "002",
// };
// console.log(reportData);

// // 3. Assign to other objects
// let obj = {}

// obj = reportData
// console.log(obj);

// String
let str = "Hello World";
str = str.toUpperCase();
console.log(str);
console.log(str.toUpperCase);
// Strings are immutable, objects are mutable.

