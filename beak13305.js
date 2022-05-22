"use strict";

// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = ["2", "1", "7 1"];

const n = +parseInt(input[0]);
let distance = input[1].split(" ").map((num) => BigInt(num));
let price = input[2].split(" ").map((num) => BigInt(num));

let curPrice = price[0];
let cost = 0n;

for (let i = 0; i < n - 1; i++) {
  cost += curPrice * distance[i];
  if (curPrice > price[i + 1]) curPrice = price[i + 1];
}

console.log(String(cost));
