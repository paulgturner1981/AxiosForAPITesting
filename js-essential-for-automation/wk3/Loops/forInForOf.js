"use strict";

/**
 * for...in -> Object
 * for...of -> Array
 */

let obj = {
    a : 10,
    b : 20,
    c : 30
}

let windows = ["Google", "Amazon", "YouTube"]

// For..in loop example
// for (let key in obj) {
//     console.log(key); // This gets all the keys
//     console.log(obj[key]);
// }

// For...of loop example
for (let element of windows){
    console.log(element);
}

// REVISIT: WHAT IS THE DIFFERENCE BETWEEN THESE TWO?