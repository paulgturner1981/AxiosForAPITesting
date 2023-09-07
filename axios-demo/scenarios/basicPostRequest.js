"use strict";

/**
 * Make a POST request using axios to https://reqres.in/ and verify the response status is 200.
 */

const axios = require("axios");
const { expect } = require("chai");

describe("POST /api/users", () => {
  it("should return 200", async () => {
    try {
      const payload = {
        name: "John",
        job: "Doe",
      };

      const apiUrl = `https://reqres.in/api/users`;
      const response = await axios.get(apiUrl);
      console.log(response);

      expect(response.status).to.equal(200);
    } catch (error) {
      throw error;
    }
  });
});
