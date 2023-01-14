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

const letterPositions = function (sentence) {
  const results = {};
  // logic to update results here
  for (i = 0; i < sentence.length; i++) {
    let letter = sentence[i];
    if (results[letter]) {
      results[letter].push(i);
    } else if (letter !== " ") {
      results[letter] = [i];
    }
  }
  return results;
};
console.log(letterPositions("lighthouse in the house"));

//TEST
assertArraysEqual(letterPositions("hello").e, [1]);
