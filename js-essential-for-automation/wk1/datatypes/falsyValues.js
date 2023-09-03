/**
 * Falsy values:
* False
* Undefined (from a numerical context this is classed as NaN)
* Null  (from a numerical context this is classed as zero)
* 0
* NaN (not a number)
* “” (empty quotes)
These are all booleans that = false
 */

let val = false

if (val) {
console.log("Condition met..");
} else {
console.log(`Given ${val} is a falsy value...`);
}