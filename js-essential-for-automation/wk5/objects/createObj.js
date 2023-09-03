"use strict";

/**
 * Objects creation - Different ways to create objects.
 * @scenario
 * 1. Using object literal
 * 2. Using constructor function
 * 3. Object.create()
 * From ES5 Object
 */

// 1. Using object literal
let obj = {
  name: "Paul",
  age: 30,
  isMarried: false,
};

// 2. Using constructor function
// function Person(name, age, isMarried) {
//   this.name = name;
//   this.age = age;
//   this.isMarried = isMarried;
//   return `The name is ${this.name} and the age is ${this.age} and marital status is ${this.isMarried}.`;
// }

// let obj = new Person("Bob", 25, true);

// 3. Object.create()
let obj1 = Object.create(obj);
console.log(Object.getPrototypeOf(obj1)); // Object

// Result: {name: "Paul", age: 30, isMarried: false}
// console.log(object1); // {name: "Paul", age: 30, isMarried: false}
console.log(obj1.name); // Paul
console.log(typeof obj1); // object