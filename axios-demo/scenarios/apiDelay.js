"use strict";

/**
 * Make a GET request with a 3 seconds API response delay, using axios to https://reqres.in/ and verify the response status.
 */

const axios = require("axios");
const { expect } = require("chai");

describe("GET /api/users and wait for the response, including the delay", () => {
  it("should wait for the response and return 200", (done) => {
    const apiUrl = `https://reqres.in/api/users?page=2&delay=3`;

    axios
      .get(apiUrl)
      .then((response) => {
        expect(response.status).to.equal(200);
        done();
        console.log(response.data);
      })
      .catch((error) => {
        done(error);
      });
  }).timeout(1000);
});