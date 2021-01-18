/**
 * @param {number[]} nums
 * @return {number}
 */
var tupleSameProduct = function (nums) {
  let map = {}; // 哈希表
  let n = nums.length;
  let res = 0; // 计数器
  for (let i = 0; i < n; ++i) {
    for (let j = i + 1; j < n; ++j) {
      let x = nums[i] * nums[j];
      map[x] ? ((res += map[x]), map[x]++) : (map[x] = 1);
    }
  }
  return res * 8;
};
