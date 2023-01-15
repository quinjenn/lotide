// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function (object1, object2) {
  const objectOneKeys = Object.keys(object1);
  if (objectOneKeys.length !== Object.keys(object2).length) {
    return false;
  }

  for (let obj1 of objectOneKeys) {
    if (
      Array.isArray(object1[obj1]) == true &&
      Array.isArray(object2[obj1]) == true
    ) {
      if (eqArrays(object1[obj1], object2[obj1]) !== true) {
        return false;
      }
    } else {
      if (object1[obj1] !== object2[obj1]) {
        return false;
      }
    }
  }
  return true;
};

const assertObjectsEqual = function (actual, expected) {
  // Implement me!
  const inspect = require("util").inspect; // <= add this line
  // ...
  if (eqObjects(actual, expected) === true) {
    console.log(
      `✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`
    );
  } else {
    console.log(
      `🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`
    );
  }
};

// TEST CODE

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
eqObjects(shirtObject, anotherShirtObject); // => true

const longSleeveShirtObject = {
  size: "medium",
  color: "red",
  sleeveLength: "long",
};
eqObjects(shirtObject, longSleeveShirtObject); // => false

assertObjectsEqual(shirtObject, anotherShirtObject);
assertObjectsEqual(shirtObject, anotherShirtObject);
