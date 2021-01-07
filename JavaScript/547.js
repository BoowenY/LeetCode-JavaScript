function Node(val) {
  this.val = val;
  this.parent = this;
}

function find(x) {
  if (x !== x.parent) return find(x.parent);
  return x.parent;
}

/**
 * @param {number[][]} M
 * @return {number}
 */
var findCircleNum = function (M) {
  // 初始化元素
  const arr = [];
  for (let i = 0; i < M.length; i++) {
    arr[i] = new Node(i);
  }

  for (let i = 0; i < M.length; i++) {
    for (let j = 0; j < M.length; j++) {
      if (M[i][j]) {
        xRoot = find(arr[i]);
        yRoot = find(arr[j]);
        xRoot.parent = yRoot;
      }
    }
  }

  let res = 0;
  const tmp = new Map(); // 记录元
  for (let i = 0; i < arr.length; i++) {
    if (!tmp.has(find(arr[i]))) {
      tmp.set(find(arr[i]), true);
      res++;
    }
  }
  return res;
};
