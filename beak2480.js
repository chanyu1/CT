"use strict";

// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = ["6 2 5"];

const current = input[0]
  .split(" ")
  .map((num) => parseInt(num))
  .sort((a, b) => b - a);

const num1 = current[0];
const num2 = current[1];
const num3 = current[2];

if (num1 === num2 && num2 === num3) {
  console.log(10000 + num1 * 1000);
} else if (num1 !== num2 && num2 !== num3) {
  console.log(num1 * 100);
} else {
  if (num1 === num2) {
    console.log(1000 + num1 * 100);
  } else {
    console.log(1000 + num2 * 100);
  }
}
