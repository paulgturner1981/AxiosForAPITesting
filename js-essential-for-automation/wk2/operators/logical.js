/**
 * Logical operator:
 * 1. && - (and)
 * 2. || - (or)
 * 3. ! - (not)
 * 
 * Two main purposes:
 * 1. Conditional statements (e.g. if...else)
 * 2. To have a defalt value
 */

// Use case 1: AND (&&) check if a given value is a text

let value = "true"
if (typeof value === "string" && value.length > 1){
    console.log(`The value ${value} is a valid string`);
} else {
    console.log(`The value ${value} is not a valid string`);
}