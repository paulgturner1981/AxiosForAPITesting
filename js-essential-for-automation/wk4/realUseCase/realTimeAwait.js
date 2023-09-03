"use strict";

/**
 * Real time use of a callback promise using node-fetch npm package
 */

const fetch = require("node-fetch");

// Async and await method
async function getAPIResponse(){
  let response = await fetch("https://api.github.com/users/github")
  let data = await response.json()
  console.log(data);
}

getAPIResponse();