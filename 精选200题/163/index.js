class Solution {
    public:
        vector<string> findMissingRanges(vector<int>& nums, int lower, int upper) {
            vector<string> res;
            for (int num : nums) {
                if (num > lower) res.push_back(to_string(lower) + (num - 1 > lower ? ("->" + to_string(num - 1)) : ""));
                if (num == upper) return res;
                lower = num + 1;
            }
            if (lower <= upper) res.push_back(to_string(lower) + (upper > lower ? ("->" + to_string(upper)) : ""));
            return res;
        }
    };

/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {string[]}
 */
var findMissingRanges = function(nums, lower, upper) {
    let res = [];
    for(let i = 0; i < nums.length; i++){
        if(nums[i] > lower) res.push(lower + (nums[i] - 1 > lower ? ("->" + (nums[i] - 1).toString()): ''));
        if(nums[i] === upper) return res;
        lower += 1;
    }
    if(lower < upper) res.push(lower + (upper > lower ? ("->" + upper): ""));
    return res;
};