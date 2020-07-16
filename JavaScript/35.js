
var searchInsert = function(nums, target) {
    if( nums.indexOf(target) != -1) return nums.indexOf(target)
    for(var i=0; i<nums.length; i++){
        if(target < nums[i]) return i
    }
    return i
};

