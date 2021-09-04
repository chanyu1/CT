"use strict";

// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = [
  "13",
  "but",
  "i",
  "wont",
  "hesitate",
  "no",
  "more",
  "no",
  "more",
  "it",
  "cannot",
  "wait",
  "im",
  "yours",
];

let N = parseInt(input.shift());

// 중복 제거
let set = new Set(input);
let newArr = [...set];

// 가장 긴 문자열
let eachLength = newArr.map((x) => x.length);
let maxNum = Math.max(...eachLength);

let result = [];

for (let i = 1; i <= maxNum; i++) {
  let lengthArr = [];

  for (let j = 0; j < newArr.length; j++) {
    if (newArr[j].length === i) {
      lengthArr.push(newArr[j]);
    }
  }

  result.push(lengthArr.sort());
}

result = result.flat();

for (let word of result) {
  console.log(word);
}
