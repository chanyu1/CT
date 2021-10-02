"use strict";

// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(num => parseInt(num));
let input = [5, -1, -2, 1, -1, -2];

let N = input.shift();
let sortedNumArr = input.sort((a, b) => a - b);
let numMap = {};
// console.log(sortedNumArr);

for (let num of sortedNumArr) {
  if (numMap[num]) {
    numMap[num] += 1;
  } else {
    numMap[num] = 1;
  }
}
// console.log(numMap);

let hitMaxNum = Math.max.apply(null, Object.values(numMap));
let hitMaxNumArr = [];
let hitMaxNumResult = 0;

for (let numKey in numMap) {
  if (numMap[numKey] === hitMaxNum) {
    hitMaxNumArr.push(numKey);
  }
}
// console.log(hitMaxNumArr);

if (hitMaxNumArr.length > 1) {
  hitMaxNumArr = hitMaxNumArr.sort((a, b) => a - b);
  hitMaxNumResult = hitMaxNumArr[1];
} else {
  hitMaxNumResult = hitMaxNumArr[0];
}

let avg = Math.round(input.reduce((acc, num) => (acc += num), 0) / N);
let center = input[Math.floor(input.length / 2)];
let maxSubMin = sortedNumArr[sortedNumArr.length - 1] - sortedNumArr[0];

// console.log(avg);
// console.log(center);
// console.log(hitMaxNumResult);
// console.log(maxSubMin);
