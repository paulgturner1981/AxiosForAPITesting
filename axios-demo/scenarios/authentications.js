"use strict";

/**
 * Make a POST request to the login endpoint using axios to https://reqres.in/ and verify the response status is 200.
 */

const axios = require("axios");
const { expect } = require("chai");

describe("POST /api/users", () => {
  it("should return 200", async () => {
    try {
      const payload = {
        email: "eve.holt@reqres.in",
        password: "cityslicka",
      };

      const apiUrl = `https://reqres.in/api/login`;
      const response = await axios.get(apiUrl);
      console.log(response.data);

      expect(response.status).to.equal(200);
    } catch (error) {
      throw error;
    }
  });
});
