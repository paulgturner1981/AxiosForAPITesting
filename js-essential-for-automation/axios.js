const axios = require("axios");

const dataToSend = {
  name: "John Doe",
  age: 30,
};

axios
  .post("https://www.google.com/", dataToSend)
  .then((response) => {
    console.log("Response:", response.data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
