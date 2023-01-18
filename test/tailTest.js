const tail = require("../tail");
const head = require("../head");
const assertEqual = require("../assertEqual");

// assertEqual(head([5, 6, 7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

//test case to make sure tail function returns
// a new array and doesnt modify the old one
const names = ["Julie", "Matt", "Tyra", "Landry"];
console.log(tail(names));
assertEqual(names.length, 4);
