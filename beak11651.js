"use strict";

// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = ["5", "0 4", "2 2", "1 -1", "1 2", "3 3"];

const N = Number(input[0]);
const newArr = [];
let result = "";

for (let i = 1; i <= N; i++) {
  newArr.push(input[i].split(" ").map((num) => parseInt(num)));
}

newArr
  .sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    } else {
      return a[1] - b[1];
    }
  })
  .forEach((coords) => (result += `${coords[0]} ${coords[1]}\n`));

console.log(result);

// for (let j = 0; j < newArr.length; j++) {
//   console.log(newArr[j][0] + " " + newArr[j][1]);
// }
