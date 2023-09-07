"use strict";

/**
 * Make a GET request using axios to https://reqres.in/ with a query parametr
 * and verify the response status is 200.
 */

const axios = require("axios");
const { expect } = require("chai");

describe("GET /api/users", () => {
  it("should return 200", async () => {
    try {
      const queryParams = {
        page: 2,
      };
      const queryString = new URLSearchParams(queryParams).toString();
      const apiUrl = `https://reqres.in/api/users?${queryString}`;
      const response = await axios.get(apiUrl);
      console.log(response);
      
      expect(response.status).to.equal(200);
    } catch (error) {
      throw error;
    }
  });
});
