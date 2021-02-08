/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function (matrix) {
  var raw = matrix.length;
  if (!raw) return raw;
  var column = matrix[0].length;
  var result = 1;
  // 创建二维数组
  var arr = Array.from(new Array(raw), () => new Array(column).fill(0));

  function test(i, j) {
    // 因为如果存在递归的情况的话会提前把需要计算位置的值给计算出来，我们就可以直接从arr缓存中拿就行了
    if (arr[i][j] !== 0) return arr[i][j];

    var source = matrix[i][j]; // 当前位置的原始值
    var n1 = 0,
      n2 = 0,
      n3 = 0,
      n4 = 0; // 1 2 3 4 分别代表该位置到 上右下左 四个方向所需要的步数
    n1 = i - 1 < 0 ? 0 : source >= matrix[i - 1][j] ? 1 : test(i - 1, j) + 1;
    n2 =
      j + 1 >= column ? 0 : source >= matrix[i][j + 1] ? 1 : test(i, j + 1) + 1;
    n3 = i + 1 >= raw ? 0 : source >= matrix[i + 1][j] ? 1 : test(i + 1, j) + 1;
    n4 = j - 1 < 0 ? 0 : source >= matrix[i][j - 1] ? 1 : test(i, j - 1) + 1;

    // 通过递归计算出来的值可以提前就保存在缓存中，则之后不需要再重新走一遍
    return (arr[i][j] = Math.max(n1, n2, n3, n4));
  }

  for (var i = 0; i < raw; i++) {
    for (var j = 0; j < column; j++) {
      arr[i][j] = test(i, j);
      result = result < arr[i][j] ? arr[i][j] : result;
    }
  }
  return result;
};
