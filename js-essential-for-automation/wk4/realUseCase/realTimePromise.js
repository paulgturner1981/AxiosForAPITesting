"use strict";

/**
 * Real time use of a callback promise using node-fetch npm package
 */

const fetch = require("node-fetch");

function getAPIResponse() {
  fetch("https://api.github.com/users/github")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
}

getAPIResponse();
