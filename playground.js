"use strict";

// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = ["55-50+40"];

let list = input[0].split("-");
let tmp = [];

for (let i = 0; i < list.length; i++) {
  let cnt = 0;
  let s = list[i].split("+");

  for (let j = 0; j < s.length; j++) {
    cnt += parseInt(s[j]);
  }
  tmp.push(cnt);
}

let result = tmp[0];

for (let k = 1; k < tmp.length; k++) {
  result -= tmp[k];
}

console.log(result);
console.log(result);
