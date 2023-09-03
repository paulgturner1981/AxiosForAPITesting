"use strict";

const helpers = require("wk6/node/err-handling/throw")

/**
 * 
 */

let filepath = `${process.cwd()}/data/sampleData.json`
let data = helpers.readFile(filepath)
console.log(data);