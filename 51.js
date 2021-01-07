// var solveNQueens = function (n) {
//   const result = [];
//   const queenCol = new Array(n).fill("-1");
//   solve(0, queenCol, result);
// };
// var solve = (row, qCol, res) => {
//   let n = qCol.length;

//   var isValid = (qCol, row, col) => {
//     for (let i = 0; i < row; i++) {
//       if (col == qCol[i] || Math.abs(row - i) == Math.abs(col - qCol[i]))
//         return false;
//     }
//     return true;
//   };

//   if (row === n) {
//     var collision = new Array(n).fill(".");
//     for (let i = 0; i < n; ++i) collision[i][qCol[i]] = "Q";
//     res.push(collision);
//     return;
//   }

//   for (let i = 0; i < n; i++) {
//     if (isValid(qCol, row, i)) {
//       qCol[row] = i;
//       solve(row + 1, qCol, collision);
//       qCol[row] = -1;
//     }
//   }
// };

var solveNQueens = function (n) {
    var result = [],qCol =new Array(n).fill("-1");

  solve(0);

  var solve = (i) => {
    if (i == n) {
      arr = [];
      for (var i = 0; i < n; i++) {
        arr[i] = "";
        for (var j = 0; j < n; j++) {
          if (qCol [i] == j) {
            arr[i] += "Q";
          } else {
            arr[i] += ".";
          }
        }
      }
      result.push(arr);
      return;
    }

    for (var j = 0; j < n; j++) {
      flag = 0;
      qCol [i] = j;
      for (var k = 0; k < i; k++) {
        if (qCol [k] == j || Math.abs(k - i) == Math.abs(qCol [k] - qCol [i])) {
          flag = 1;
          break;
        }
      }
      if (flag == 0) {
        solve(i + 1);
      }
    }
  }
  return result;
};
console.log(solveNQueens(4));
