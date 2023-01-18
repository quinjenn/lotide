const eqArrays = require("../eqArrays");
const assertArraysEqual = require("../assertArraysEqual");
const middle = require("../middle");

// TEST CODE
console.log(middle([1]));
console.log(middle([1, 2]));
console.log(middle([1, 2, 3], [1, 2, 3]));
console.log(middle([1, 2, 3], [3, 2, 1]));

assertArraysEqual([1, 2, 3], [1, 2, 3]);
