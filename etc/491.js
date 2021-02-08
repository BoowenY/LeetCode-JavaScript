var findSubsequences = function (nums) {
  let res = [];

  dfs(0, nums, [-101], res);
  return res;
};

function dfs(j, nums, temp, res) {
  if (temp.length > 2) {
    res.push(temp.slice(1));
  }
  let s = new Set();

  for (let i = j; i < nums.length; i++) {
    if (nums[i] < temp[temp.length - 1]) continue;
    if (s.has(nums[i])) continue;

    s.add(nums[i]);
    temp.push(nums[i]);
    dfs(i + 1, nums, temp, res);
    temp.pop();
  }
}
