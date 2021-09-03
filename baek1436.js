"use strict";

// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = [
  "10 13",
  "BBBBBBBBWBWBW",
  "BBBBBBBBBWBWB",
  "BBBBBBBBWBWBW",
  "BBBBBBBBBWBWB",
  "BBBBBBBBWBWBW",
  "BBBBBBBBBWBWB",
  "BBBBBBBBWBWBW",
  "BBBBBBBBBWBWB",
  "WWWWWWWWWWBWB",
  "WWWWWWWWWWBWB",
];

let MN = input.shift();
input = input.map((str) => str.split(""));

let N = Number(MN.split(" ")[0]);
let M = Number(MN.split(" ")[1]);
let result = [];

// 세로
for (let i = 0; i <= N - 8; i++) {
  // 가로
  for (let j = 0; j <= M - 8; j++) {
    let count1 = 0;
    let count2 = 0;
    let k = 0;

    for (let q = i; q < i + 8; q++) {
      for (let p = j; p < j + 8; p += 2) {
        if (k % 2 === 0) {
          if (input[q][p] === "B") {
            count1++;
          }
          if (input[q][p + 1] === "W") {
            count1++;
          }
          if (input[q][p] === "W") {
            count2++;
          }
          if (input[q][p + 1] === "B") {
            count2++;
          }
        } else if (k % 2 === 1) {
          if (input[q][p] === "W") {
            count1++;
          }
          if (input[q][p + 1] === "B") {
            count1++;
          }
          if (input[q][p] === "B") {
            count2++;
          }
          if (input[q][p + 1] === "W") {
            count2++;
          }
        }
      }
      k++;
    }
    result.push(Math.min(count1, count2));
  }
}

console.log(Math.min.apply(null, result));
