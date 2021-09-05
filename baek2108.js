"use strict";

// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = ["5", "-1", "-2", "-3", "-1", "-2"];

let N = parseInt(input.shift());
input = input.map((str) => parseInt(str));

let avg = 0;
let median = 0;
let freq = 0;
let range = 0;

// avg
let sum = 0;

for (let num of input) {
  sum += num;
}
avg = Math.round(sum / N);

// median
let sortArr = input.sort();
let center = Math.floor(sortArr.length / 2);

if (sortArr.length % 2 === 1) {
  median = sortArr[center];
} else {
  median = (sortArr[center - 1] + sortArr[center]) / 2;
}

// freq
const sortedNumArr = input.sort((a, b) => a - b);
const numMap = {};

for (let num of sortedNumArr) {
  if (numMap[num]) {
    numMap[num] = numMap[num] + 1;
  } else {
    numMap[num] = 1;
  }
}

let hitMaxNum = Math.max.apply(null, Object.values(numMap));
let hitMaxNumArr = [];

for (let numKey in numMap) {
  if (numMap[numKey] === hitMaxNum) {
    hitMaxNumArr.push(numKey);
  }
}

if (hitMaxNumArr.length > 1) {
  hitMaxNumArr = hitMaxNumArr.sort((a, b) => a - b);
  freq = Number(hitMaxNumArr[1]);
} else {
  freq = Number(hitMaxNumArr[0]);
}

//range
range = Math.max(...input) - Math.min(...input);

console.log(avg);
console.log(median);
console.log(freq);
console.log(range);
