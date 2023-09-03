/**
 * Ternary operator (representged as ?)
 * Syntax: <expression> ? "value1" : "value2" 
 */

// Use case: Set the log level for different environments

// Basic use
let runner = "local"
let logLevel = runner === "local" ? "Info" : "Verbose"
console.log(logLevel);

// Advanced use
let runner1 = "cloud"
let logLevel1 = runner1 === "local" ? "Info" : runner1 === "cloud" ? "Silent" : "Error"
console.log(logLevel1);