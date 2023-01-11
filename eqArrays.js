let actual = "";
let expected = "";

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Passed: ${actual} === ${expected}`);
  }
};

function eqArrays(firstArray, secondArray) {
  if (firstArray.length !== secondArray.length) {
    return false;
  }

  for (var i = 0; i < firstArray.length; i++) {
    if (
      typeof firstArray[i] !== typeof secondArray[i] ||
      firstArray[i] !== secondArray[i]
    ) {
      return false;
    }
  }
  return true;
}

// TEST CODE
console.log(eqArrays([1, 4, 3], [1, 2, 3]));
