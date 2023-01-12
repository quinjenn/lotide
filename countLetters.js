const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
const countLetters = function (lettersInSentence) {
  const results = {};
  console.log("lettersInSentence", lettersInSentence);
  for (const letter of lettersInSentence) {
    if (results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }
    console.log("letter", letter);
  }
  console.log("results", results);
};

countLetters("lighthouse in the house");
countLetters("I am in a bootcamp");
countLetters("web developer");
