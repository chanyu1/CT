"use strict";

// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = ["UNUCIC"];

const text = input[0];
// const phone = ["ABC", "DEF", "GHI", "JKL", "MNO", "PQRS", "TUV", "WXYZ"];
let phone = {
  2: "ABC",
  3: "DEF",
  4: "GHI",
  5: "JKL",
  6: "MNO",
  7: "PQRS",
  8: "TUV",
  9: "WXYZ",
};
let result = 0;

// for (let i = 0; i < text.length; i++) {
//   for (let j = 0; j < phone.length; j++) {
//     if (phone[j].includes(text[i])) {
//       result += j + 3;
//     }
//   }
// }
for (let i = 0; i < text.length; i++) {
  for (let j = 2; j <= 9; j++) {
    if (phone[j].includes(text[i])) {
      result += j + 1;
      break;
    }
  }
}

console.log(result);
