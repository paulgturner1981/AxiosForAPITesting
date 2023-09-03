/**
 * Logical operator: OR (represented by || )
 * Can be used to assign a default value
 * @use
 */

// 
let targetBrowser = "Firefox"

let browser = targetBrowser || "Chrome"
console.log(browser);
// The option to the left of the || will be picked up as the default.
// If the variable is not defined then it will use the right side of the || operator instead as the default.

