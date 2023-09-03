"use strict";

/**
 * Learning about object properties.
 * 
 * @usecase
 * Building a custom test report
 * 
 * @Scenario
 * The property can be in one of the following ways:
 * A named
 * A string
 * A number
 */

let reportData = {
    testID: 12345,
    testName: "testName",
    testDescription: "testDescription",
    testStatus: "PASS",
    "PASS/FAIL Flag" : "PASS",
    testResult: "testResult",
    criticalPath: true,
}

console.log(reportData); // { testID: 12345, testName: "testName", testDescription: "
console.log(reportData["PASS/FAIL Flag"]); // "PASS"
console.log(typeof reportData["testResult"]); // "string"
console.log(typeof reportData.criticalPath); // "boolean"