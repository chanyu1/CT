"use strict";

```
配列の中に 1 つだけ重複しない数字が入っています。
その数字を返す関数を作成して下さい。
※ 配列には最低 3 つ以上の数字が入ります。

findUniqueNumber([1, 1, 5]); // -> 5 を返却
findUniqueNumber([0, 1, 3, 1, 0]); // -> 3 を返却
```;

function findUniqueNumber(array) {
  const numberCountObj = {};

  // オブジェクトの形でそれぞれの値をカウント
  array.forEach((value) => {
    numberCountObj[value] = (numberCountObj[value] || 0) + 1;
  });

  // 1つだけカウントされた値をリターン
  return Number(
    Object.keys(numberCountObj).find((key) => numberCountObj[key] === 1)
  );
}
