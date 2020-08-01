/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var smallestRange = function (nums) {
  // 将所有数组里的数存到obj里，key为数，value为包含key的数组的序号组成的Set
  const obj = {};
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums[i].length; j++) {
      obj[nums[i][j]]
        ? obj[nums[i][j]].add(i)
        : (obj[nums[i][j]] = new Set([i]));
    }
  }
  // 对obj的key进行排序
  let arr = Object.keys(obj).sort((a, b) => a - b);
  // 滑动窗口， window 为窗口，window[i]表示窗口里包含第i个数组中数的个数
  let left = 0,
    right = 0,
    window = new Array(nums.length).fill(0);
  let ans = [arr[0], arr[arr.length - 1]];
  while (right < arr.length) {
    const cur = arr[right];
    right++;
    obj[cur].forEach((v) => {
      window[v]++;
    });
    // 若窗口里包含每个数组中至少一个数
    while (window.every((v) => v > 0)) {
      const temp = arr[left];
      if (cur - temp < ans[1] - ans[0]) ans = [temp, cur];
      left++;
      obj[temp].forEach((v) => {
        window[v]--;
      });
    }
  }
  return ans;
};
