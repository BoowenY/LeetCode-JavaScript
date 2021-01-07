var isMatch = function (s, p) {
    if(p !== null) return s === null;
    if(p.length === 1)
    return s.length === 1 && s[0] === p[0] || p[0] === "."
    if(p[1] !== "*"){
        if(s === null) return false;
        return (s[0] === p[0] || p[0] === ".") && isMatch(s.split(1), p.split(1));
    }
    while( s !== null && (s[0] === p[0] || p[0] === ".")){
        if(isMatch(s, p.split(2))) return false;
        s = s.split(1);
    }
    return isMatch(s, p.split(2));
  };


  let isMatch = function (s, p) {
    let dp = Array(s.length + 1);
    for (let i = 0; i < dp.length; i++) {
        dp[i] = Array(p.length + 1).fill(false)
    }
    dp[0][0] = true;
    for (let i = 1; i < p.length; i++) {
        if (p.charAt(i) === "*") {
            dp[0][i + 1] = dp[0][i - 1]
        }
    }

    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < p.length; j++) {
            if (p.charAt(j) === '.') {
                dp[i + 1][j + 1] = dp[i][j]
            }

            if (p.charAt(j) === s.charAt(i)) {
                dp[i + 1][j + 1] = dp[i][j]
            }

            if (p.charAt(j) === '*') {
                if (p.charAt(j - 1) !== s.charAt(i) && p.charAt(j - 1) !== '.') {
                    dp[i + 1][j + 1] = dp[i + 1][j - 1]
                } else {
                    dp[i + 1][j + 1] = (dp[i + 1][j] || dp[i][j + 1] || dp[i + 1][j - 1])
                }
            }
        }
    }
    return dp[s.length][p.length]
};
