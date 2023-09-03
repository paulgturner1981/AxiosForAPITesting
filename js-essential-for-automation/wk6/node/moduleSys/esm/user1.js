"use strict";

/**
 * Learning about importing modules
 * 1. In your own code
 * 2. NPM package
 */

import data from "./helper1.js"; // default import
// No names imports in es modules

// Check
console.log(typeof data);
console.log(data);
console.log(data.greet());
