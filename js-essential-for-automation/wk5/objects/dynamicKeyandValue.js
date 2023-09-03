"use strict";

/**
 * Learning about dynamic keys and dynamic values.
 * 1. Dynamic values:
 *  Run date
 *  Runners
 * Based on conditions
 * 2. Dynamic keys:
 *  Environment configuration
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
console.log(reportData.runDate); // Run date
console.log(reportData.runner); // Runners
console.log(reportData.macID); // Machine ID
console.log(reportData["envFile"].env); // Environment configuration
