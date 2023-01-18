const assertEqual = require("./assertEqual");
const head = require("./head");

let actual = "";
let expected = "";

const tail = function (array) {
  // if (array.length > 0) {
  //   return array.slice(1);
  // } else {
  //   return undefined;
  // }
  return array.slice(1);
};

module.exports = tail;
