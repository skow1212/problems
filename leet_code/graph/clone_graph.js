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
  if (!node) {
    return node;
  }
  //bfs
  let map = new Map();
  let visited = new Set();
  let q = [node];
  while (q[0]) {
    let n = q.shift();
    if (!visited.has(n)) {
      if (!map.has(n)) {
        map.set(n, new Node(n.val));
      }
      n.neighbors.forEach((neighbor) => {
        if (!map.has(neighbor)) {
          map.set(neighbor, new Node(neighbor.val));
        }
        q.push(neighbor);
        map.get(n).neighbors.push(map.get(neighbor));
      });
      visited.add(n);
    }
  }
  return map.get(node);
  // dfs
  // let dfs = (node, map, visited) => {
  //   if (!visited.has(node)) {
  //     if (!map.has(node)) {
  //       map.set(node, new Node(node.val));
  //     }
  //     node.neighbors.forEach((neighbor) => {
  //       if (!map.has(neighbor)) {
  //         map.set(neighbor, new Node(neighbor.val));
  //         dfs(neighbor, map, visited);
  //       }
  //       map.get(node).neighbors.push(map.get(neighbor));
  //     });
  //   }
  // };
  // dfs(node, map, visited);
  // return map.get(node);
};
