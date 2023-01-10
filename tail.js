let actual = "";
let expected = "";

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = function (array) {
  if (array.length > 0) {
    return array[0];
  } else {
    return undefined;
  }
};
const tail = function (array) {
  if (array.length > 0) {
    return array.slice(1);
  } else {
    return undefined;
  }
};
