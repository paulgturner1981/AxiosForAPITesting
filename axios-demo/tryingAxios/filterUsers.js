"use strict";

//  Fetch a list of users from the dummy API and filter out users with email addresses containing the domain "reqres.in"

const axios = require(`axios`);

axios.get('http://reqres.in/api/users')
.then(response => {
    // const filteredUsers = response.data.data.filter(user => !user.email.includes("reqres"));
    //const filteredUsers = response.data.data.filter(user =>!user.email.match(/reqres\.in/));
    const filteredUsers = response.data.data.filter(user =>!user.email.match(/@reqres\.in$/));
    console.log(`Filtered users: `, filteredUsers);
})
.catch(error => {
    console.error(`Error: `, error);
});