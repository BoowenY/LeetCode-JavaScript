function helper(nums, start, end) {
    let t = nums[start];
    while(start < end) {
        while(start < end && nums[end] >= t) {
            end--;
        }
        nums[start] = nums[end];
        while(start < end && nums[start] <= t) {
            start++;
        }
        nums[end] = nums[start];
    }
    nums[start] = t;
    return start;
}
var findKthLargest = function(nums, k) {
    if(nums.length < 2) return nums[0];
    k = nums.length - k;
    let start = 0, end = nums.length - 1, mid;
    while(start < end) {
        mid = helper(nums, start, end);
        if(mid === k) {
            break
        }else if(mid < k) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return nums[k];
};
