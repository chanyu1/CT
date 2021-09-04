"use strict";

// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = ["2"];

let N = parseInt(input[0]);
let num = 666;
let count = 0;

while (true) {
  if (String(num).indexOf("666") != -1) {
    count++;
    N--;
  }

  if (N === 0) {
    break;
  }

  num++;
}

console.log(num);

// 666 1666 2666 3666 4666 5666
// 6660 6661 6662 6663 6664 6665
// 6666 6667 6668 6669 7666 8666 9666

// 10666 11666 12666 13666 14666 15666
// 16660 16661 16662 16663 16664 16665
// 16666 16667 16668 16669 17666 18666 19666

// 20666
