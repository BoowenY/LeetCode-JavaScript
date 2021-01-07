/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    let dp = new Array(s.length + 1).fill(false),
        n = s.length;
    dp[0] = true; 
    for (let i = 1; i <= n; i++) {
      let curr = false;
      for (let j = 0; j < i; j++) {
        if ( dp[j] === true && wordDict.indexOf( s.slice(j, i) ) !== -1 ) {
          curr = true;
          break;
        }
      }
      dp[i] = curr;
    }
    
    return dp[s.length];
  }
  