/**
 * Make a successful login attempt using the /login endpoint. It should return a 200 status code and a token in the response.
 */

const axios = require("axios");

let loginAttempt = {
    email: "eve.holt@reqres.in",
    password: "cityslicka"
}

axios
  .post("https://reqres.in/api/login", loginAttempt)
  .then((response) => {
    console.log(response);
  }).catch((err) => {
    console.log(err);
  });