/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
var splitArray = function (nums, m) {
  let left = Math.min(...nums),
    right = 0;
  for (let i = 0; i < nums.length; ++i) {
    right += nums[i];
  }
  while (left < right) {
    const mid = left + (right - left) / 2;
    if (split(nums, m, mid)) right = mid;
    else left = mid + 1;
  }
  return right;
};
function split(nums, m, sum) {
  let cnt = 1,
    curSum = 0;
  for (let i = 0; i < nums.length; ++i) {
    curSum += nums[i];
    if (curSum > sum) {
      curSum = nums[i];
      ++cnt;
      if (cnt > m) return false;
    }
  }
  return true;
}

/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
var splitArray = function (nums, m) {
  let left = Math.max(...nums),
    right = 0;
  for (var i = 0; i < nums.length; i++) {
    right += nums[i];
  }
  let check = (target, nums, m) => {
    var cur = 1,
      sum = 0;
    for (var i = 0; i < nums.length; i++) {
      if (sum + nums[i] > target) {
        sum = nums[i];
        cur++;
      } else {
        sum += nums[i];
      }
    }
    return cur > m;
  };
  if (m == 1) return right;
  while (left < right) {
    if (check(left, nums, m)) {
      left++;
    } else {
      return left;
    }
  }
};
