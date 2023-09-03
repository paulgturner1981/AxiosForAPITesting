"use strict";

/**
 * Practicing using the async/await syntax with axios to fetch a user from the reqres endpoint.
 */

const axios = require("axios");

async function fetchData() {
  try {
    const response = await axios.get("https://reqres.in/api/users/1");
    const user = response.data.data;
    console.log("User:", user);
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchData();
