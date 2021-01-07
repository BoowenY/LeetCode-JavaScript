//不稳定算法，变相哈希表，最优时击败100% 
var twoSum = function(nums, target) {
    let i = 0, res = [];  //每次循环都代表着每个数组元素的下表，使用一个额外数组记录下标与值的对应关系
    while(i < nums.length) {
        let value = target - nums[i]; //记录每个元素与目标元素的差值
        if(res[value] != undefined) //访问数组差值位置是否存在元素，存在即有相同的差值元素，直接返回
            return [res[value], i]
        else
            res[nums[i]] = i; //如果不存在同样的元素，就在差值元素位置上记录这个元素的循环次数，即为该元素的下标
        i++;
    }
}