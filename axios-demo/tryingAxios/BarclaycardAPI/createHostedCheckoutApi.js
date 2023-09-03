/**
 * A test to use the Barclaycard API to create a new payment.
 * Using axios to make a POST request to the API endpoint with headers
 * Example with an async/await and a try/catch block
 * Using chai and mocha for assertions and verification
 */

const axios = require("axios");
const { expect } = require("chai");

describe("Barclaycard API POST Test", () => {
  it("should create a new payment", async () => {
    try {
      //Currently it returns a 403 forbidden, I need to find a working merchant ID in their documentation
      const merchantId = "73541312";

      const payload = {
        order: {
          amountOfMoney: {
            amount: 1000,
            currencyCode: "GBP",
          },
          customer: {
            billingAddress: {
              countryCode: "GB",
            },
          },
        },
      };

      const headers = {
        "Authorization": "Bearer your-api-key", // I need to find an API key to add here
        "Content-Type": "application/json",
      };

      const apiUrl = `https://payment.test.checkout-epdq.com/v2/{merchantId}/hostedcheckouts`;

      // Using axios to make a POST request to the API endpoint with headers
      const response = await axios.post(apiUrl, payload, { headers });

      // Using chai "expect" to verify the response status is 200
      expect(response.status).to.equal(200);

      // Using chai "expect" to verify the correct format of the response data
      expect(response.data).to.be.an("object");
      expect(response.data).to.have.property("payment");
      expect(response.data.payment).to.be.an("object");
    } catch (error) {
      throw error;
    }
  });
});