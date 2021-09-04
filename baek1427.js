"use strict";

// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = ["2143"];

let N = String(input.shift());
let newArr = [];

for (let i = 0; i < N.length; i++) {
  newArr.push(N[i]);
}

console.log(Number(newArr.sort((a, b) => b - a).join("")));
