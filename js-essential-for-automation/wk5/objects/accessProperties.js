"use strict";

/**
 * 1. Dot operators
 * 2. Key as a string
 * 3. In-built methods: keys(), values()
 * 4. Access child nodes
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
  scope: ["unit", "integration", "e2e"],
  previousRun: {
    status: "PASSED",
    runID: 1234567890,
  }
};

console.log(reportData[envFile]); // Environment configuration

// 3. In-built methods: keys(), values()
let keys = Object.keys(reportData);
    console.log(keys);

let values = Object.values(reportData);
    console.log(values);

console.log(reportData.scope[1]); // Integration
console.log(reportData.previousRun.status); // PASSED