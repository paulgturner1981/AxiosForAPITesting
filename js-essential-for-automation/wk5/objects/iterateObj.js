"use strict";

/**
 * Iterate object properties
 * @methods
 * 1. Keys()
 */

let testRunner = "local";
let machineID = "1234567890";
let envFile = "dev";

let reportData = {
  testID: 123456,
  status: "passed",
  inScope: true,
  totalTests: 100,
  passedTests: 80,
  failedTests: 20,
  passRate: function () {
    let percentage = (this.passedTests / this.totalTests) * 100;
    return `${percentage.toFixed(2)}%`;
  },
  runDate: new Date(Date.now()),
  runner: testRunner,
  macID: machineID ? machineID : "Unknown",
  envFile: {
    env: "dev",
    url: "http://dev.com",
  },
};

// Iterate/loop through object properties
// Object.keys(reportData).forEach((key) => {
//   console.log(key);
// });

// for (let key in reportData) {
//  console.log(reportData[key]);
//   console.log(`The key: ${key} | The value: ${reportData[key]}`);
// };

/**
 * using JSON.stringify
 * [object Object]
 */

// let jsonData = JSON.stringify(reportData);
// console.log(jsonData);

for (let key in reportData) {
  console.log(`Key: ${key} | Value: ${JSON.stringify(reportData[key])}`);
};