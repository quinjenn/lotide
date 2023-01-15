const words = ["cat", "dog", "lion", "tiger", "bear"];

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

const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    //     console.log('item BEFORE: ', item);
    //   console.log('item AFTER: ', callback(item));
    //   console.log('---');
    // }
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, (word) => word[0]);
console.log(results1);

const test1 = map([], (word) => word[0]);
assertArraysEqual(test1, ["b"]);

const test2 = map(["monkey"], (word) => word[0]);
assertArraysEqual(test2, []);
