"use strict";

/**
 * Using the indexOf method
 *  */

let str = `App number {12345} submitted`

// let start = str.indexOf(`{`)
// let end = str.lastIndexOf(`}`)
// console.log(start);
// console.log(end);
let extractedNumber = str.slice(12,17)
console.log(extractedNumber);

// Here the indexOf method was used us to give us the left/right boundary index values,
// rather than work them out manually.