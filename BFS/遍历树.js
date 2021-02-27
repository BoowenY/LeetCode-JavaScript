/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var levelOrder = function (root) {
  if (root == null) {
    return [];
  }
  let queue = [];
  queue.push(root);
  let ans = [];
  while (queue.length != 0) {
    let node = queue.shift();
    ans.push(node.val);
    if (node.left != null) {
      queue.push(node.left);
    }
    if (node.right != null) {
      queue.push(node.right);
    }
  }
  return ans;
};
