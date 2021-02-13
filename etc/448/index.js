/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  const n = nums.length;
  const res = new Array(2 * n);
  let ctn = 0;
  for (let i = 0; i < n; i++) {
    res[nums[i] - 1] = nums[i];
  }
  for (let i = 0; i < n; i++) {
    if (res[i] == undefined) {
      res[n + ctn] = i + 1;
      ctn += 1;
    }
  }
  res.splice(0, 8);
  res.splice(ctn, n);
  return res;
};
