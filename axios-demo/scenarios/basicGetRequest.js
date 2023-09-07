"use strict";

/**
 * Make a GET request using axios to https://reqres.in/ and verify the response status.
 */

const axios = require("axios");
const { expect } = require("chai");

describe("GET /api/users", () => {
  it("should return 200", async () => {
    try {
      const apiUrl = `https://reqres.in/api/users?page=2`;
      const response = await axios.get(apiUrl);
      
      expect(response.status).to.equal(200);
    } catch (error) {
      throw error;
    }
  });
});
