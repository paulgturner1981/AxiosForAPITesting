/**
 * Using axios's library to do a GET and fetch user 1s data from the API
 * Using mocha's "describe" and "it" to check if the API response is correct
 * Using chai's "expect" assertion to check if the API response is correct
 */

const axios = require("axios");
const { expect } = require("chai");

describe("API Test", () => {
  it("should fetch user 1s data from the API", async () => {
    try {
      const response = await axios.get("https://reqres.in/api/users/1");
      const user = response.data.data;

      expect(response.status).to.equal(200);
      expect(user).to.have.property("id", 1);
      expect(user).to.have.property("email", "george.bluth@reqres.in");
      expect(user).to.have.property("first_name", "George");
      expect(user).to.have.property("last_name", "Bluth");
    } catch (error) {
      throw new Error(`Test failed: ${error.message}`);
    }
  });
});
