"use strict";

// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = [5];

let number = input[0];
let value = 1;

while (true) {
  number -= value;
  if (number <= 0) {
    number += value;
    break;
  }
  value++;
}

if (value % 2 === 1) {
  console.log(`${value - (number - 1)}/${number}`);
} else {
  console.log(`${number}/${value - (number - 1)}`);
}
