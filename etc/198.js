var rob = function(nums) {
    if(nums.length === 0) return 0
    if(nums.length === 1) return nums[0]

    let index2 = nums[0]
    let index1 = Math.max(nums[0], nums[1])
    for(let i = 2; i <= nums.length; i++) {
        const max = Math.max(nums[i] + index2, index1)
        index2 = index1
        index1 = max
    }
    return index1
};