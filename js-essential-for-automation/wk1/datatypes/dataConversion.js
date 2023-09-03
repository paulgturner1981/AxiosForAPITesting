let val1 = "5"
let val2 = "5.5"

console.log(`The type of val1: ${typeof val1}`); // String
console.log(`The type of val2: ${typeof val2}`); // String

// Converting these strings into numbers
numVal1 = parseInt(val1)
numVal2 = parseFloat(val2)

console.log(`The type of val1: ${typeof numVal1}, and the value is ${numVal1}`); // number
console.log(`The type of val2: ${typeof numVal2}, and the value is ${numVal2}`); // number

// Unary plus method - nice and easy
numVal1 = +val1
numVal2 = +val2

console.log(`The type of val1: ${typeof numVal1}, and the value is ${numVal1}`); // number
console.log(`The type of val2: ${typeof numVal2}, and the value is ${numVal2}`); // number

// Convert to a string example
let strVal = numVal1.toString();

console.log(`The type of strVal: ${typeof strVal}, and the value is ${strVal}`); // String