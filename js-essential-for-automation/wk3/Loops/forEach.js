"use strict";

/**
 * Use of "forEach" method in a loop
 * 1. It can be used to access the array's element
 */

let windows = ["Google", "Amazon", "YouTube"]

windows.forEach((value, index, arr) => {
  console.log(value);
  console.log(index);
  console.log(arr);
});