/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let result = 1
    while (nums.includes(result)) {
        result++
    }
    return result
};

