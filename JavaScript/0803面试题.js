/**
 * @param {number[]} nums
 * @return {number}
 */
var findMagicIndex = function (nums) {
  return search(nums, 0, nums.length - 1);
};

var search = function (arr, low, high) {
  if (low > high) {
    return -1;
  }
  var mid = parseInt((low + high) / 2);
  var pre = search(arr, low, mid - 1);
  if (pre != -1) {
    return pre;
  } else if (arr[mid] == mid) {
    return mid;
  } else {
    return search(arr, mid + 1, high);
  }
};
