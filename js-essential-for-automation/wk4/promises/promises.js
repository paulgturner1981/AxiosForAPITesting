"use strict";

/**
 * How to use promises
 *
 * @scenarios
 * 1. Initialise a promise object
 * 2. Pending, fulfilled and rejected statuses
 * 3. How to get a resolved and rejected value - then(0) and catch()
 * 4. UnhandledPromiseRejection error
 * 5. Chaining promises
 */

// 1. Initialise a promise object
// let promiseObj = new Promise((resolve, reject) => {})
// console.log(promiseObj); // It will return pending at this stage as we haven't resolved/rejected it yet

// * 2. Pending, fulfilled and rejected statuses
let promiseObj = new Promise((resolve, reject) => {
    console.log(`Executing the promise...`);
  if (1 > 2) {
    setTimeout(() => {
      resolve(`Promise is resolved, valid API response received.`);
    }, 2000);
  } else {
    reject(`An error has occured, an invalid API response was received.`);
  }
})

// 3. How to get a resolved and rejected value - then(0) and catch()
// promiseObj.then((resolveValue) => {
//     console.log(resolveValue);
// }).catch((error) => {
//     console.log(error);
// })

// 5. Chaining promises
// promiseObj;
//   .then((resolveValue) => {
//     console.log(resolveValue);
//     return `${resolveValue} Updated with extra values`; // Adding a return here allows us to use
//     // multiple thens, as shown below.
//   })
//   .then((updatedValue) => {
//     console.log(updatedValue);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// async and await
async function getData() {
  try {
    let res = await promiseObj;
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}

// THIS IS BROKE AND I CANT FIX IT.