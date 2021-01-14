/**
 * @param {number[]} A
 * @return {boolean[]}
 */
var prefixesDivBy5 = function (A) {
  const res = [];
  let num = 0;
  for (let i = 0; i < A.length; i++) {
    num = (num * 2 + A[i]) % 5;
    res.push(num === 0);
  }
  return res;
};
