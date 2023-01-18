const assert = require("chai").assert;
const middle = require("../middle");

describe("#middle", () => {
  it("returns 2 for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("returns '2, 3' for ['1, 2, 3, 4']", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
});

// ODD CODE - CAN BE DELETED, USED FOR OLD REFERENCE
// console.log(middle([1]));
// console.log(middle([1, 2]));
// console.log(middle([1, 2, 3], [1, 2, 3]));
// console.log(middle([1, 2, 3], [3, 2, 1]));

// assertArraysEqual([1, 2, 3], [1, 2, 3]);
