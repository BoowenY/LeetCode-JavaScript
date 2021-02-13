/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isOneEditDistance = function (s, t) {
    if( s == "" && t == "") return false;
  const m = s.length,
    n = t.length;
  const min = m > n ? n : m;
  const max = m > n ? m : n;
  const newMin = m < n ? s : t;
  const newMax = m > n ? s : t;
  const ctn = max - min;
  let map = new Map();
  if (ctn > 1) return false;
  for (let i = 0; i < min; i++) {
    map.set(newMin[i], map.has(newMin[i]) ? map.get(newMin[i]) + 1 : 1);
  }
  if (ctn > -1) {
    for (let i = 0; i < max; i++) {
      if (map.has(newMax[i])) {
        if (map.get(newMax[i]) == 1) map.delete(newMax[i]);
        else map.set(newMax[i], map.get(newMax[i]) - 1);
      }
      console.log(...map, newMax[i], map.size);
    }
    if (map.size == 0) return true;
    return false;
  }
  return false;
};
