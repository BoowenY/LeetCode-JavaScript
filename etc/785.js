var isBipartite = function (graph) {
  const root = new Array(graph.length);
  for (let i = 0; i < graph.length; ++i) root[i] = i;
  for (let i = 0; i < graph.length; ++i) {
    if (graph[i] == 0) continue;
    let x = find(root, i),
      y = find(root, graph[i][0]);
    if (x == y) return false;
    for (let j = 1; j < graph[i].length; ++j) {
      let parent = find(root, graph[i][j]);
      if (x == parent) return false;
      root[parent] = y;
    }
  }
  return true;
};
function find(root, i) {
  return root[i] == i ? i : find(root, root[i]);
}
