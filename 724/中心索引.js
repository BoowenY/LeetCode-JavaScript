/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {

    let i = 0, j = nums.length - 1;
    let prev = [0], tail = nums[j];
while(i + 1 != j) {
        if(prev == tail) return i + 1;
        if(prev > tail) {
            j--;
            tail += nums[j];
        }
        else {
            i++;
            prev += nums[i]
        }

    }
    return -1;
};