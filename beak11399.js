"use strict";

// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = ["5", "3 1 4 3 2"];

let N = Number(input[0]);
let current = input[1]
  .split(" ")
  .map((num) => parseInt(num))
  .sort((a, b) => a - b);

let result = 0;
let delay = 0;

for (let i = 0; i < current.length; i++) {
  delay += current[i];
  result += delay;
}

console.log(result);
