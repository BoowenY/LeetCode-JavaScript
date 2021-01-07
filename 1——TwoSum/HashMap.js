// 执行用时：76 ms, 在所有 JavaScript 提交中击败了94.48%的用户
// 内存消耗：37.9 MB, 在所有 JavaScript 提交中击败了87.63%的用户
var twoSum = function(nums, target) {
    const map = new Map();
    for(let i = 0; i < nums.length; i++) {
        if(map.has(nums[i])) 
            return [map.get(nums[i]), i];
        else
            map.set(target - nums[i], i);
    }
}