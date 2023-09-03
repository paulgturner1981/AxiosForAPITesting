"use strict";

/**
 * Adding methods to object
 * 1. Anonymous function with key and value
 * 2. Arrow function with key and value
 * 3. Method without key and value
 */

let reportData = {
    testID: 123456,
    status: "passed",
    inScope: true,
    totalTests: 100,
    passedTests: 80,
    failedTests: 20,
    passrate: function() {
        let percentage = (this.passedTests / this.totalTests) * 100;
        return `${percentage.toFixed(2)}%`;
}
}

// Call method from object
console.log(`The pass rate is ` + reportData.passrate());