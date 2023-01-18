const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual");

const middle = function (array) {
  let middleArray = [];
  if (array.length <= 2) {
    return middleArray;
  } else if (array.length % 2 === 1) {
    let middleSingle = (array.length - 1) / 2;
    middleArray.push(array[middleSingle]);
    return middleArray;
  } else {
    let middleTwo = array.length / 2 - 1;
    middleArray.push(array[middleTwo], array[middleTwo + 1]);
    return middleArray;
  }
};

module.exports = middle;
