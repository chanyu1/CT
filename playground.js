"use strict";

// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = [9991];

let N = input[0];
// let result = [];

for (let i = 2; i <= N; i++) {
  if (N % i === 0) {
    console.log(i);
    // result.push(i);
    N = N / i;
    i--;
  }
}

// for (let j = 0; j < result.length; j++) {
//   console.log(result[j]);
// }
