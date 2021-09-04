"use strict";

// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = ["6", "1", "3", "-2", "-2", "-3", "-3"];

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
let obj = {};

for (let num of input) {
  if (obj[num]) {
    obj[num]++;
  } else {
    obj[num] = 1;
  }
}

let keys = Object.keys(obj);
let max = obj[keys[0]];

for (let i = 1; i < keys.length; i++) {
  let value = obj[keys[i]];
  if (value > max) {
    max = value;
  }
}

let maxArr = [];

for (let j = 0; j < keys.length; j++) {
  if (obj[keys[j]] === obj[keys[max]]) {
    maxArr.push(obj[keys[j]]);
  }
}
// console.log(obj);
console.log(maxArr);

//range
range = Math.max(...input) - Math.min(...input);

console.log(avg);
console.log(median);
console.log(freq);
console.log(range);
