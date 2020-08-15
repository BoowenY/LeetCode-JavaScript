/**
 * @param {number[]} boxes
 * @return {number}
 */
var removeBoxes = function (boxes) {
  var dp = new Array(100).fill(0).map((v, index) => {
    return new Array(100).fill(0).map((v, index) => {
      return new Array(100).fill(0);
    });
  });
  return calculatePoints(boxes, 0, boxes.length - 1, 0);
  function calculatePoints(boxes, l, r, k) {
    if (l > r) return 0;
    if (dp[l][r][k] != 0) return dp[l][r][k];
    while (r > l && boxes[r] == boxes[r - 1]) {
      r--;
      k++;
    }
    dp[l][r][k] = calculatePoints(boxes, l, r - 1, 0) + (k + 1) * (k + 1);
    for (let i = l; i < r; i++) {
      if (boxes[i] == boxes[r]) {
        dp[l][r][k] = Math.max(
          dp[l][r][k],
          calculatePoints(boxes, l, i, k + 1) +
            calculatePoints(boxes, i + 1, r - 1, 0)
        );
      }
    }
    return dp[l][r][k];
  }
};
