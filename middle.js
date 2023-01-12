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

// ACTUAL FUNCTION
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

// TEST CODE
console.log(middle([1]));
console.log(middle([1, 2]));
console.log(middle([1, 2, 3], [1, 2, 3]));
console.log(middle([1, 2, 3], [3, 2, 1]));
