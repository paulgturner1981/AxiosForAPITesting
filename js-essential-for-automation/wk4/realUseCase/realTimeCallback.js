"use strict";

/**
 * Real time use of a callback funtion using fetch npm package
 * @scenario
 * Get an API response
 * URL: https://api.github,com/users/github
 *
 * @Remember
 * 1. Look at the docs to ensure they support promises
 * 2. Understand the order in which the callback function attaches the processed value
 */

const fetchUrl = require("fetch").fetchUrl;

fetchUrl("https://api.github.com/users/github", (err, meta, body) => {
  console.log(body.toString());
}); 
