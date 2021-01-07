var maxCoins = function(nums) {
  // 先 copy 一份数组做越界处理
  let dp = [],
      n = nums.length,
      numsCopy = new Array( n + 2 );
  numsCopy[0] = 1;
  numsCopy[n + 1] = 1;
  for (let i = 1; i <= n; i++) {
    numsCopy[i] = nums[i - 1];
  }
  n = numsCopy.length; // 把添加了首尾虚拟边界的数组长度赋值给 n
  
  // 初始化 dp 数组，每个区间 dp[i][j] 不包含 i 和 j
  for (let i = 0; i < n; i++) {
    dp[i] = new Array(n).fill(0);
  }
  
  // 动态规划开始，区间长度从 1 扩展到 copy数组的长度
  for (let space = 1; space < n; space++) {
    for (let i = 0; i + space < n; i++) {
      for (let j = i + 1; j < i + space; j++) {
        dp[i][i + space] = Math.max(dp[i][i + space], dp[i][j] + dp[j][i + space] + numsCopy[i] * numsCopy[j] * numsCopy[i + space]);
      }
    }
  }
  
  return dp[0][n - 1];
}

