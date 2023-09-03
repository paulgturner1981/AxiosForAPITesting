/**
 * Logical operator NOT (represented by !)
 */

// Check if first name provided is correct
let firstname = "Paul"
if (firstname != "Paul") {
    console.log(`${firstname} is the wrong name, please correct it`);
}
else {
    console.log(`${firstname} is the correct name, well done`);
} // 

// // Check if first and last name have been provided
let name1 = "Rob"
if (!name1) {
    console.log(`${name1} is not a valid name, please correct it.`);
} else {
    console.log(`${name1} is a valid name, well done.`);
} // For this test only the six falsy values will result in the else statement being executed.

// Check if first and last name have been provided
let christianname = "Rob", surname = "Jones"
if (!christianname || !surname) {
    console.log(`One of the names provided, ${christianname} or ${surname} is not a valid name, please correct it.`);
} else {
    console.log(`${christianname} ${surname} is a valid name, well done.`);
} // For this test only the six falsy values will result in the else statement being executed.