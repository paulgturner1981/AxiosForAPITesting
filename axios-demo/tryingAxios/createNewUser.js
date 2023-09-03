// Create a new user on the dummy API and log the response.

const axios = require('axios');

let new_user = {
    name: "Joe",
    job: "Bloggs"
};

axios.post('https://reqres.in/api/users', new_user)
.then(response => {
    console.log(`New User: `, new_user);
}).catch(error => {
    console.log(`Error: `, error);
});
