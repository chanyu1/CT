"use strict";

// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = [
  "10 4790",
  "1",
  "5",
  "10",
  "50",
  "100",
  "500",
  "1000",
  "5000",
  "10000",
  "50000",
];

let num = input[0].split(" ").map((num) => parseInt(num));
let N = num[0];
let K = num[1];
const coins = [];

for (let i = N; i > 0; i--) {
  coins.push(Number(input[i]));
}

let result = 0;

for (let j = 0; K !== 0; j++) {
  if (K >= coins[j]) {
    K -= coins[j];
    result++;
    j--;
  }
}

console.log(result);
