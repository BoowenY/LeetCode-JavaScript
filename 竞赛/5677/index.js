/**
 * @param {string} s
 * @return {number}
 */
var cal = function (num) {
  let res = 0;
  const mod = Math.pow(10, 9) + 7;
  for (let i = 1; i <= num; i++) res += i;
  return res % mod;
};
var countHomogenous = function (s) {
  let map = new Map();
  let n = s.length;
  let res = 0;
  for (let i = 0; i < n; i++) {
    map.set(s[i], map.has(s[i]) ? map.get(s[i]) + 1 : 1);
    if (s[i] != s[i + 1]) {
      res += cal(map.get(s[i]));
      map.delete(s[i]);
    }
  }
  return res;
};
