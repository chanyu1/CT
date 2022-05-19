"use strict";

// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = [9991];

let N = input[0];

for (let i = 2; i <= N; i++) {
  if (N % i === 0) {
    console.log(i);
    N = N / i;
    i--;
  }
}
