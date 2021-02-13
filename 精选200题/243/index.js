/**
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestDistance = function (words, word1, word2) {
  const n = words.length;
  let a,
    b,
    res = n;
  for (let i = 0; i < n; i++) {
    if (words[i] == word1) a = i;
    if (words[i] == word2) b = i;
    if (a != undefined && b != undefined) {
      res = Math.min(res, Math.abs(a - b));
    }
  }
  return res;
};
