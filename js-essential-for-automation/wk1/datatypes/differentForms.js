/**
 * A data type can be represented in one of these forms:
 * 1. Literals
 * Variable
 * Expression
 */

// string examples
console.log("Hello"); // Literals
let str = "Hello" // Variable
console.log("Lunch" + " time"); // Expression

// boolean examples
console.log(true); //Literals
let bool = true //Variable
console.log(5 < 10); // Expression
console.log(typeof (5 < 10)); // Expression

// Function example
function sum(num1, num2) {
    return num1 + num2
}

sum(2, 2) // Answer will be 4
console.log(sum(2, 2)); // This should return 4 as the answer
console.log(typeof (sum(2, 2))); // Data type should be 4