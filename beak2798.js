"use strict";

// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = ["10 500", "93 181 245 214 315 36 185 138 216 295"];

const num = input[0].split(" ").map((num) => parseInt(num));
const cards = input[1].split(" ").map((num) => parseInt(num));
const N = num[0];
const M = num[1];

let result = 0;

for (let i = 0; i < N - 2; i++) {
  for (let j = i + 1; j < N - 1; j++) {
    for (let k = j + 1; k < N; k++) {
      let sum = cards[i] + cards[j] + cards[k];

      if (result < sum && M >= sum) {
        result = sum;
      }
    }
  }
}

console.log(result);
