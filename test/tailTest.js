const assert = require("chai").assert;
const tail = require("../tail");

describe("#tail", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });
  it("returns '5' for [4, 5]", () => {
    assert.deepEqual(tail([4, 5]), [5]);
  });
});

// ODD CODE - CAN BE DELETED, USED FOR OLD REFERENCE
// const tail = require("../tail");
// const head = require("../head");
// const assertEqual = require("../assertEqual");

// // assertEqual(head([5, 6, 7]), 5);
// // assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

// //test case to make sure tail function returns
// // a new array and doesnt modify the old one
// const names = ["Julie", "Matt", "Tyra", "Landry"];
// console.log(tail(names));
// assertEqual(names.length, 4);
