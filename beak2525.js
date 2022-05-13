"use strict";

// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = ["17 40", "80"];

const current = input[0].split(" ").map((num) => parseInt(num));

const currentHour = current[0];
const currentMinute = current[1];
const cookTime = Number(input[1]);

const endTimeHour = parseInt(
  (currentHour * 60 + currentMinute + cookTime) / 60
);
const endTimeMinute = parseInt(
  (currentHour * 60 + currentMinute + cookTime) % 60
);

console.log(endTimeHour >= 24 ? endTimeHour - 24 : endTimeHour, endTimeMinute);
