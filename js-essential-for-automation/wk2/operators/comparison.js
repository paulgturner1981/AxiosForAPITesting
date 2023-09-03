/**
 * Comparision operator:
 * 1. == (Check only the value)
 * 2. === (Strict equality operator: checks the value AND the type)
 * 3. != (Not equal to)
 * 4. !== (Not equal to, but also checks the type)
 * 5. >
 * 6. >=
 * 7. <
 * 8. <=
 *  Note: comparison operator will always return a boolean
 * 
 * @rule:
 * In most cases, if the two operands are not the same type, JS will attempt to convert them.
 * This usually ends up in a numerical comparison.
 */

// Use case 1: Strict equality (===, !==)
let a = 1, b = "1"
console.log(a === b); // False - This will be false as one is a string and the other is a number.
console.log(a == b); // True - This will be true as the string will be converted to a number.
console.log(a !== b); // True - This will be true as one is a string and one is a number, so these will not be equal.
console.log(a != b); // False - This will be false as the string will be converted to a number so these will be equal.