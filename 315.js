var countSmaller = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let a = 0;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[i]) {
        a++;
      }
    }
    nums[i] = a;
  }
  return nums;
};
