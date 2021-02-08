var maxPathSum = function (root) {
  let maxSum = -Infinity;
  let helper = function (node) {
    if (node == null) return 0;
    let leftVal = Math.max(helper(node.left), 0);
    let rightVal = Math.max(helper(node.right), 0);
    let newPath = node.val + leftVal + rightVal;
    maxSum = Math.max(maxSum, newPath);
    return node.val + Math.max(leftVal, rightVal);
  };
  helper(root);
  return maxSum;
};
