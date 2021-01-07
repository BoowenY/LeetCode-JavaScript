/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  if (!s) return true;
  const slen = s.length;
  for (let i = 0; i < slen; i++) {
    const temp = t.indexOf(s[i]);
    if (temp >= 0) {
      t = t.slice(temp + 1);
    } else {
      return false;
    }
  }
  return true;
};
