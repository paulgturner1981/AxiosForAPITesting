"use strict";

// Fetch a list of users from the dummy API and log them to the console.

const axios = require("axios");

axios
  .get("https://reqres.in/api/users")
  .then((response) => {
    console.log(`Users:`, response.data.data);
  })
  .catch((error) => {
    console.log(`Error:`, error);
  });
