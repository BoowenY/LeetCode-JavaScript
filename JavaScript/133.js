/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
  return clone(node, new Map());
};
const clone = (node, map) => {
  if (!node) return null;
  let newNode = map.get(node);
  if (newNode) {
    return newNode;
  }
  newNode = new Node(node.val);
  map.set(node, newNode);
  node.neighbors.forEach((neighbor) => {
    newNode.neighbors.push(clone(neighbor, map));
  });
  return newNode;
};
