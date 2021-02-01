/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var fairCandySwap = function (A, B) {
    let aSum = A.reduce((pre, cur) => {
      return pre + cur;
    });
    let bSum = B.reduce((pre, cur) => {
      return pre + cur;
    });
    A.sort(function (a, b) {return a - b;});
    B.sort(function (a, b) {return a - b;});
    let target = (aSum - bSum) / 2;
    let i = 0,
      j = 0,
      cur = 0;
    while (i < A.length && j < B.length) {
      cur = A[i] - B[j];
      if (cur === target) {
        return [A[i], B[j]];
      } else if (cur > target) {
        j++;
      } else i++;
    }
  };
  