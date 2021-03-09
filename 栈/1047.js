/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function (S) {
  const res = [],
    sLen = S.length;
  res.push(S[0]);
  let n = 1;
  for (let i = 1; i < sLen; i++) {
    if (S[i] == res[n - 1]) {
      res.pop();
      n--;
    } else {
      res.push(S[i]);
      n++;
    }
  }
  return res.join("").toString();
};
