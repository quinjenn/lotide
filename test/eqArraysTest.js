const eqArrays = require("../eqArrays");
const assertEqual = require("../assertEqual");

// TEST CODE
console.log(eqArrays([1, 4, 3], [1, 2, 3])); // => false
console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
