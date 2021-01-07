const countSubstrings = (s) => {
  let count = 0;
  const len = s.length;

  const dp = new Array(len);
  for (let i = 0; i < len; i++) {
    dp[i] = new Array(len).fill(false);
  }

  for (let j = 0; j < len; j++) {
    for (let i = 0; i <= j; i++) {
      if (i == j) {
        dp[i][j] = true;
      } else if (s[i] == s[j]) {
        dp[i][j] = j - i == 1 || dp[i + 1][j - 1];
      }
      if (dp[i][j]) count++;
    }
  }
  return count;
};
