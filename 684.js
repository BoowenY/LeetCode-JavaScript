// 684. 冗余连接
/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function (edges) {
  /**
   * 要构建的是一棵树，其中树的特点就是有n个顶点，n-1条边构成
   * 声明一个数组parent用于构建边中的每一个节点的父节点
   * 初始的时候每一个节点的父节点就是本身
   * 另外，由于含有n的顶点，并且顶点的值是1-n之间的
   * 因此可以声明一个n+1大小的parent
   * 为每一条边寻找父节点
   * 如果当前两个节点的父节点相同，则说明这条边已经连通，可以删掉
   */
  let n = edges.length;
  let parent = [];
  //初始化每一个节点的父节点
  for (let i = 0; i < n + 1; i++) {
    parent[i] = i;
  }

  for (let i = 0; i < edges.length; i++) {
    let a = edges[i][0];
    let b = edges[i][1];
    if (merge(a, b, parent) == -1) {
      //此时图构成了环
      return edges[i];
    }
  }
  return -1;
};
//查找某一个节点的父节点
const find = function (x, parent) {
  while (x != parent[x]) {
    x = parent[x];
  }
  return x;
};

//将两个不同的子集合合并成一个集合
const merge = function (x, y, parent) {
  let rootX = find(x, parent);
  let rootY = find(y, parent);
  if (rootX == rootY) {
    return -1;
  }
  parent[rootX] = rootY;
  return 1;
};
