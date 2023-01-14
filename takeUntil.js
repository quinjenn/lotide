const takeUntil = function (array, callback) {
  const results = [];

  for (const item of array) {
    if (callback(item)) {
      return results;
    }

    results.push(item);
  }
  return results;
};

const myCallback = (x) => {
  return x > 3;
};

let result = takeUntil([1, 2, 3, 4, 5], myCallback);
console.log(result);

result = takeUntil([1, 2, 3, 4, 5], (x) => x > 3);
console.log(result);
