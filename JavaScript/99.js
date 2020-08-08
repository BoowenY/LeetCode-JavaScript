var recoverTree = function (root) {
  let s = [],
    x = null,
    y = null,
    pred = null;
  while (s.length || root) {
    while (root) {
      s.push(root);
      root = root.left;
    }
    root = s.pop();
    if (pred && root.val < pred.val) {
      y = root;
      if (x) {
        x = pred;
      } else {
        break;
      }
    }
    pred = root;
    root = root.right;
  }
  swap(x, y);
  function swap(x, y) {
    const temp = x.val;
    x.val = y.val;
    y.val = temp;
  }
};
