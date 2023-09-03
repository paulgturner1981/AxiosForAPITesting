/**
 * Conditional statements:
 * 1. Just using a simple if statement (without else)
 * 2. The if NOT statement
 * 3. If and else
 * 4. Nested conditions
 * 5. If else - but else block contains "inner conditions"
 * 6. USe of if statement in loops
 */

// 1. Use case: Handling a random popup page
let popupExists = true
if (popupExists === true) {
    console.log(`>>> Perform click action`);
}

// 2. Just if (NOT) - checking for a falsy value
let data = "PASS"
if (!data) throw Error("No valid data has been provided")

//3. If a file exists read it, otherwise create a file
let fileExists = "Y"

if (fileExists === "Y") {
  console.log("Read the file");
} else {
  console.log("Create the file");
}

// 4. Nested - Act based on a list of conditions
let err = "Boo";

if (err === "Error") {
  console.log(`>>> Retry`);
} else if (err === "AssertionError") {
  console.log(`>>> Fail the test`);
} else if (err === "DataValidation") {
  console.log(`>>> Read the test data file`);
} else {
  console.log(`>>> Print the error message`);
}

// 5. If else inner conditions
let isSuccess = false;

if (isSuccess === true) {
  console.log(`>>> Store the db values`);
} else {
  console.log(`No data received`);
  let errorCode = "ACCEPT";
  if (errorCode === `ACCEPT`) {
    console.log(`>>> Continue the execution`);
  }
}

// 6. Using if statements in a for loop

for (let i = 1; i <= 10; i++) {
    if (i === 6) break
  console.log(i);
}
console.log(`>>> After the for loop...`);
