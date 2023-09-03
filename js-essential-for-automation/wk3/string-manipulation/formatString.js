"use strict";

/**
 * Formatting a string:
 * Examples:
 * ABC bank statement from 2022-01-01 to 2022-02-01 for accounting period ending 12345
 *  */

// Combining a static part of a strong with a variable

// Example 1 - an email subject, based on a template, where start date, end date and account number all change
let startDate = "2022-01-01 "
let endDate = "2022-02-01"
let accountNumber = 12345

let emailSubject = `ABC bank statement from ${startDate}to $${endDate} for accounting period ending ${accountNumber}`
console.log(emailSubject); 