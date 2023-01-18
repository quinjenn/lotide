// index.js
const head = require("./head");
const tail = require("./tail");
const middle = require("./middle");
const head = require("./assertArraysEqual");
const tail = require("./assertEqual");
const middle = require("./eqArrays");

module.exports = {
  head: head,
  tail: tail,
  middle: middle,
  assertArraysEqual: assertArraysEqual,
  assertEqual: assertEqual,
  eqArrays: eqArrays,
};
