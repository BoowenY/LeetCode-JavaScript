/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
  if (n == 2 || n == 3) return n - 1;
  let res = 1;
  while (n > 4) {
    res *= 3;
    n -= 3;
  }
  return res * n;
};

/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
  let dp = new Array(n + 1).fill(1);
  for (let i = 3; i <= n; ++i) {
    for (let j = 1; j < i; ++j) {
      dp[i] = Math.max(dp[i], Math.max(j * (i - j), j * dp[i - j]));
    }
  }
  return dp[n];
};
