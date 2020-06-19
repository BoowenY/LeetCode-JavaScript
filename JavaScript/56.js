var merge = function(nums) {
    if(nums.length < 2) return nums
    nums.sort((a,b) => {
        return a[0] - b[0]
    })
    let L = nums[0],result = []
    for(let i of nums){
        if(L[1] >= nums[0]){
            L[1] =Math.max(L[1], nums[1])
        }
        else{
            result.push(L)
            L = nums
        }
    }
    if(L.length !== 0 ) result.push(L)
    return result
};
