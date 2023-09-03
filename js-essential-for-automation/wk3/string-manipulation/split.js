"use strict";

/**
 * Extract a string using the split method
 * 1. The separator (string | regexp) is omitted feom the returned array.
 * 2. If the first/last char is provided as a separator it adds an empty string in the first/last positions
 * 3. It will return: string []
 *  */

/**
 * Scenario:
 * 1. Get only the date part of the timestamp
 * 2. Split by space/first or last char
 * 3. Get only the filename
 */

let timestamp = `2023-03-25T10:50:45.200Z`;
let str = `Hello World`;
let filename = `invoice_123.pdf`;

// 1. Get only the date part of the timestamp
let dateArray = timestamp.split(`T`)
console.log(dateArray[0]);

// 2. Split by space/first or last char
let simpleArray = str.split(`d`)
console.log(simpleArray);

// 3. Get only the filename
let onlyFilename = filename.split(`.`)
console.log(onlyFilename[0]);