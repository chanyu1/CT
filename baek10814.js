"use strict";

// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = ["3", "21 Junkyu", "21 Dohyun", "20 Sunyoung"];

let N = parseInt(input.shift());
let objArr = [];

for (let i = 0; i < N; i++) {
  let age = Number(input[i].split(" ")[0]);
  let name = input[i].split(" ")[1];

  objArr.push({ age, name });
}

objArr.sort((p1, p2) => p1.age - p2.age);

for (let obj of objArr) {
  console.log(`${obj.age} ${obj.name}`);
}

// 시간 초과
// let input = ["3", "21 Junkyu", "21 Dohyun", "20 Sunyoung"];

// let N = parseInt(input.shift());

// // 가장 많은 나이
// let eachLength = input.map((x) => Number(x.split(" ")[0]));
// let maxAge = Math.max(...eachLength);

// let resultArr = [];

// for (let j = 1; j <= maxAge; j++) {
//   for (let i = 0; i < N; i++) {
//     if (Number(input[i].split(" ")[0]) === j) {
//       resultArr.push(input[i]);
//     }
//   }
// }

// for (let result of resultArr) {
//   console.log(result);
// }
