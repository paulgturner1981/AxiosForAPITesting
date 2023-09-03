"use strict";

/**
 * Using callback functions
 */

function a() {
  console.log(`function a...`);
}

function b() {
  setTimeout(() => {
    console.log(`function b...`);
  }, 2000);
}

function c() {
  console.log(`function c...`);
}

// Calling the function
a();
b();
c();
