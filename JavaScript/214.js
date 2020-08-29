/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function (s) {
  let n = s.length;
  let revs = s.split("").reverse().join("");
  for (let i = 0; i < n; i++) {
    if (s.substr(0, n - i) == revs.substr(i)) return revs.substr(0, i) + s;
  }
  return "";
};
