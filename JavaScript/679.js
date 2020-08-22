/**
 * @param {number[]} nums
 * @return {boolean}
 */
var judgePoint24 = function (nums) {
  if (nums.length == 1) return Math.abs(nums[0] - 24) < 1e-6;
  for (let i = 0; i < nums.length; i++)
    for (let j = i + 1; j < nums.length; j++) {
      let rest = nums.filter((value, index) => index != i && index != j);
      if (
        judgePoint24([nums[i] + nums[j], ...rest]) ||
        judgePoint24([nums[i] * nums[j], ...rest]) ||
        judgePoint24([nums[i] - nums[j], ...rest]) ||
        judgePoint24([nums[j] - nums[i], ...rest]) ||
        judgePoint24([nums[i] / nums[j], ...rest]) ||
        judgePoint24([nums[j] / nums[i], ...rest])
      )
        return true;
    }
  return false;
};
