"use strict";

/**
 * Learning about process.cwd()
 * 
 * 1. Getting the current working directory
 * - Returns the current working
 * - Difference between __dir__ and
 * @rule
 * Wherever you issue the node command, that becomes the current working directory.
 */

console.log(process.cwd()); // where node command is passed
console.log(__dirname); // wherever the file is located

// Use case of getting a file path
let filepath = `${process.cwd()}/data/sampleData.json`;
console.log(`The file path is ${filepath}`);