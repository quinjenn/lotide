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
const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} is the same as ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} is not the same as ${arr2}`);
  }
};

const without = function (source, itemsToRemove) {
  for (let i = 0; i < source.length; i++) {
    for (let removeItems of itemsToRemove) {
      if (removeItems === source[i]) {
        source.splice(i, 1);
      }
    }
  }

  return source;
};

// TEST CODE
without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
