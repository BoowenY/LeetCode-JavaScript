/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    const n = nums.length;
    let res = nums[0]
    for(let i = 1; i < n; i++) {
        if(nums[i - 1] > 0) nums[i] += nums[i - 1];
        res = Math.max(res, nums[i])
    }
    return res;
};
/**
 * 求最短连续子数组最大值
 */