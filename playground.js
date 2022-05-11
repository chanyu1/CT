"use strict";

// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = ["5", "5", "3", "2", "4", "1"];

input = input.map((num) => parseInt(num));
let n = input.shift();

for (let i = 0; i < n - 1; i++) {
  let min = input[i]; // 5
  let number = i; // 0

  for (let j = i + 1; j < n; j++) {
    if (min > input[j]) {
      min = input[j];
      number = j;
    }
  }

  input.splice(number, 1);
  console.log(min, number);
  input.splice(i, 0, min);
  console.log(input);
}

for (let i = 0; i < n; i++) {
  console.log(input[i]);
}
