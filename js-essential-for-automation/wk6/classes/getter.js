"use strict";

const Page = require("./page");

/**
 * A login page
 * 1. How to inherit properties from a base class
 * 2. How to call base class methods or properties
 * 3. How to create a object
 *
 * @terminology
 * super class -> sub-class
 * base-class -> derived class
 * parent class -> child class
 */

class LoginPage extends Page {
  constructor() {
    super(); // This must be the first line of the constructor
  }
// Adding a getter to the constructor
  get loginBtn() {  
    return `login-button`;
  }

  //Adding a method to click the login button
  clickLoginButton() {
    this.click("Login-button");
    console.log("Login button clicked");
  }
}

// Creating an object
let LoginPage1 = new LoginPage();
console.log(typeof LoginPage1); // object

// Calling the parent's method
LoginPage1.navigateTo("google.com");

LoginPage1.clickLoginButton();