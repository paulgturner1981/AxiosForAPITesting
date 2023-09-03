"use strict";
/**
 * Strict Mode:
 * 1. Prevents any undeclared global variables
 * 2. Stops you using things like let, private, public etc as identifiers.
 */

// Stop you using an undeclared global variable
a = 1 //No let or const here so this variable is undeclared. With strict mode on this will error.
console.log(a);

// Using keywords lime package as a variable
let package = "anything"
console.log(package);

// In summary it is generally good practice to use strict mode.