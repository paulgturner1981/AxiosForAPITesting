`use strict`

/**
 * An attempt to chain two API requests together using
 * the response data from the first request in the second request.
 */

const axios = require(`axios`);
const { expect } = require(`chai`);

describe(`Chaining two API requests`, () => {
  it(`should chain two requests together using the response data
    from the first request in the second request`, async () => {
    try {
      const firstResponse = await axios.get(`https://reqres.in/api/users/1`);
      console.log(Response);
      const userData = firstResponse.data.data;
      const secondResponse = await axios.get(
        `https://reqres.in/api/users/${userData.id}`
      );
      console.log(Response);
      expect(secondResponse.status).to.equal(200);
    } catch (error) {
      throw error;
    }
  });
});


