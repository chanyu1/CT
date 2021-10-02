"use strict";

// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let input = ["7", "3 2", "1 1", "1 -1", "2 1", "2 3", "2 2", "3 3"];

let N = input.shift();
let newArr = [];

for (let i = 0; i < N; i++) {
  let numArr = input[i].split(" ").map((num) => parseInt(num));
  newArr.push(numArr);
}

newArr.sort((a, b) => a[1] - b[1]);
newArr.sort((a, b) => a[0] - b[0]);

let resultArr = [];

for (let j = 0; j < N; j++) {
  resultArr.push(newArr[j][0] + " " + newArr[j][1]);
}

console.log(resultArr.join("\n"));
