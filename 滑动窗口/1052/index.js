/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} X
 * @return {number}
 */
var maxSatisfied = function (customers, grumpy, X) {
  const n = grumpy.length;
  const re = new Array(n).fill(0);
  let sum = 0,
    ctn = 0,
    num = 0;
  for (let i = 0; i < n; i++) {
    if (grumpy[i] == 0) sum += customers[i];
    else re[i] = customers[i];
  }
  for (let i = X - 1; i < n; i++) {
    for (let j = i - X + 1; j <= i; j++) {
      num += re[j];
    }
    ctn = Math.max(ctn, num);
    num = 0;
  }
  return ctn + sum;
};
