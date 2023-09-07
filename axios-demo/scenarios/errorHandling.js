"use strict";

/**
 * Make an invalid GET request using axios to https://reqres.in/ and verify the response status is 404.
 */

const axios = require("axios");
const { expect } = require("chai");

describe("GET /api/users", () => {
  it("should return a 404", async () => {
    try {
      const apiUrl = `https://reqres.in/api/users/anything-else`;
      const response = await axios.get(apiUrl);
      
      expect(response.status).to.equal(404);
    } catch (error) {
      throw error;
    }
  });
});
