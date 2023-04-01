"use strict";

```
N x N の 2 次元配列があります。  
反時計回りで左上から中央まで一筆で数字を通ったときの配列を返す関数を作成して下さい。

const matrix = [
  [6, 2, 1],
  [5, 4, 9],
  [3, 8, 7],
];
getSpiralPath(matrix); // -> [6, 5, 3, 8, 7, 9, 1, 2, 4] を返却
```;

function getSpiralPath(matrix) {
  // 深さ
  let depth = matrix.length;
  // 回転数
  const rotationCount = Math.ceil(matrix.length / 2);
  const result = [];

  for (let i = 0; i < rotationCount; i++) {
    // 左辺探索
    for (let j = i; j < depth; j++) {
      result.push(matrix[j][i]);
    }
    // 下段探索
    for (let j = i + 1; j < depth; j++) {
      result.push(matrix[depth - 1][j]);
    }
    // 右辺探索
    for (let j = depth - 1; j > i; j--) {
      result.push(matrix[j - 1][depth - 1]);
    }
    // 上段探索
    for (let j = depth - 2; j > i; j--) {
      result.push(matrix[i][j]);
    }
    depth--;
  }

  return result;
}
