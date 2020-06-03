var postorderTraversal = function (root) {
  let s = [],
    stack = [];
  while (root) {
    if (root.left) {
      stack.push(root);
      root = root.left;
    } else if (root.right) {
      stack.push(root);
      root = root.right;
    } else {
      s.push(root.val);
      root = stack.pop();
      if (root && root.left) root.left = null;
      else if (root && root.right) root.right = null;
    }
  }
  return s;
};
