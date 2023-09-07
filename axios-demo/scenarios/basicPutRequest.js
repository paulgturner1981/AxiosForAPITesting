"use strict";

/**
 * Make a PUT request using axios to https://reqres.in/ and verify the response status is 200.
 */

const axios = require("axios");
const { expect } = require("chai");

describe("PUT /api/users/2", () => {
  it("should return 200", async () => {
    try {
      const payload = {
        name: "Bad",
        job: "Data",
      };

      const apiUrl = `https://reqres.in/api/users/2`;
      const response = await axios.put(apiUrl);
      console.log(response.status);

      expect(response.status).to.equal(200);
    } catch (error) {
      throw error;
    }
  });
});
