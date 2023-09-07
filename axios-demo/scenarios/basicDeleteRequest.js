"use strict";

/**
 * Make a DELETE request using axios to https://reqres.in/ and verify the response status is a 204.
 */

const axios = require("axios");
const { expect } = require("chai");

describe("DELETE /api/users", () => {
  it("should return 204", async () => {
    try {
      const apiUrl = `https://reqres.in/api/users/2`;
      const response = await axios.delete(apiUrl);
      console.log(response.status);

      expect(response.status).to.equal(204);
    } catch (error) {
      throw error;
    }
  });
});
