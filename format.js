"use strict";

```
連続する文字をなくした文字列を返す関数を作成して下さい。

format("abbccccaabc"); // -> abcabc を返却
format("bbitaaa"); // -> bita を返却
```;

function format(str) {
  const splitStrArray = str.split("");

  return splitStrArray.filter((v, i) => v !== splitStrArray[i + 1]).join("");
}
