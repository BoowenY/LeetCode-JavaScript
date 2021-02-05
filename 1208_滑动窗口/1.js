/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
var equalSubstring = function (s, t, maxCost) {
  let left = 0,
    right = 0,
    maxSum = 0,
    n = s.length;
  for (let i = 0; i < n; i++) {
    maxSum += Math.abs(s.charCodeAt(i) - t.charCodeAt(i));
    if (maxSum > maxCost) {
      maxSum -= Math.abs(s.charCodeAt(left) - t.charCodeAt(left)); 
      left++;
    }
    right++;
  }
  return right - left;
};
