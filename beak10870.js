"use strict";

// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = [2];

let n = Number(input[0]);
let count = 2;

const solution = (first, second) => {
  if (n === 0) {
    return first;
  }
  if (n === 1) {
    return second;
  }
  if (n === count) {
    return first + second;
  }
  count++;
  return solution(second, first + second);
};

console.log(solution(0, 1));
